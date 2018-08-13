const path = require('path');
const {homedir} = require('os');
const winston = require('winston');
const jsonStringify = require('fast-safe-stringify');

const LOG_FILE_NAME = '.application.log';
const LOG_FILE_PATH =
  process.env.NODE_ENV === 'production'
    ? path.join(homedir(), LOG_FILE_NAME)
    : path.join(__dirname, '..', '..', LOG_FILE_NAME);

const defaultFormats = [
  winston.format.timestamp(),
  winston.format.printf(
    ({timestamp, level, message}) =>
      `${timestamp} ${level}: ${typeof message === 'string' ? message : '\n' + jsonStringify(message, null, 4)}`
  )
];

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), ...defaultFormats),
      level: process.env.LOG_LEVEL_CONSOLE,
      handleExceptions: true
    }),
    new winston.transports.File({
      format: winston.format.combine(winston.format.uncolorize(), ...defaultFormats),
      level: process.env.LOG_LEVEL_FILE,
      filename: LOG_FILE_PATH,
      handleExceptions: true,
      tailable: true,
      maxsize: 10 * 1024 * 1024,
      maxFiles: 5
    })
  ]
});

logger.expressMiddleware = function expressMiddleware(req, res, next) {
  if (req.url.includes('__webpack') && process.env.NODE_ENV === 'development') {
    return next();
  }

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const defaultMessage = `${ip} - ${req.method} ${req.url}`;
  const startTimestemp = Date.now();
  const waitingTimePrintInterval = 5000;

  let waitingTime = 0;
  const intervalId = setInterval(() => {
    waitingTime += waitingTimePrintInterval;
    logger.warn(`${defaultMessage} - wait for ${waitingTime / 1000}s...`);
  }, waitingTimePrintInterval);

  logger.info(defaultMessage);

  const printExecutionTime = (statusCode = '') => {
    const message = `${defaultMessage} - ${statusCode} - ${(Date.now() - startTimestemp) / 1000}s`;
    if (res.statusCode < 400) {
      logger.info(message);
    } else {
      logger.warn(message);
    }
  };

  req.on('end', () => {
    clearInterval(intervalId);
    if (!req.isProxy) {
      printExecutionTime(res.statusCode);
    }
  });

  req.on('close', () => {
    clearInterval(intervalId);
    if (!req.isProxy) {
      printExecutionTime('[closed by user]');
    }
  });

  return next();
};

logger.info(`Application logs file: ${LOG_FILE_PATH}`);

module.exports = logger;

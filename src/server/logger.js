const path = require('path');
const {homedir} = require('os');
const {
  Logger,
  transports: {Console, File}
} = require('winston');

const LOG_FILE_NAME = '.application.log';
const LOG_FILE_PATH =
  process.env.NODE_ENV === 'production'
    ? path.join(homedir(), LOG_FILE_NAME)
    : path.join(__dirname, '..', '..', LOG_FILE_NAME);
const LOG_LEVEL = process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'verbose' : 'debug');

const logger = new Logger({
  transports: [
    new Console({
      level: LOG_LEVEL,
      colorize: true,
      timestamp: true,
      prettyPrint: true
    }),
    new File({
      level: LOG_LEVEL,
      filename: LOG_FILE_PATH,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      prettyPrint: true,
      tailable: true,
      maxsize: 10 * 1024 * 1024,
      maxFiles: 10,
      json: false
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
    logger.verbose(`${defaultMessage} - wait for ${waitingTime / 1000}s...`);
  }, waitingTimePrintInterval);

  const printExecutionTime = (statusCode = '') => {
    const message = `${defaultMessage} - ${statusCode} - ${(Date.now() - startTimestemp) / 1000}s`;
    if (res.statusCode < 400) {
      logger.info(message);
    } else {
      logger.warn(message);
    }
    clearInterval(intervalId);
  };

  req.on('end', () => printExecutionTime(res.statusCode));
  req.on('close', () => printExecutionTime('[closed by user]'));

  return next();
};

logger.info(`Application logs file: ${LOG_FILE_PATH}`);

module.exports = logger;

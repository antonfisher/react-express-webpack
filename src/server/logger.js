const path = require('path');
const {homedir} = require('os');
const {Logger, transports: {Console, File}} = require('winston');

const LOG_FILE_NAME = '.application.log';
const LOG_FILE_PATH = (
  process.env.NODE_ENV === 'production'
    ? path.join(homedir(), LOG_FILE_NAME)
    : path.join(__dirname, '..', '..', LOG_FILE_NAME)
);

const logger = new Logger({
  transports: [
    new Console({
      level: 'debug',
      colorize: true,
      timestamp: true,
      prettyPrint: true
    }),
    new File({
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

  const defaultMessage = `${req.method} ${req.url}`;
  const startTimestemp = Date.now();
  const waitingTimePrintInterval = 1000;

  let waitingTime = 0;
  const intervalId = setInterval(() => {
    waitingTime += waitingTimePrintInterval;
    logger.verbose(`${defaultMessage} - wait for ${waitingTime / 1000}s...`);
  }, waitingTimePrintInterval);

  logger.info(defaultMessage);

  req.on('end', () => {
    const message = `${defaultMessage} - ${res.statusCode} - ${(Date.now() - startTimestemp) / 1000}s`;
    if (res.statusCode < 400) {
      logger.info(message);
    } else {
      logger.warn(message);
    }
    clearInterval(intervalId);
  });

  return next();
};

logger.info(`Application logs file: ${LOG_FILE_PATH}`);

module.exports = logger;

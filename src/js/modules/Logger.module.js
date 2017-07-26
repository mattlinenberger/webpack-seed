import CONFIG from '../app.config';

const LOGGER = {
  TRACE: {
    method: console['trace'],//eslint-disable-line
    value: 5,
  },
  DEBUG: {
    method: console['debug'],//eslint-disable-line
    value: 4,
  },
  INFO: {
    method: console['info'],//eslint-disable-line
    value: 3,
  },
  WARN: {
    method: console['warn'],//eslint-disable-line
    value: 2,
  },
  ERROR: {
    method: console['error'],//eslint-disable-line
    value: 1,
  },
};

export default class Logger {
  /* constructor */
  constructor(loggerName) {
    this.loggerName = loggerName;

    this.trace =
      this.getLoggerClosure(LOGGER.TRACE);

    this.debug =
      this.getLoggerClosure(LOGGER.DEBUG);

    this.info =
      this.getLoggerClosure(LOGGER.INFO);

    this.warn =
      this.getLoggerClosure(LOGGER.WARN);

    this.error =
      this.getLoggerClosure(LOGGER.ERROR);
  }

  getLoggerClosure(logger) {
    return (arg1, arg2, arg3, arg4, arg5) => {
      /* if the logging level is higer than config'd level */
      if (logger.level > CONFIG.LOGGING.LEVEL) {
        /* don't log */
        return;
      }

      if (arg1 && arg2 && arg3 && arg4 && arg5) {
        logger.method(arg1, arg2, arg3, arg4, arg5);
      }

      if (arg1 && arg2 && arg3 && arg4) {
        logger.method(arg1, arg2, arg3, arg4);
      }

      if (arg1 && arg2 && arg3) {
        logger.method(arg1, arg2, arg3);
      }

      if (arg1 && arg2) {
        logger.method(arg1, arg2);
      }

      logger.method(arg1);
    };
  }
}


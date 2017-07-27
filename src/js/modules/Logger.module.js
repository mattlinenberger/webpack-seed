import CONFIG from '../app.config';

const LOGGER = {
  TRACE: {
    method: 'trace',
    value: 6,
  },
  LOG: {
    method: 'log',
    value: 5,
  },
  DEBUG: {
    method: 'debug',
    value: 4,
  },
  INFO: {
    method: 'info',
    value: 3,
  },
  WARN: {
    method: 'warn',
    value: 2,
  },
  ERROR: {
    method: 'error',
    value: 1,
  },
};

export default class Logger {
  /* constructor */
  constructor(loggerName) {
    this.loggerName = loggerName;

    /* determine if the logger is in the custom loggers map */
    this.isCustomLogger =
      this.isLoggingCustom(loggerName);

    this.customLoggerlevel =
      this.getCustomLoggerLevel(loggerName);

    /* setup the logger's logging methods */
    this.initLoggingMethods();
  }

  initLoggingMethods(loggerName) {
    this.trace =
      this.getLoggerClosure(
        LOGGER.TRACE,
        loggerName);

    this.log =
      this.getLoggerClosure(
        LOGGER.LOG,
        loggerName);

    this.debug =
      this.getLoggerClosure(
        LOGGER.DEBUG,
        loggerName);

    this.info =
      this.getLoggerClosure(
        LOGGER.INFO,
        loggerName);

    this.warn =
      this.getLoggerClosure(
        LOGGER.WARN,
        loggerName);

    this.error =
      this.getLoggerClosure(
        LOGGER.ERROR,
        loggerName);
  }

  isLoggingCustom(loggerName) {
    /* check if custom loggers are enabled, if not, return */
    if (CONFIG.LOGGING.CUSTOM_LOGGERS_ENABLED !== true) {
      return false;
    }

    /* custom loggers are enabled, check if this loggers is in the map */
    let isCustomLogger = false;

    /* loop through the custom loggers */
    CONFIG
      .LOGGING
      .CUSTOM_LOGGERS
      .forEach((value, key) => {
        const regex = `^${key}(:.{0,})?$`;
        const pattern = new RegExp(regex);

        /* if the logger name matches a custom logger */
        if (pattern.test(loggerName)) {
          isCustomLogger = true;
        }
      });

    /* the logger is not a custom logger */
    if (!isCustomLogger) {
      return false;
    }

    /* custom loggers are enabled and the logger was found */
    return true;
  }

  getCustomLoggerLevel(loggerName) {
    let logLevel = 0;

    /* loop through the custom loggers */
    CONFIG
      .LOGGING
      .CUSTOM_LOGGERS
      .forEach((value, key) => {
        const regex = `^${key}(:.{0,})?$`;
        const pattern = new RegExp(regex);

        /* if the logger name matches a custom logger */
        if (pattern.test(loggerName)) {
          logLevel = value;
        }
      });

    return logLevel;
  }

  getLoggerClosure(logger) {
    const loggerName = this.loggerName;
    const isCustomLogger = this.isCustomLogger;
    const customLoggerlevel = this.customLoggerlevel;

    return (...args) => {
      /* if no args passed in, return */
      if (!args) {
        return;
      }

      /* if logging disabled via log level and this is not a custom logger */
      if (logger.value > CONFIG.LOGGING.LEVEL && !isCustomLogger) {
        return;
      }

      if (isCustomLogger === true) {
        /* check the level of the custom logger */
        if (logger.value > customLoggerlevel) {
          /* do not log, return */
          return;
        }
      }

      let prefix = `[${loggerName}]: `;
      let firstArgString = false;

      if ((typeof args[0]) === 'string') {
        prefix += args[0];
        firstArgString = true;
      }

      switch (args.length) {
        case 5:
          if (firstArgString) {
            console[logger.method](prefix, args[1], args[2], args[3], args[4]); // eslint-disable-line
          } else {
            console[logger.method](prefix, args[0], args[1], args[2], args[3], args[4]); // eslint-disable-line
          }
          break;

        case 4:
          if (firstArgString) {
            console[logger.method](prefix, args[1], args[2], args[3]); // eslint-disable-line
          } else {
            console[logger.method](prefix, args[0], args[1], args[2], args[3]); // eslint-disable-line
          }
          break;

        case 3:
          if (firstArgString) {
            console[logger.method](prefix, args[1], args[2]); // eslint-disable-line
          } else {
            console[logger.method](prefix, args[0], args[1], args[2]); // eslint-disable-line
          }
          break;

        case 2:
          if (firstArgString) {
            console[logger.method](prefix, args[1]); // eslint-disable-line
          } else {
            console[logger.method](prefix, args[0], args[1]); // eslint-disable-line
          }
          break;

        case 1:
          if (firstArgString) {
            console[logger.method](prefix); // eslint-disable-line
          } else {
            console[logger.method](prefix, args[0]); // eslint-disable-line
          }
          break;

        default:
          break;
      }
    };
  }
}


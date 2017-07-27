
/* add loggers here that have their own log-level */

const loggers = new Map();

/* logger name and the custom level */
loggers.set('SampleView', 5);

export default {
  LOGGING: {
    LEVEL: 5,
    CUSTOM_LOGGERS: loggers,
    CUSTOM_LOGGERS_ENABLED: false,
  },
};

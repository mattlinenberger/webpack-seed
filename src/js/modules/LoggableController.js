import Logger from './Logger.module';

export default class LoggableController {
  constructor(loggerName) {
    this.logger = new Logger(loggerName);
    this.logger.log('Constructed!');
  }

  getLogger(loggerName) {
    return new Logger(`${this.loggerName}:${loggerName}`);
  }
}

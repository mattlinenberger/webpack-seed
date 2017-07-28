import Logger from '../modules/Logger.module';

class SampleService {
  constructor() {
    this.logger = new Logger('SampleSvc');
    this.logger.log('Constructed!');
    this.prop = Date.now();
  }

  getProperty() {
    return this.prop;
  }
}

const svc = new SampleService();

export default svc;

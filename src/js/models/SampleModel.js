import LoggableModel from './LoggableModel';

const SampleModel = LoggableModel.extend({
  initialize(loggerName) {
    /* init the logger */
    this.initLogger(loggerName);

    this.logger.log('initialized!');
  },
  sayHello() {
    console.log('Hello, Backbone!');
    this.set({ a: 'b' });
  },
});

export default SampleModel;

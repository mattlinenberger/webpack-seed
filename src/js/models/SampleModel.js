import LoggableModel from './LoggableModel';

const SampleModel = LoggableModel.extend({
  initialize: function(loggerName) {
    /* init the logger */
    this.initLogger(loggerName);

    this.logger.log('initialized!');
  }, 
  sayHello: function() {
    console.log('Hello, Backbone!');
    this.set({a: 'b'});
  }
});

export default SampleModel;
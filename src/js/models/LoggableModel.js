import CONFIG from '../app.config';
import Backbone from 'backbone';
import Logbone from 'logbone-es6';

const LoggableModel = Backbone.Model.extend({
  initLogger: function(loggerName) {
    /* instantiate a logger */
    this.logger = 
      Logbone.getLogger(
        loggerName, 
        CONFIG.LOGGING.LEVEL);
  }
});

export default LoggableModel;
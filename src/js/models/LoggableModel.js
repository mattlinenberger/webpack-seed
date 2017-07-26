import Backbone from 'backbone';
import Logbone from 'logbone-es6';
import CONFIG from '../app.config';

const LoggableModel = Backbone.Model.extend({
  initLogger(loggerName) {
    /* instantiate a logger */
    this.logger =
      Logbone.getLogger(
        loggerName,
        CONFIG.LOGGING.LEVEL);
  },
});

export default LoggableModel;

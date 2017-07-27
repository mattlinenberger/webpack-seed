import Backbone from 'backbone';
import Logger from '../modules/Logger.module';

export default Backbone.View.extend({
  initialize(config) {
    const loggerName = config.loggerName;
    this.logger = new Logger(loggerName);

    /* set the controller */
    this.ctlr = config.ctlr;

    /* log constructed */
    this.logger.log('Constructed with config: %O', config);

    /* bind the view to the model's change event */
    /* re-render on change */
    this.listenTo(this.model, 'change', this.update);
    this.listenTo(this.model, 'remove', this.remove);

    this.render();
  },
  initLogger(loggerName) {
    this.logger = new Logger(loggerName);
  },
  update() {
    /* default empty method for update, meant to be overridden */
  },
  remove() {
    console.log('REMOVED!!!');
    this.render();
  },
  setController(controller) {
    this.controller = controller;
  },
  getLogger(loggerName) {
    return new Logger(`${this.loggerName}:${loggerName}`);
  },
});

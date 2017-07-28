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
    this.listenTo(this.model, 'change', this.onUpdate);
    this.listenTo(this.model, 'remove', this.onRemove);
    this.listenTo(this.model, 'add', this.onAdd);
    this.listenTo(this.model, 'destroy', this.onDestroy);

    this.render();
  },
  initLogger(loggerName) {
    this.logger = new Logger(loggerName);
  },
  onAdd() {
    /* default empty method for update, meant to be overridden */
  },
  onChange() {
    /* default empty method for update, meant to be overridden */
  },
  onUpdate() {
    /* default empty method for update, meant to be overridden */
  },
  onRemove() {
    /* default empty method for update, meant to be overridden */
  },
  setController(controller) {
    this.controller = controller;
  },
  getLogger(loggerName) {
    return new Logger(`${this.loggerName}:${loggerName}`);
  },
  conditionalStyle(element, condition, styleTrue, styleFalse) {
    if (condition) {
      element.removeClass(styleFalse);
      element.addClass(styleTrue);
    } else {
      element.removeClass(styleTrue);
      element.addClass(styleFalse);
    }
  },
});

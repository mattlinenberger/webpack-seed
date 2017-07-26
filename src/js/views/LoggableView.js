import Backbone from 'backbone';

export default Backbone.View.extend({
  initialize() {
  },
  setController(controller) {
    this.controller = controller;
  },
});

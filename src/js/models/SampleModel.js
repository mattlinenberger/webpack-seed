import Backbone from 'backbone';

const SampleModel = Backbone.Model.extend({
  initialize() {
  },
  sayHello() {
    this.set({ a: 'b' });
  },
});

export default SampleModel;

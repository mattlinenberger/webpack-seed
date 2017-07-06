import Backbone from 'backbone';

const SampleModel = Backbone.Model.extend({
  sayHello: () => {
    console.log('Hello, Backbone!');
  }
});

export default SampleModel;
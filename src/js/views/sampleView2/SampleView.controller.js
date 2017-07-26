import Backbone from 'backbone';
import View from './SampleView';

export default class SampleViewController {
  /* constructor */
  constructor() {
    console.log('SampleViewConstructed');

    /* construct the model */
    this.model = new Backbone.Model();

    /* construct the view */
    this.view = new View({
      el: '#root',
      model: this.model,
    });

    /* wire this controller into the view */
    this.view.setController(this);
  }

  sayHello(name) {
    console.log('HELLO! %O', name);
  }
}

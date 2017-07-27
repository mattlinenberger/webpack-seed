import Backbone from 'backbone';

import View from './SampleView';

const SampleController = Backbone.Model.extend({
  initialize() {
    /* create the model */
    const model = new Backbone.Model();

    model.on('all', () => {});

    /* create an array of people */
    const people = [
      {
        name: 'Scott',
      },
      {
        name: 'Vanessa',
      },
      {
        name: 'Bob',
      },
    ];

    /* set the people on the model */
    model.set('people', people);

    const view = new View({
      el: '#root',
      model,
    });

    this.view = view;
  },
});

export default SampleController;

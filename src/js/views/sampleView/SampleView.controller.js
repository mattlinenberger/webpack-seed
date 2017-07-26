import Backbone from 'backbone';
import Logbone from 'logbone-es6';

import View from './SampleView';

const SampleController = Backbone.Model.extend({
  initialize() {
    const logger = Logbone.getLogger('SampleController');
    logger.log('started!');

    /* create the model */
    const model = new Backbone.Model();

    model.on('all', () => {
      console.log('PEOPLE UPDATED!!!');
    });

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

    console.log('view: %O', view);
  },
});

export default SampleController;

import Backbone from 'backbone';
import Logbone from 'logbone-es6';

import View from './SampleView';

const imgElectronics = require('../../../assets/images/electronics.jpeg');

const SampleController = Backbone.Model.extend({
  initialize: function () {
    const logger = Logbone.getLogger('SampleController');
    logger.log('started!');

    /* create the model */
    const model = new Backbone.Model();

    model.on('all', ()=>{
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
        name: 'Bob'
      }
    ];

    /* set the people on the model */
    model.set('people', people);

    new View({
      el: '#root',
      model,
    });

  },
});

export default SampleController;
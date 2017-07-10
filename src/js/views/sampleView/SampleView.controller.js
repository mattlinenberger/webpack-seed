import Backbone from 'backbone'; 
import Logbone from 'logbone-es6';

import View from './SampleView';

const imgElectronics = require('../../../assets/images/electronics.jpeg');

const SampleController = Backbone.Model.extend({
  initialize: function () {
    const logger = Logbone.getLogger('SampleController');
    logger.log('started!');

    new View({
       el: '#root',
       model: {
         people: [
           {
             name: 'Scott',
           },
           {
             name: 'Vanessa',
           },
           {
             name: 'Bob'
           }
         ],
         img: imgElectronics,
       },
    });

  },
});

export default SampleController;
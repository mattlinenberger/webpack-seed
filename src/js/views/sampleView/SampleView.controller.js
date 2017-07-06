import Backbone from 'backbone'; 
import Logbone from 'logbone-es6';

import View from './SampleView';

const SampleController = Backbone.Model.extend({
  initialize: function () {
    const logger = Logbone.getLogger('SampleController');
    logger.log('started!');

    new View({
       el: '#root',
       model: {
         name: 'Scott'
       },
    });

  }
});

export default SampleController;
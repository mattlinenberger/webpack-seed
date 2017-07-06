import Backbone from 'backbone';
import SampleController from './views/sampleView/SampleView.controller';
import SampleModel from './models/SampleModel';

const AppRouter = Backbone.Router.extend({
  routes: {
    "view1": "view1",
    "view2/:name": "view2",
    /* fallback, default route */
    "*any": "view1"
  },
  view1: function() {
    /* view1, the default view */
    const controller = new SampleController();
  },
  view2: function(name) {
    console.log(`${name} is here!`);
  }
});

export default AppRouter;
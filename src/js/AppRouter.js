import Backbone from 'backbone';
import SampleController from './views/sampleView/SampleView.controller';

const AppRouter = Backbone.Router.extend({
  routes: {
    view1: 'view1',
    'view2/:name': 'view2',
    /* fallback, default route */
    '*any': 'view1',
  },
  view1() {
    /* view1, the default view */
    const controller = new SampleController();
    console.log('controller: %O', controller);
  },
  view2(name) {
    console.log(`${name} is here!`);
  },
});

export default AppRouter;

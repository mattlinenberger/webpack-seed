import Backbone from 'backbone';
import Logger from './modules/Logger.module';
import ToDoListCtlr from './views/todoList/ToDoList.controller';
import SampleService from './singletons/Sample.service';


const AppRouter = Backbone.Router.extend({
  initialize() {
    this.logger = new Logger('AppRouter');
    this.logger.log('Constructed!');
    this.logger.log('SampleService value: %O', SampleService.getProperty());
  },
  routes: {
    view1: 'view1',
    'view2/:name': 'view2',
    /* fallback, default route */
    '*any': 'view1',
  },
  view1() {
    /* view1, the default view */
    const controller = new ToDoListCtlr();
    this.controller = controller;
  },
  view2(name) {
    this.name = name;
  },
});

export default AppRouter;

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
    view1: 'home',
    /* fallback, default route */
    '*any': 'home',
  },
  home() {
    /* view1, the default view */
    const controller = new ToDoListCtlr();
    this.controller = controller;
  },
});

export default AppRouter;

import Backbone from 'backbone';
import ToDoListCtlr from './views/todoList/ToDoList.controller';

const AppRouter = Backbone.Router.extend({
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

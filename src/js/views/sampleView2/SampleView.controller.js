import Backbone from 'backbone';
import LoggableController from '../../modules/LoggableController';
import View from './SampleView';
import ToDoModel from '../../models/ToDo.model';

export default class SampleViewController extends LoggableController {
  /* constructor */
  constructor() {
    super('SampleViewController');

    /* construct the model, which is a collection of ToDos */
    const ToDoCollection = Backbone.Collection.extend({
      /* specify our model */
      model: ToDoModel,
      /* specify how to find our models */
      modelId(attributes) {
        return attributes.id;
      },
    });

    this.model = new ToDoCollection([
      {
        title: 'Do Laundry',
      },
      {
        title: 'Other Stuff',
      },
    ]);

    console.log('%O', this.model.models);

    /* construct the view */
    this.view = new View({
      loggerName: 'SampleView',
      ctlr: this,
      el: '#root',
      model: this.model,
    });
  }

  removeItem(itemId) {
    this.logger.log('Removing Item! %O', itemId);
    const toDo = this.model.get(itemId);
    this.logger.log('ToDo found! %O', toDo.attributes);
    this.model.remove(itemId);
  }

  sayHello() {
    console.log('Hello, world!');
  }
}

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
        isComplete: true,
      },
      {
        title: 'Other Stuff',
        isComplete: false,
      },
    ]);

    /* construct the view */
    this.view = new View({
      loggerName: 'SampleView',
      ctlr: this,
      el: '#root',
      model: this.model,
    });
  }

  removeItem(toDo) {
    this.logger.log('Removing Item! %O', toDo);
    this.model.remove(toDo);
  }

  addToDoItem(toDoText) {
    this.logger.debug('Adding item! %O', toDoText);
    this.model.add({
      title: toDoText,
    });
  }
}

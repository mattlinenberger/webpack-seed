import LoggableView from '../../modules/LoggableView';
import ToDo from '../todo/ToDo.view';

const templateMain = require('./ToDoList.handlebars');

/* bring in the stylesheet */
require('./ToDoList.scss');

const SampleView = LoggableView.extend({
  /* bind events */
  events: {
    'click .add': 'addToDoItem',
  },
  /* render view */
  render() {
    this.logger.log('RENDERING!');

    const html = templateMain();

    /* render the view template */
    this.$el.empty();
    this.$el.append(html);

    /* loop through the items and create a view for each ToDo */
    this.model
      .forEach((currentItem) => {
        /* create a new to-do */
        const toDo = new ToDo({ //eslint-disable-line
          loggerName: 'ToDo',
          model: currentItem,
          ctlr: this.ctlr,
        });

        /* append the item */
        this.$('.item_list').append(toDo.el);
      });
  },
  onAdd(model) {
    this.logger.log('ToDo added! %O', model);
    /* construct a new ToDo view */
    const toDo = new ToDo({
      loggerName: 'ToDo',
      model,
      ctlr: this.ctlr,
    });

    this.$('.item_list').append(toDo.el);
  },
  addToDoItem() {
    const textBox = this.$('input.new')[0];
    const itemText = textBox.value;

    this.ctlr.addToDoItem(itemText);

    /* clear the input box text */
    textBox.value = '';
  },
});

export default SampleView;

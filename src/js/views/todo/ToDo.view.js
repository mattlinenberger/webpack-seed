import LoggableView from '../../modules/LoggableView';

/* bring in the view style */
require('./ToDo.scss');
/* bring in the template */
const template = require('./ToDo.handlebars');

const ToDoView = LoggableView.extend({
  /* bind events */
  events: {
    'click .remove': 'removeItem',
    'click .edit': 'editItem',
    'click .status': 'toggleStatus',
    'keyup input': 'updateToDo',
  },
  /* render view */
  render() {
    const html = template(this.model.attributes);
    this.$el.append(html);
  },
  removeItem() {
    this.ctlr.removeItem(this.model);
  },
  editItem() {
    this.$('input').toggleClass('hidden');
    this.$('span.title').toggleClass('hidden');
  },
  toggleStatus() {
    this.model.set({
      isComplete: !this.model.attributes.isComplete,
    });
  },
  onRemove() {
    this.remove();
  },
  onUpdate() {
    this.logger.log('Changed!');

    /* update the text */
    const titleSpan = this.getTitleElement();
    titleSpan.text(this.model.attributes.title);

    /* update the task status */
    const statusElement = this.getStatusElement();

    this.conditionalStyle(
      statusElement,
      this.model.attributes.isComplete,
      'fa-check-circle',
      'fa-check-circle-o',
    );

    this.conditionalStyle(
      titleSpan,
      this.model.attributes.isComplete,
      'complete',
      '');
  },
  updateToDo() {
    const textBox = this.getTextBox();
    this.model.set('title', textBox.value);
  },
  getTextBox() {
    return this.$('input.edit_box')[0];
  },
  getTitleElement() {
    return this.$('span.title');
  },
  getStatusElement() {
    return this.$('span.status');
  },
});

export default ToDoView;

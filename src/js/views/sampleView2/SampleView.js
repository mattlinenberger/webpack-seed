import LoggableView from '../../modules/LoggableView';

const templateMain = require('./SampleView2.handlebars');

const SampleView = LoggableView.extend({
  render() {
    this.logger.log('RENDERING!');

    const items =
      this.model
        .map(current => current.attributes);

    const data = { items };

    console.log('data %O', data);

    const html = templateMain(data);

    this.$el.empty();
    this.$el.append(html);
  },
  update() {
    this.logger.log('UPDATING!');
    this.render();
  },
  /* bind events */
  events: {
    'click button': 'handleClick',
    'click .remove': 'removeItem',
  },
  removeItem(e) {
    console.log(e);
    const itemId = e.currentTarget.id;
    this.ctlr.removeItem(itemId);
  },
  handleClick() {
    this.ctlr.sayHello();
  },
});

export default SampleView;

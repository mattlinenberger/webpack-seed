import Backbone from 'backbone';

const template = require('./SampleView.handlebars');

const SampleView = Backbone.View.extend({
  initialize() {
    /* bind the view to the model's change handler */
    this.listenTo(this.model, 'change', this.render);

    this.render();
  },
  events: {
    'click button': 'addPerson',
    'click .nameBadge': 'sayHello',
  },
  render() {
    const html = template(this.model.attributes);
    this.$el.empty();
    this.$el.append(html);
  },
  addPerson() {
    /* get the first input box */
    const name = this.$('input')[0].value;

    /* add the person to the model */
    const people = Array.from(this.model.get('people'));
    people.push({ name });

    this.model.set('people', people);
  },
  sayHello(e) {
    /* get the element and the data attribs */
    const elem = e.currentTarget;
    const data = elem.dataset;
    const name = data.name;

    /* toggle active */
    if (data.isActive === 'true') {
      data.isActive = false;
      window.alert(`Goodbye, ${name}`);
      elem.className = 'nameBadge';
    } else {
      data.isActive = true;
      window.alert(`Hello, ${name}`);
      elem.className = 'nameBadge active';
    }
  },
});

export default SampleView;

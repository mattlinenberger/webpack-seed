import Backbone from 'backbone';
import style from './SampleView.scss';

const template = require('./SampleView.handlebars');

const SampleView = Backbone.View.extend({
  initialize: function () {
    console.log('Sample View Created!');

    /* bind the view to the model's change handler */
    this.listenTo(this.model, 'change', this.render);

    this.render();
  },
  events: {
    'click button': 'addPerson',
    'click .nameBadge': 'sayHello',
  },
  render: function () {
    console.log('Sample View Rendering! %O', this.model);

    const html = template(this.model.attributes);
    this.$el.empty();
    this.$el.append(html);
  },
  addPerson: function(e) {
    /* get the first input box */
    const name = this.$('input')[0].value;
    console.log('model: %O', this.model);

    /* add the person to the model */
    const people = Array.from(this.model.get('people'));
    people.push({name});

    this.model.set('people', people);
  },
  sayHello: function(e) {
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

    console.log('IsActive %O', data.isActive);
  }
});

export default SampleView;
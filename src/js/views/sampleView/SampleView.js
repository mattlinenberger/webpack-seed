import Backbone from 'backbone';
import style from './SampleView.scss';

const template = require('./SampleView.handlebars');

const SampleView = Backbone.View.extend({
  initialize: function () {
    console.log('Sample View Created!');
    this.render();
  },
  events: {
    'click .nameBadge': 'sayHello',
  },
  render: function () {
    console.log('Sample View Rendering!');

    const html = template(this.model);
    this.$el.append(html);
  },
  sayHello: e => {
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
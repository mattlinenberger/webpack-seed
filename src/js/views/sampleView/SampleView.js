import Backbone from 'backbone';
import style from './SampleView.scss';

const template = require('./SampleView.handlebars');

const SampleView = Backbone.View.extend({
  initialize: function () {
    console.log('Sample View Created!');
    this.render();
  },
  events: {
    'click button': 'sayHello',
  },
  render: function () {
    console.log('Sample View Rendering!');

    const html = template(this.model);
    this.$el.append(html);
  },
  sayHello: function() {
    window.alert(`Hello, ${this.model.name}`);
  }
});

export default SampleView;
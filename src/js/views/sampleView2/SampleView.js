import LoggableView from '../LoggableView';

export default LoggableView.extend({
  render() {
    this.logger.log('RENDERING!');
    this.$el.empty();
    this.$el.append('<h1>Hello, SampleView!</h1>');
  },
});

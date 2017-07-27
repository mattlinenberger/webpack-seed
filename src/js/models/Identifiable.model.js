import Backbone from 'backbone';
import Utils from '../modules/Utils.module';

const IdentifiableModel = Backbone.Model.extend({
  initialize() {
    this.generateId();
  },
  generateId() {
    this.set({
      id: Utils.generateId(),
    });
  },
});

export default IdentifiableModel;

import IdentifiableModel from './Identifiable.model';
import Logger from '../modules/Logger.module';

const ToDoModel = IdentifiableModel.extend({
  initialize() {
    /* init the logger */
    this.logger = new Logger('ToDo');

    /* generate the id */
    this.generateId();

    this.logger.debug('Constructed! %O', this.attributes);
  },
});

export default ToDoModel;

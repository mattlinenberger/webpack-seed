import AppRouter from './AppRouter';

/* import styles */
require('../styles/index.scss');

/* create a new app router */
const router = new AppRouter();

/* start the app router */
Backbone.history.start();
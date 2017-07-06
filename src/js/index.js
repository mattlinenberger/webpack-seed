require('../styles/index.scss');

import AppRouter from './AppRouter';

/* create a new app router */
const router = new AppRouter();

/* start the app router */
Backbone.history.start();
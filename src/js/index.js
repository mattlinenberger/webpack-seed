import AppRouter from './AppRouter';


/* import vendor styles */
require('../../node_modules/pure-css/lib/base.css');
require('../../node_modules/pure-css/lib/grids.css');

/* import app styles */
require('../styles/index.scss');

/* create a new app router */
const router = new AppRouter();

/* start the app router */
Backbone.history.start();
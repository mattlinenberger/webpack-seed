/* include the css */
const styles = require('../styles/index.scss');
require('font-awesome/css/font-awesome.css');
const testImage = require('../assets/trappist-small.jpg');

const images = {
  img1: testImage,
};

const appConfig = {
  styles,
  images,
  setHtml: () => {
    /* add a Font-Awesome element */
    document.getElementById('root').innerHTML = '<i class="fa fa-address-book-o" aria-hidden="true"></i>';
  },
};

appConfig.setHtml();

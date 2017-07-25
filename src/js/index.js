/* include the css */
const styles = require('../styles/index.scss');
const testImage = require('../assets/trappist-small.jpg');

const images = {
  img1: testImage,
};

const appConfig = {
  styles,
  images,
};

console.log('Config: %O', appConfig);

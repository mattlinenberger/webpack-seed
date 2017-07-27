
export default class Utils {
  static generateId() {
    const timestamp = Date.now();
    const random1 = Utils.getRandomInt(0, 100000);
    const random2 = Utils.getRandomInt(0, 100000);

    const value = `${random1}${timestamp}${random2}`;

    return value;
  }

  static getRandomInt(min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  }
}

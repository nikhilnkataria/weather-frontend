import toLower from 'lodash/toLower';
import startCase from 'lodash/startCase';
import moment from 'moment';

export default class Utils {
  /**
    * Returns formatted time. Default format is h:mm a
    * @param {String} time
    * @param {String} format
    */
  static getFormatedTime(time, format = 'h:mm a') {
    return moment(time).format(format);
  }

  /**
   * Returns string with first letter of each word capitalized
   * @param {String} str
   */
  static capitalizeStr(str) {
    return startCase(toLower(str));
  }

  static getDefaultTheme() {
    const morningLimit = moment({ hour: 6, minute: 59 });
    const eveningLimit = moment({ hour: 21, minute: 5 });
    return moment().isBefore(morningLimit) && moment().isAfter(eveningLimit)
      ? 'light'
      : 'dark';
  }
}

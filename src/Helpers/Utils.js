import _ from 'lodash';
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
    return _.startCase(_.toLower(str));
  }
}

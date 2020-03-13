import _ from 'lodash';
import moment from 'moment';

export default class Utils {
  static getFormatedTime(time) {
    return moment(time).format('h:mm a');
  }

  static capitalizeStr(str) {
    return _.startCase(_.toLower(str));
  }
}

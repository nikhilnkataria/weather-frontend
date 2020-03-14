import { store } from 'react-notifications-component';

const notificationOptions = {
  insert: 'top',
  container: 'top-right',
  animationIn: [ 'animated', 'fadeIn' ],
  animationOut: [ 'animated', 'fadeOut' ],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};
export default class Notification {
  /**
     *
     * @param {string} type any one of success|danger|info|default|warning
     * @param {string} title Notification title
     * @param {*} message Notification message
     */
  static showNotification(type = 'success', title = '', message = '') {
    store.addNotification({
      ...notificationOptions,
      type,
      title,
      message
    });
  }
}

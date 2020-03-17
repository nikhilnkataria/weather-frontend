import axios from 'axios';
import getEnvironmentVariables from './config';
import Notification from '../Helpers/Notification';

// eslint-disable-next-line import/no-mutable-exports
let weatherAxios;
try {
  weatherAxios = axios.create({
    baseURL: getEnvironmentVariables().apiUrl,
    headers: { 'Content-Type': 'application/json' }
  });

  weatherAxios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (!error.response) {
        Notification.showNotification(
          'danger',
          'Network Error',
          'Unable to connect the server. Please try again after some time.'
        );
      } else if (error.code === 'ECONNABORTED') {
        Notification.showNotification(
          'danger',
          'Network Error',
          'Network Timeout Error Occured. Please try again after some time.'
        );
      }
      // Return error
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.error('Error', error);
}

export default weatherAxios;

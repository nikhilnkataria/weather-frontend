import weatherAxios from '../Config/weatherAxios';
import Notification from '../Helpers/Notification';
import {
  weatherFetchStarted,
  weatherFetchEnded,
  setWeatherData,
  removeWeatherData
} from '../Actions/weather';

// TODO: Remove disable next line lint once more than 1 services is implemented
// eslint-disable-next-line import/prefer-default-export
export const fetchCityWeather = (params) => (dispatch) => {
  dispatch(weatherFetchStarted());
  return weatherAxios
    .get('/', { params })
    .then((resp) => {
      dispatch(setWeatherData(resp.data));
      return resp.data;
    })
    .catch((err) => {
      const { response, code } = err;
      dispatch(removeWeatherData());
      if (code !== 'ECONNABORTED') {
        Notification.showNotification(
          'danger',
          `Error: ${response.statusText}`,
          response.data.message
        );
      }
    })
    .finally(() => {
      dispatch(weatherFetchEnded());
    });
};

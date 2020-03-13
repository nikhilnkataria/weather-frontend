import weatherAxios from '../Config/weatherAxios';
import {
  weatherFetchStarted,
  weatherFetchEnded,
  setWeatherData
} from '../Actions/weather';

// TODO: Remove disable next line lint once more than 1 services is implemented
// eslint-disable-next-line import/prefer-default-export
export const fetchCityWeather = (params) => (dispatch) => {
  dispatch(weatherFetchStarted());
  return weatherAxios
    .get('/', { params })
    .then((resp) => {
      // console.info(resp.data.data);
      dispatch(setWeatherData(resp.data));
      return resp.data;
    })
    .finally(() => {
      dispatch(weatherFetchEnded());
    });
};

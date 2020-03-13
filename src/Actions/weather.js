import {
  WEATHER_FETCH_STARTED,
  WEATHER_FETCH_ENDED,
  SET_WEATHER_DATA
} from './types';

export const weatherFetchStarted = () => {
  return { type: WEATHER_FETCH_STARTED };
};

export const weatherFetchEnded = () => {
  return { type: WEATHER_FETCH_ENDED };
};

export const setWeatherData = (weatherData) => {
  return {
    type: SET_WEATHER_DATA,
    weatherData
  };
};

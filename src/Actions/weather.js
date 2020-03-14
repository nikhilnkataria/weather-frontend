import {
  WEATHER_FETCH_STARTED,
  WEATHER_FETCH_ENDED,
  SET_WEATHER_DATA,
  REMOVE_WEATHER_DATA
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

/**
 * Removes already stored weather data. Call this incase new weather data doesnt come from API
 */
export const removeWeatherData = () => {
  return { type: REMOVE_WEATHER_DATA };
};

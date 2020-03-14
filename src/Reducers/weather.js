import {
  WEATHER_FETCH_STARTED,
  WEATHER_FETCH_ENDED,
  SET_WEATHER_DATA,
  REMOVE_WEATHER_DATA
} from '../Actions/types';

const initialWeatherState = {
  fetchingWeatherDetails: false,
  weatherData: {}
};

export default (state = initialWeatherState, action) => {
  switch (action.type) {
    case WEATHER_FETCH_STARTED:
      return {
        ...state,
        fetchingWeatherDetails: true
      };
    case WEATHER_FETCH_ENDED:
      return {
        ...state,
        fetchingWeatherDetails: false
      };
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.weatherData
      };
    case REMOVE_WEATHER_DATA:
      return {
        ...state,
        weatherData: {}
      };
    default:
      return state;
  }
};

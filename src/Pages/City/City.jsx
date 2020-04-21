import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import CityList from './CityList/CityList';
import WeatherChart from './WeatherChart/WeatherChart';
import CityWeatherDetails from './CityWeatherDetails/CityWeatherDetails';

class City extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CityList data-test="city-list-component" />
        <div className="row city-wrapper">
          <div className="col-md-5 col-lg-4">
            <CityWeatherDetails
              details={this.props.details}
              data-test="city-weather-details-component"
              fetchingWeatherDetails={this.props.fetchingWeatherDetails}
            />
          </div>

          <div className="col-md-7 col-lg-8">
            <WeatherChart
              list={this.props.list}
              data-test="weather-chart-component"
              fetchingWeatherDetails={this.props.fetchingWeatherDetails}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

City.propTypes = {
  fetchingWeatherDetails: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired,
  details: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired
};

const mapStateToProps = ({ weather }) => {
  const details = isEmpty(weather.weatherData)
    ? {}
    : weather.weatherData.details;
  const list = isEmpty(weather.weatherData) ? [] : weather.weatherData.list;
  return {
    list,
    details,
    fetchingWeatherDetails: weather.fetchingWeatherDetails
  };
};

export default connect(mapStateToProps)(City);

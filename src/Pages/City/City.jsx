import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import CityList from './CityList';
import WeatherChart from './WeatherChart';
import CityWeatherDetails from './CityWeatherDetails';

class City extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CityList />
        <div className="row city-wrapper">
          <div className="col-md-5 col-lg-4">
            <CityWeatherDetails
              details={this.props.details}
              fetchingWeatherDetails={this.props.fetchingWeatherDetails}
            />
          </div>

          <div className="col-md-7 col-lg-8">
            <WeatherChart
              list={this.props.list}
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

import _ from 'lodash';
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
        <div className="row city-detail-wrapper">
          <div className="col-md-3">
            <CityWeatherDetails
              details={this.props.details}
              fetchingWeatherDetails={this.props.fetchingWeatherDetails}
            />
          </div>

          <div className="col-md-9">
            {!_.isEmpty(this.props.list) && (
              <WeatherChart list={this.props.list} />
            )}
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
  const details = _.isEmpty(weather.weatherData)
    ? {}
    : weather.weatherData.details;
  const list = _.isEmpty(weather.weatherData) ? [] : weather.weatherData.list;
  return {
    list,
    details,
    fetchingWeatherDetails: weather.fetchingWeatherDetails
  };
};

export default connect(mapStateToProps)(City);

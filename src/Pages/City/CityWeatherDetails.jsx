import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Utils from '../../Helpers/Utils';
import Card from '../../Components/Card/Card';
import { UserLoader } from '../../Components/Loader/Loader';

export default class CityWeatherDetails extends PureComponent {
  render() {
    const { details } = this.props;
    return (
      <Card title="Weather Details">
        {!_.isEmpty(this.props.details) &&
        this.props.fetchingWeatherDetails === false && (
          <ul className="weather-details-ul">
            <li>
              <div className="clearfix">
                <span className="float-left">Wind</span>
                <span className="float-right">
                  <span>
                    {details.wind && details.wind.speed}
                    meter/sec,
                  </span>
                  <span className="ml-1">
                    {details.wind && details.wind.deg}
                    (deg)
                  </span>
                </span>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="float-left">Cloudiness</span>
                <span className="float-right">
                  {Utils.capitalizeStr(details.weather)}
                </span>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="float-left">Pressure</span>
                <span className="float-right">
                  {details.pressure}
                  hPa
                </span>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="float-left">Humidity</span>
                <span className="float-right">
                  {this.props.details.humidity}
                  %
                </span>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="float-left">Sunrise</span>
                <span className="float-right">
                  {Utils.getFormatedTime(this.props.details.sunrise)}
                </span>
              </div>
            </li>
            <li>
              <div className="clearfix">
                <span className="float-left">Sunset</span>
                <span className="float-right">
                  {Utils.getFormatedTime(this.props.details.sunset)}
                </span>
              </div>
            </li>
          </ul>
        )}
        {this.props.fetchingWeatherDetails === true && <UserLoader />}
        {_.isEmpty(this.props.details) &&
        this.props.fetchingWeatherDetails === false && (
          <p>Unable to fetch weather details. Please try again later</p>
        )}
      </Card>
    );
  }
}

CityWeatherDetails.propTypes = {
  fetchingWeatherDetails: PropTypes.bool.isRequired,
  details: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired
};

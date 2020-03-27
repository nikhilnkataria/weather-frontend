import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import Utils from '../../Helpers/Utils';
import Card from '../../Components/Card/Card';
import { UserLoader } from '../../Components/Loader/Loader';

function CityWeatherDetails({ details, fetchingWeatherDetails }) {
  return (
    <Card title="Weather Details">
      {!isEmpty(details) &&
      fetchingWeatherDetails === false && (
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
                {details.humidity}
                %
              </span>
            </div>
          </li>
          <li>
            <div className="clearfix">
              <span className="float-left">Sunrise</span>
              <span className="float-right">
                {Utils.getFormatedTime(details.sunrise)}
              </span>
            </div>
          </li>
          <li>
            <div className="clearfix">
              <span className="float-left">Sunset</span>
              <span className="float-right">
                {Utils.getFormatedTime(details.sunset)}
              </span>
            </div>
          </li>
        </ul>
      )}
      {fetchingWeatherDetails === true && <UserLoader />}
      {isEmpty(details) &&
      fetchingWeatherDetails === false && (
        <p>Unable to fetch weather details. Please try again later</p>
      )}
    </Card>
  );
}

CityWeatherDetails.propTypes = {
  fetchingWeatherDetails: PropTypes.bool.isRequired,
  details: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired
};

export default CityWeatherDetails;

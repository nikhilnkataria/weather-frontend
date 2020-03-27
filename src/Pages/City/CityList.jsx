import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { fetchCityWeather } from '../../Services/weather';

function CityList(props) {
  const [ cityId, setCityId ] = useState(props.cities[0].id);

  useEffect(
    () => {
      props.fetchCityWeather({ cityId });
    },
    [ cityId ]
  );

  return (
    <div className="row mb-2 mt-2">
      <div className="col-md-4 ml-auto">
        <div className="form-group mb-0 row">
          <label
            htmlFor="city-dropdown"
            className="col-md-5 text-md-right col-sm-6 col-form-label"
          >
            Select City
          </label>
          <div className="col-md-7 col-sm-6">
            <select
              id="city-dropdown"
              onChange={(e) => setCityId(e.target.value)}
              className="form-control form-control-sm select"
            >
              {!isEmpty(props.cities) &&
                props.cities.map((city) => {
                  return (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

CityList.propTypes = {
  fetchCityWeather: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired
};

const mapDispatchToProps = { fetchCityWeather };

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

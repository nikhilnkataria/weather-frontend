/* eslint-disable */
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import { fetchCityWeather } from '../../Services/weather';

class CityList extends PureComponent {
  constructor() {
    super();

    this.cityList = [
      {
        name: 'Chicago',
        id: 4887398
      },
      {
        name: 'New York',
        id: 5128581
      },
      {
        name: 'Washington, DC',
        id: 5815135
      }
    ];
  }

  componentDidMount() {
    this.props.fetchCityWeather({ cityId: this.props.cities[0].id });
  }

  handleOnCityChange = (e) => {
    this.props.fetchCityWeather({ cityId: e.target.value });
  };

  render() {
    return (
      <div className="row mb-3">
        <div className="col-md-3 ml-auto">
          <select
            onChange={this.handleOnCityChange}
            className="form-control form-control-sm select"
          >
            {!_.isEmpty(this.props.cities) &&
              this.props.cities.map((city) => {
                return (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    );
  }
}

CityList.propTypes = {
  fetchCityWeather: PropTypes.func.isRequired
};

const mapDispatchToProps = { fetchCityWeather };

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

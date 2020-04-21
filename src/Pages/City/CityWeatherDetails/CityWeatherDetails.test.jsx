import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Helpers/Test';

import CityWeatherDetails from './CityWeatherDetails';

describe('City weather details component', () => {
  describe('should render UserLoader', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        details: {},
        fetchingWeatherDetails: true
      };
      wrapper = shallow(<CityWeatherDetails {...props} />);
    });

    it('should have user loader component', () => {
      expect(findByTestAttr(wrapper, 'user-loader').length).toBe(1);
    });

    it('should not have unable to fetch msg', () => {
      expect(findByTestAttr(wrapper, 'unable-to-fetch-msg').length).toBe(0);
    });

    it('should have weather card', () => {
      expect(findByTestAttr(wrapper, 'weather-card').length).toBe(1);
    });
  });

  describe('should not render completely', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        details: {},
        fetchingWeatherDetails: false
      };
      wrapper = shallow(<CityWeatherDetails {...props} />);
    });

    it('should weather card', () => {
      expect(findByTestAttr(wrapper, 'weather-card').length).toBe(1);
    });

    it('should have unable to fetch msg', () => {
      expect(findByTestAttr(wrapper, 'unable-to-fetch-msg').length).toBe(1);
    });

    it('should not have weather details ul', () => {
      expect(findByTestAttr(wrapper, 'weather-details-ul').length).toBe(0);
    });

    it('should not have user loader component', () => {
      expect(findByTestAttr(wrapper, 'user-loader').length).toBe(0);
    });
  });

  describe('should render properly', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        details: {
          wind: {
            speed: 10,
            deg: 10
          },
          weather: 'Cloudy',
          pressure: 4,
          humidity: 10,
          sunrise: 10,
          sunset: 20
        },
        fetchingWeatherDetails: false
      };
      wrapper = shallow(<CityWeatherDetails {...props} />);
    });

    it('should have weather card', () => {
      expect(findByTestAttr(wrapper, 'weather-card').length).toBe(1);
    });

    it('should not have unable to fetch msg', () => {
      expect(findByTestAttr(wrapper, 'unable-to-fetch-msg').length).toBe(0);
    });

    it('should have weather details ul', () => {
      expect(findByTestAttr(wrapper, 'weather-details-ul').length).toBe(1);
    });

    it('should have wind li', () => {
      expect(findByTestAttr(wrapper, 'wind-li').length).toBe(1);
    });

    it('should have weather li', () => {
      expect(findByTestAttr(wrapper, 'weather-li').length).toBe(1);
    });

    it('should have pressure li', () => {
      expect(findByTestAttr(wrapper, 'pressure-li').length).toBe(1);
    });

    it('should have humidity li', () => {
      expect(findByTestAttr(wrapper, 'humidity-li').length).toBe(1);
    });

    it('should have sunrise li', () => {
      expect(findByTestAttr(wrapper, 'sunrise-li').length).toBe(1);
    });

    it('should have sunset li', () => {
      expect(findByTestAttr(wrapper, 'sunset-li').length).toBe(1);
    });

    it('should not have user loader component', () => {
      expect(findByTestAttr(wrapper, 'user-loader').length).toBe(0);
    });
  });
});

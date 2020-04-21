import React from 'react';
import { shallow } from 'enzyme';

import WeatherChart from './WeatherChart';
import { findByTestAttr } from '../../../Helpers/Test';

const initialProps = {
  fetchingWeatherDetails: false,
  list: []
};

describe('Weather Chart Component', () => {
  describe('should render UserLoader', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        list: [],
        fetchingWeatherDetails: true
      };
      wrapper = shallow(<WeatherChart {...props} />);
    });

    it('should have user loader component', () => {
      expect(findByTestAttr(wrapper, 'user-loader').length).toBe(1);
    });

    it('should not have unable to fetch msg', () => {
      expect(findByTestAttr(wrapper, 'unable-to-fetch-msg').length).toBe(0);
    });

    it('should have chart card', () => {
      expect(findByTestAttr(wrapper, 'chart-card').length).toBe(1);
    });
  });

  describe('should not render completely', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        list: [],
        fetchingWeatherDetails: false
      };
      wrapper = shallow(<WeatherChart {...props} />);
    });

    it('should weather card', () => {
      expect(findByTestAttr(wrapper, 'chart-card').length).toBe(1);
    });

    it('should have unable to fetch msg', () => {
      expect(findByTestAttr(wrapper, 'unable-to-fetch-msg').length).toBe(1);
    });

    it('should not have line chart component', () => {
      expect(findByTestAttr(wrapper, 'line-chart-component').length).toBe(0);
    });

    it('should not have user loader component', () => {
      expect(findByTestAttr(wrapper, 'user-loader').length).toBe(0);
    });
  });

  describe('should render properly', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        list: [
          {
            id: 1,
            msg: 'Msg 1'
          },
          {
            id: 2,
            msg: 'Msg 2'
          },
          {
            id: 3,
            msg: 'Msg 3'
          }
        ],
        fetchingWeatherDetails: false
      };
      wrapper = shallow(<WeatherChart {...props} />);
    });

    it('should have weather card', () => {
      expect(findByTestAttr(wrapper, 'chart-card').length).toBe(1);
    });

    it('should have line chart component', () => {
      expect(findByTestAttr(wrapper, 'line-chart-component').length).toBe(1);
    });
  });
});

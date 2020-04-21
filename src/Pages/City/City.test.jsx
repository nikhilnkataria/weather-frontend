import React from 'react';
import { shallow } from 'enzyme';

import City from './City';
import { findByTestAttr, testStore } from '../../Helpers/Test';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<City store={store} />);
};

describe('City Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      weather: {
        fetchingWeatherDetails: false,
        weatherData: {}
      },
      cities: [
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
      ]
    };
    wrapper = setup(initialState).childAt(0).dive();
  });

  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have city list component', () => {
    expect(findByTestAttr(wrapper, 'city-list-component').length).toBe(1);
  });

  it('should have city weather details component', () => {
    expect(
      findByTestAttr(wrapper, 'city-weather-details-component').length
    ).toBe(1);
  });

  it('should have weather chart component', () => {
    expect(findByTestAttr(wrapper, 'weather-chart-component').length).toBe(1);
  });
});

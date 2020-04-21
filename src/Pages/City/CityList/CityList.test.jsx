import React from 'react';
import { shallow } from 'enzyme';

import CityList from './CityList';
import { findByTestAttr, testStore } from '../../../Helpers/Test';

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

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<CityList store={store} />);
};

// TODO: UseEffect testing pending
describe('City List Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(initialState).childAt(0).dive();
  });

  it('should have city dropdown', () => {
    expect(findByTestAttr(wrapper, 'change-city-dropdown').length).toBe(1);
  });

  it(`should have ${initialState.cities.length} city dropdown options`, () => {
    expect(findByTestAttr(wrapper, 'city-dropdown-option').length).toBe(
      initialState.cities.length
    );
  });
});

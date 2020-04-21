import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import { findByTestAttr } from '../../Helpers/Test';

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should have weather app navbar', () => {
    expect(findByTestAttr(wrapper, 'weather-app-navbar').length).toBe(1);
  });

  it('should have navbar brand', () => {
    expect(findByTestAttr(wrapper, 'navbar-brand').length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Settings from './Settings';
import { findByTestAttr } from '../../Helpers/Test';

describe('Settings Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Settings />);
  });

  it('should have style logger', () => {
    expect(findByTestAttr(wrapper, 'style-logger').length).toBe(1);
  });

  it('should have ui block', () => {
    expect(findByTestAttr(wrapper, 'ui-block').length).toBe(1);
  });

  it('should have setting image', () => {
    expect(findByTestAttr(wrapper, 'setting-img').length).toBe(1);
  });
});

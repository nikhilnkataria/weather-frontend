import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';
import { findByTestAttr } from './Helpers/Test';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have Context provider', () => {
    expect(findByTestAttr(wrapper, 'context-provider').length).toBe(1);
  });

  it('should have ReactNotification component', () => {
    expect(findByTestAttr(wrapper, 'react-notification').length).toBe(1);
  });

  it('should have Header component', () => {
    expect(findByTestAttr(wrapper, 'header').length).toBe(1);
  });

  it('should have content-wrapper div', () => {
    expect(findByTestAttr(wrapper, 'content-wrapper').length).toBe(1);
  });

  it('should have Loadable City Component', () => {
    expect(findByTestAttr(wrapper, 'loadable-city').length).toBe(1);
  });

  it('should have Settings component', () => {
    expect(findByTestAttr(wrapper, 'setting-component').length).toBe(1);
  });
});

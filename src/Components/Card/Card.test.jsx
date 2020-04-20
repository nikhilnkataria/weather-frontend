import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';
import { findByTestAttr } from '../../Helpers/Test';

const setup = (props = {}) => {
  return shallow(<Card {...props} />);
};

describe('Card Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ title: 'Card Title' });
  });

  it('should render without errors', () => {
    expect(findByTestAttr(wrapper, 'card-component').length).toBe(1);
  });

  it('should render card title', () => {
    expect(findByTestAttr(wrapper, 'card-title').length).toBe(1);
  });

  it('should render card body', () => {
    expect(findByTestAttr(wrapper, 'card-body').length).toBe(1);
  });
});

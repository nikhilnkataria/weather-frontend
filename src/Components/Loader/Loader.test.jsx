import React from 'react';
import { shallow } from 'enzyme';

import { UserLoader, PageLoader } from './Loader';

describe('Loaders', () => {
  describe('UserLoader Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<UserLoader />);
    });

    it('should render user component', () => {
      expect(wrapper.length).toBe(1);
    });
  });

  describe('PageLoader Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PageLoader />);
    });

    it('should render user component', () => {
      expect(wrapper.length).toBe(1);
    });
  });
});

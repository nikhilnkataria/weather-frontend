import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../Helpers/Test';
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

    it('should render content loader', () => {
      expect(findByTestAttr(wrapper, 'content-loader').length).toBe(1);
    });

    it('should render 8 rect ', () => {
      expect(findByTestAttr(wrapper, 'content-rect').length).toBe(8);
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

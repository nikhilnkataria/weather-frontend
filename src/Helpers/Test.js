import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const testStore = (initialState = {}) => {
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);
  return mockStore(initialState);
};

import React from 'react';
import * as call from '../../utils/testUtils'
import App from './App';

describe('App Component', () => {
  describe('renders without crashing with expected Props', () => {
    test('renders without crashing', () => {
      const wrapper = call.setup(App, {});
      const appComponent = call.findByAttr(wrapper, '.app-container');
      expect(appComponent.length).toBe(1);
    });
  });
})

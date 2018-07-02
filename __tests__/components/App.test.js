import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import App from '../../src/components/app';
import CurrencyWidget from '../../src/components/CurrencyWidget';



describe('<App />', () => {
  describe('render()', () => {
    test('renders two currency widgets', () => {
      const wrapper = shallow(<App />);
      console.log(wrapper);
      expect(wrapper.find(CurrencyWidget).to.have.length(2));
    });
  });
});

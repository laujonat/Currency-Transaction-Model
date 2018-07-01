import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import CurrencyWidget from '../../src/components/CurrencyWidget';


describe('<CurrencyWidget />', () => {
  describe('render()', () => {
    test('renders currency widget', () => {
      const wrapper = shallow(<CurrencyWidget />).dive();
      console.log(wrapper);
      expect(wrapper.exists().to.equal(false));
    });
  });

});

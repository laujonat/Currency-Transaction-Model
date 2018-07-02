import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import CurrencyWidget from '../../src/components/CurrencyWidget';

describe('<CurrencyWidget />', () => {
  it('renders currency widget', () => {
    const wrapper = shallow(<CurrencyWidget />);
    expect(wrapper.exists()).toBe(true);
  });
});

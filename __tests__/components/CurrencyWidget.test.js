import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import CurrencyWidget from '../../src/components/CurrencyWidget';

describe('<CurrencyWidget />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CurrencyWidget />);
  });

  it('renders widget', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders two inputs', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('renders a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('renders two dropdowns', () => {
    expect(wrapper);
  });
});

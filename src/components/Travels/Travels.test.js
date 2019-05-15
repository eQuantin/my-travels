import React from 'react';
import { shallow } from 'enzyme';
import Travels from './Travels';

describe('<Travels />', () => {
  test('renders', () => {
    const wrapper = shallow(<Travels />);
    expect(wrapper).toMatchSnapshot();
  });
});

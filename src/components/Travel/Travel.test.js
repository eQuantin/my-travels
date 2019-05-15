import React from 'react';
import { shallow } from 'enzyme';
import Travel from './Travel';

describe('<Travel />', () => {
  test('renders', () => {
    const wrapper = shallow(<Travel />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Menu
      labels={["local", "health"]}
      updateNews={jest.fn()}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});

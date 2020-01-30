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

  it('should call the updateNews prop with a label when the label\'s corresponding menu button is clicked', () => {
    const mockUpdateNews = jest.fn();
    const wrapper = shallow(<Menu
      labels={["local"]}
      updateNews={mockUpdateNews}
      />
    );

    wrapper.find('.menu-button').simulate('click');
    expect(mockUpdateNews).toHaveBeenCalledWith("local");
  })
});

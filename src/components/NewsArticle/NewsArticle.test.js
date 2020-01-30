import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
      image="img"
      headline="Test Headline"
      description="Test Description"
      url="url"
    />);
  expect(wrapper).toMatchSnapshot();
  });
});

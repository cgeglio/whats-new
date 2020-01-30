import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<SearchForm
      newsItems={[
        {topic: "local", articles: []},
        {topic: "entertainment", articles: []}
      ]}
      updateFromSearch={jest.fn()}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});

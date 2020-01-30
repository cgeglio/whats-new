import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsContainer
      news={[
        {topic: "local", articles: []},
        {topic: "entertainment", articles: []}
      ]}
    />)
  expect(wrapper).toMatchSnapshot();
  })
})

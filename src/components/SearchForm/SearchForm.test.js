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

  it('should update state with a new keyword when updateKeyword is called', () => {
    const wrapper = shallow(<SearchForm />);
    const mockEvent = {target: {name: 'keyword', value: 'denver'}};
    const expected = {keyword:'denver'};

    expect(wrapper.state()).toEqual({keyword: ''});
    wrapper.instance().updateKeyword(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should find search related articles and call updateArticles when findArticles is called', () => {
    const wrapper = shallow(<SearchForm
      newsItems={[
        {topic: "local", articles: []},
        {topic: "entertainment", articles: []}
      ]}
      updateFromSearch={jest.fn()}
    />);
    const mockEvent = {preventDefault: jest.fn()};

    wrapper.instance().updateArticles = jest.fn();
    wrapper.instance().findArticles(mockEvent);
    expect(wrapper.instance().updateArticles).toHaveBeenCalled();
  });

  it('should call updateFromSearch and reset state when updateArticles is called', () => {
    const wrapper = shallow(<SearchForm
      updateFromSearch={jest.fn()}
    />);
    const mockArticles = [{headline: 'denver'}, {headline: 'colorado'}]
    const expected = {keyword: ''};

    wrapper.instance().updateArticles(mockArticles);
    expect(wrapper.instance().props.updateFromSearch).toHaveBeenCalled();
    expect(wrapper.state()).toEqual(expected);
  });
});

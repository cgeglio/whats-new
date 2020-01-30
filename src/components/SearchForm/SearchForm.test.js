import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<SearchForm
      newsItems={[
        {topic: 'local', articles: []},
        {topic: 'entertainment', articles: []}
      ]}
      updateFromSearch={jest.fn()}
    />);

  expect(wrapper).toMatchSnapshot();
  });

  it('should start off with a default state', () => {
    const wrapper = shallow(<SearchForm />);
    const expected =  {keyword: ''};

    expect(wrapper.state()).toEqual(expected);
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
        {topic: 'local', articles: ['article1']},
        {topic: 'entertainment', articles: ['article2']}
      ]}
      updateFromSearch={jest.fn()}
    />);
    const mockEvent = {preventDefault: jest.fn()};
    wrapper.instance().updateArticles = jest.fn();

    wrapper.instance().findArticles(mockEvent);
    expect(wrapper.instance().updateArticles).toHaveBeenCalledWith(['article1', 'article2']);
  });

  it('should call updateFromSearch and reset state when updateArticles is called', () => {
    const wrapper = shallow(<SearchForm
      updateFromSearch={jest.fn()}
    />);
    const mockKeyword = {keyword: 'denver'};
    const mockArticles = [{headline: 'denver'}, {headline: 'colorado'}];
    const expectedKeyword = {keyword: ''};
    const expectedSearchResult = {topic: 'denver', articles: [{headline: 'denver'}]};

    wrapper.setState(mockKeyword);
    expect(wrapper.state()).toEqual(mockKeyword);
    wrapper.instance().updateArticles(mockArticles);
    expect(wrapper.instance().props.updateFromSearch).toHaveBeenCalledWith(expectedSearchResult);
    expect(wrapper.state()).toEqual(expectedKeyword);
  });

  it('should call the findArticles method when the search button is clicked', () => {
    const wrapper = shallow(<SearchForm />);
    wrapper.instance().findArticles = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = {preventDefault: jest.fn()};

    wrapper.find('.search').simulate('click', mockEvent);
    expect(wrapper.instance().findArticles).toHaveBeenCalledWith(mockEvent);
  })
});

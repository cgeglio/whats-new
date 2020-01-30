import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import local from '../../data/local';
import health from '../../data/health';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should start off with a default state', () => {
    const wrapper = shallow(<App />);
    const expected = {topic: '', articles: []};
    expect(wrapper.state()).toEqual(expected);
  });

  it('should sort news data and update state when sortNews is called', () => {
    const wrapper = shallow(<App />);
    const mockData = {"local": [{headline: "article1"}], "health": [{headline: "article2"}]};

    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual({topic: 'local', articles: [{headline: "article1"}], topic: 'health', articles: [{headline: "article2"}]});
  });

  it('should update state with a topic and articles when updateNews is called', () => {
    const wrapper = shallow(<App />);
    const mockTopic = "health";
    const mockNews = {topic: "health", articles: health}
    const expected = mockNews;

    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual({topic: '', articles: []});
    wrapper.instance().updateNews(mockTopic);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should update state with a topic and articles when updateFromSearch is called', () => {
    const wrapper = shallow(<App />);
    const mockResults = {topic: "denver", articles: local}
    const expected = mockResults;

    expect(wrapper.state()).toEqual({topic: '', articles: []});
    wrapper.instance().updateFromSearch(mockResults);
    expect(wrapper.state()).toEqual(expected);
  });
});

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

import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'

let news = [];

class App extends Component {
  constructor() {
    super();
    this.state = {topic: '', articles: []};
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(newsData => this.sortNews(newsData))
      .catch(error => console.log(error))
  }

  sortNews = (data) => {
    let labels = Object.keys(data);
    labels.forEach(label => {
      news.push({topic: label, articles: data[label]})
    });
    this.setState({topic: 'local', articles: data.local});
  }

  updateNews = selectedTopic => {
    this.setState({topic: selectedTopic, articles: news.find(n => n.topic === selectedTopic).articles});
  }

  updateFromSearch = searchResults => {
    this.setState({topic: searchResults.topic, articles: searchResults.articles});
  }

  render () {
    return (
      <div className='app'>
        <SearchForm
          newsItems={news}
          updateFromSearch={this.updateFromSearch}
        />
        <Menu
          labels={news.map(n => n.topic)}
          updateNews={this.updateNews}
        />
        <NewsContainer
            key={this.state.topic}
            news={this.state.articles}
          />
      </div>
    )
  }
}

export default App;

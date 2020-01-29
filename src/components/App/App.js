import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology'


let news = [
  {topic: "local", articles: local},
  {topic: "entertainment", articles: entertainment},
  {topic: "health", articles: health},
  {topic: "science", articles: science},
  {topic: "technology", articles: technology}
];

class App extends Component {
  constructor() {
    super();
    this.state = {topic: "local", articles: local};
  }

  updateNews = selectedTopic => {
    this.setState({topic: selectedTopic, articles: news.find(n => n.topic === selectedTopic).articles})
  }

  render () {
    return (
      <div className="app">
        <SearchForm/>
        <Menu
          labels={news.map(n => n.topic)}
          updateNews={this.updateNews}
        />
        <NewsContainer
            key={this.state.topic}
            news={this.state.articles}
          />
        })}
      </div>
    );
  }
}

export default App;

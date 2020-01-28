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

class App extends Component {
  constructor() {
    super();
    this.state = {news: [
      {topic: "local", articles: local},
      {topic: "entertainment", articles: entertainment},
      {topic: "health", articles: health},
      {topic: "science", articles: science},
      {topic: "technology", articles: technology}
    ]};
  }

  render () {
    return (
      <div className="app">
        <SearchForm/>
        <Menu
          labels={this.state.news.map(n => n.topic)}
        />
        {this.state.news.map(type => {
          return <NewsContainer
            key={type.topic}
            news={type.articles}
          />
        })}
      </div>
    );
  }
}

export default App;

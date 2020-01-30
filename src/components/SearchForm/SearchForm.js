import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {keyword: ''}
  }

  updateKeyword = event => {
    this.setState({keyword: event.target.value})
  }

  findArticles = event => {
    event.preventDefault();
    let articles = this.props.newsItems.reduce((acc, n) => {
      n.articles.forEach(a => acc.push(a))
      return acc;
    }, []);
    this.updateArticles(articles);
  }

  updateArticles = articles => {
    this.props.updateFromSearch({topic: this.state.keyword, articles: articles.filter(a => a.headline.toUpperCase().includes(this.state.keyword.toUpperCase()))})
    this.setState({keyword: ''})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search for articles..."
          name="keyword"
          value={this.state.keyword}
          onChange={this.updateKeyword}
        />
        <button className="search" onClick={this.findArticles}>Search</button>
      </form>
    )
  }
}

export default SearchForm;

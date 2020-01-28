import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import entertainmentData from "/Users/carla/Mod_3/whats-new/src/data/entertainment.js"


class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <NewsContainer
        news= {entertainmentData}
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className="article">
      <img src={props.image} alt=''/>
      <h1>{props.headline}</h1>
      <p>{props.description}</p>
      <a href={props.url}>Link To Article</a>
    </div>
  )
}


export default NewsArticle;

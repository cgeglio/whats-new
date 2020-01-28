import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  return (
    <section className="newsContainer">
      {props.news.map(n => {
        return <NewsArticle
          key={`${Date.now()}-${n.headline}`}
          image = {n.img}
          headline = {n.headline}
          description = {n.description}
          url = {n.url}
        />
      })}
    </section>
  )
};

export default NewsContainer;

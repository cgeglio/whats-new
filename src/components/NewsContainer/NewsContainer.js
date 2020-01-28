import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  return <NewsArticle
  image = {props.newsItem.img}
  headline = {props.newsItem.headline}
  description = {props.newsItem.description}
  id = {props.newsItem.id}
  />
};

export default NewsContainer;

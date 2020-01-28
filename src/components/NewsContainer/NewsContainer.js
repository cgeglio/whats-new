import React from 'react';
import './NewsContainer.css'

const NewsContainer = (props) => {
  return <div className={props.id}><h1>{props.headline}</h1><p>{props.description}</p></div>
};

export default NewsContainer;

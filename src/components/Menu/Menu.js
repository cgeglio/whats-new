import React from 'react';
import './Menu.css'

const Menu = (props) => (
  <div className="menu">
    {props.labels.map(l => <button className="menu-button" key={l} onClick={(event) => props.updateNews(l)}>{l}</button>)}
  </div>
);

export default Menu;

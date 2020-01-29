import React from 'react';
import './Menu.css';
import logo from '../../images/whats-new-logo.png'


const Menu = (props) => (
  <div className="menu">
    <img src={logo} alt='whats new logo' className="logo-image"/>
    {props.labels.map(l => <button className="menu-button" key={l} onClick={(event) => props.updateNews(l)}>{l[0].toUpperCase() + l.slice(1)}</button>)}
  </div>
);

export default Menu;

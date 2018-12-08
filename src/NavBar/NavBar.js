import React from 'react';
import logo from './Netflix_2015_logo.svg';
import Icon from '@material-ui/core/Icon';
import './NavBar.css';


class NavBar extends React.Component {
  render () {
    return (
      <div className="navbar-position">
        <nav className="navBar-container">
          <img className="logo" alt="Red Netflix logo" src={logo}></img>
          <div className="orientation-container orientation white">
            <p>Home</p>
            <p>Series</p>
            <p>Films</p>
            <p>Recently Added</p>
            <p>My List</p>
          <div className="logo-bar">
        <Icon className= "icon white">search</Icon>
        <Icon className= "icon white">notifications</Icon>
          </div>
          <div className="logo-bar">
          <p> Joe Pardone </p>
          <Icon className= "white">arrow_drop_down</Icon>
          </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
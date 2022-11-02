import React, { Component } from 'react';

var imageName = require('./img/logo.png');

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-style navbar-expand-lg">
  <a className="navbar-brand" href="/#">
    <img src={imageName} width="75" height="75" alt="" />
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/cart">Shop</a>
      </li>

    <ul className='navbar-nav float-right'>
    <li className="nav-item">
        <a className="nav-link" href="/auth">Login/Logout</a>
      </li>
      <li>
      
      </li>
    </ul>
      
      
    </ul>
  </div>
</nav>
            </React.Fragment>
        );
    }
}
 
export default NavBar;


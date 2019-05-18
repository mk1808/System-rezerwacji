import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink}from 'react-router-dom'
class Header extends React.Component {
url;
    constructor() {
        super();
        this.url=window.location.pathname;
        console.log(this.url);
    }

    render(){
        return(

<nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Rezerwacje</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/statistics">Statystyki </NavLink>
            </li>
            
          </ul>
        
      </nav>
        );
    }
}



export default Header;

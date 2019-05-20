import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink}from 'react-router-dom'
class Header extends React.Component {
url;
    constructor() {
        super();
        this.url=window.location.pathname;
    }

    render(){
        return(

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src="https://media.istockphoto.com/vectors/tennis-rackets-vector-id165790819?k=6&m=165790819&s=612x612&w=0&h=ImWjpYXRv3LtiG_RxGDvOK9vMKUlxCEDWtx85r87qCo="
    width="50px" height="40px">
    </img></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Rezerwacje</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/statistics">Statystyki </NavLink>
            </li>
            
          </ul>
    </div>
  </div>
</nav>
        );
    }
}



export default Header;

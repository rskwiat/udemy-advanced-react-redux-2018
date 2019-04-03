import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

  renderLinks() {
    if (this.props.autheticated) {
      return [
        <li key="Feature" className="nav-item">
          <Link to="/feature">Feature</Link>
        </li>,
        <li key="signout" className="nav-item">
          <Link to="/signout">Sign Out</Link>
        </li>

      ]
    } else {
      return [
        <li key="SignUp" className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>,
        <li key="signin" className="nav-item">
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Redux Auth</Link>
          </li>
          {this.renderLinks()}
        </ul>
        
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    autheticated: state.auth.autheticated
  }
}

export default connect(mapStateToProps)(Header);

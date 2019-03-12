import React, { Component } from 'react';

import { Route } from 'react-router-dom'; 
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions';

class App extends Component {

  renderHeader() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">


        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/post">Post A Comment</Link></li>
          <li className="nav-item">{this.renderButton()}</li>
        </ul>
      </nav>
    );
  }

  renderButton() {
    const { auth, changeAuth } = this.props;

    if (auth) {
      return (
        <button onClick={()=> changeAuth(false) } className="btn btn-outline-danger"> Sign Out</button>
      )
    } else {
      return (
        <button onClick={()=> changeAuth(true) } className="btn btn-outline-success"> Sign In</button>
      )     
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { changeAuth })(App);

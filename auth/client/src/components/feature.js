import React, { Component } from 'react';
import requireAuth from './auth/requireAuth';

class Feature extends Component {

  render() {
    return (
      <div className="app">
        <h3>this is a hidden Component</h3>
      </div>
    );
  }
}

export default requireAuth(Feature);
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.navigate();
    }
  
    componentDidUpdate() {
      this.navigate();
    }
  
    navigate() {
      const { auth } = this.props;
      if (!auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps)(ComposedComponent);
};

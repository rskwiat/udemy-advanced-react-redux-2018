import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signin } from '../../actions';

class Signin extends Component {

  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature')
    });

  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Please Sign In</h2>
        <fieldset className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            className="form-control"
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset class="form-group">
          <label htmlFor="password">Password</label>
          <Field 
            className="form-control"
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        { this.props.errorMessage && 
          <div className="alert alert-danger">{this.props.errorMessage}</div> 
        }
        <button className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  reduxForm({ form: 'signin' }),
  connect(mapStateToProps, { signin })
)(Signin);

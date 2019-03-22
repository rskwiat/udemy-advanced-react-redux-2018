import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


class Signup extends Component {

  onSubmit = (formProps) => {
    console.log(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field 
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field 
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
          <button>Sign Up</button>

        </fieldset>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(Signup);

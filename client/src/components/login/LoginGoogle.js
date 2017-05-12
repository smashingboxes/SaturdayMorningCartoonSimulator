import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';

class LoginGoogle extends Component {

  success = (response) => {
    console.log('success', response);
    this.props.actions.userLogin(response.googleId);
  }
  failure = (response) => {
    console.log('failure', response);
  }

  render() {
    const success = this.success;
    const failure = this.failure;

    return (
      <GoogleLogin
        clientId="85606006489-juqi5bmm82m7fdd1qhc7nft3t4242dsg.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={success}
        onFailure={failure}
      />
    )
  }
}

LoginGoogle.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object.isRequired
}

export default LoginGoogle;

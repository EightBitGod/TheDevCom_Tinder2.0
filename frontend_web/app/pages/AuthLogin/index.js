import React from 'react';
import { EventEmitter } from 'events';
import Auth0Lock from 'auth0-lock';
import { Button } from '@material-ui/core';

import Auth0Config from '../../components/Auth0/config';

const LOGIN_SUCCESS_PAGE = '/Home';
const LOGOUT_PAGE = '/';

class AuthLogin extends React.Component {
  isValid = Auth0Config.clientID && Auth0Config.domain;

  lock = this.isValid
    ? new Auth0Lock(
      Auth0Config.clientID,
      Auth0Config.domain,
      Auth0Config.options,
    )
    : null;

  onLogin = () => {
    if (!this.lock) {
      return;
    }
    this.lock.show();
  };

  onLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    location.pathname = LOGOUT_PAGE;
  };

  handleAuthentication = () => {
    this.lock.on('authenticated', this.setSession());
    this.lock.on('authorization_error', (error) => {
      alert(error);
    });
  };

  setSession = (authResult) => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('idToken', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    location.hash = '';
    location.pathname = LOGIN_SUCCESS_PAGE;
  };

  isAuthenticated = () => {
    const expiresAt = localStorage.getItem('expires_at');
    new Date().getTime() < JSON.parse(expiresAt);
  };

  render() {
    const authToken = localStorage.getItem('authToken');

    return (
      <div>
        <h3>Login Page</h3>
        <Button variant="contained" onClick={this.onLogin}>
          Login
        </Button>
        <br /> <br />
        {authToken && (
          <Button variant="contained" onClick={this.onLogout}>
            Logout
          </Button>
        )}
      </div>
    );
  }
}

export default AuthLogin;

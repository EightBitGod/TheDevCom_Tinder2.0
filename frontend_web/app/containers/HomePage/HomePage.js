import React, { Component } from 'react';

import AuthLogin from '../../pages/AuthLogin';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const authToken = localStorage.getItem('authToken');
    return <div>{authToken ? <h1>HomePage</h1> : <AuthLogin />}</div>;
  }
}

export default HomePage;

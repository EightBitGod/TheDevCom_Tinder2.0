/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import Callback from 'components/Callback';
import history from 'utils/history';
import Auth from '../../../config/auth0/auth';
import './style.scss';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    {/* <Header /> */}
    <Switch>
      {/* <Route
          exact
          path="/"
          render={(props) => <HomePage auth={auth} {...props} />}
          />
        <Route path="/home" render={(props) => <HomePage auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
          />
      </Router> */}
      <Router history={history} component={HomePage}>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
        <Route
          exact
          path="/"
          render={props => <HomePage auth={auth} {...props} />}
        />
        <Route
          path="/home"
          render={props => <HomePage auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </Router>
    </Switch>
    {/* <Footer /> */}
  </div>
);

export default App;

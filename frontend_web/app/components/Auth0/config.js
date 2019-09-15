const Auth0Config = {
  domain: 'devcom.auth0.com',
  clientID: 'pW6LQ3oPpRWp3vRTp46dZ5KlCAsrAutt',
  rememberLastLogin: true,
  language: 'en',
  closable: true,
  logoutUrl: 'http://localhost:3000',
  options: {
    auth: {
      autoParseHash: true,
      redirect: true,
      redirectUrl: 'http://localhost:3000',
      responseType: 'token id_token',
      scope: 'openid profile',
    },
    languageDictionary: {
      title: 'Tinder 2.0',
      emailInputPlaceholder: 'demo@demo.com',
      passwordInputPlaceholder: 'demopassword'
    },
    theme: {
      labeledSubmitButton: true,
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000'
        }
      }
    }
  }
};
export default Auth0Config;

import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/GlobalStyle';
import { KwitterThemeProvider } from './styles/theme';

WebFontLoader.load({
  google: {
    families: ['Roboto']
  }
});

const providerConfig = {
  domain: 'dev-l0ct8qiv.eu.auth0.com',
  clientId: 'cmEcZQZ8ENMuAR4tUZrAlJo6pzGaP5C1',
  redirectUri: window.location.origin
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <GlobalStyle />
      <KwitterThemeProvider>
        <App />
      </KwitterThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();

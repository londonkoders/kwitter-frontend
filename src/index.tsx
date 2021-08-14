import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { KwitterThemeProvider } from './styles/theme';
import WebFontLoader from 'webfontloader';
import reportWebVitals from './reportWebVitals';

WebFontLoader.load({
  google: {
    families: ['Roboto']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <KwitterThemeProvider>
      <App />
    </KwitterThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

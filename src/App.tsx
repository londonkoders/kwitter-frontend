import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User/User';
import Home from './components/Home/Home';

function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

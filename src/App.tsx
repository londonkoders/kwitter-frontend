import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Profile from './pages/Profile';

const Container = styled.div`
  display: flex;
`;

const StyledNav = styled.nav`
  min-width: 200px;
`;

function App(): React.ReactElement {
  return (
    <Router>
      <Container>
        {/* TODO: Consolidate to component for navigation */}
        <StyledNav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </StyledNav>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

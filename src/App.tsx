import {
  faBell as bellDefault,
  faBookmark as bookmarkDefault,
  faEnvelope as messageDefault,
  faUser as userDefault
} from '@fortawesome/free-regular-svg-icons';
import {
  faBell as bellSelected,
  faBookmark as bookmarkSelected,
  faEnvelope as messageSelected,
  faHouse as homeDefault,
  faHouseChimney as homeSelected,
  faUser as userSelected
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { HomeButton } from './components/HomeButton';
import { NavItem } from './components/NavItem';
import Home from './pages/Home';
import Profile from './pages/Profile';

const Container = styled.div`
  display: flex;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-width: 200px;
`;

function App(): React.ReactElement {
  return (
    <Router>
      <Container>
        {/* TODO: Consolidate to component for navigation */}
        <StyledNav>
          <HomeButton />
          <NavItem
            path="/"
            defaultIcon={<FontAwesomeIcon size="lg" icon={homeDefault} />}
            selectedIcon={<FontAwesomeIcon size="lg" icon={homeSelected} />}
            text="Home"
          />

          <NavItem
            path="/notifications"
            defaultIcon={<FontAwesomeIcon size="lg" icon={bellDefault} />}
            selectedIcon={<FontAwesomeIcon size="lg" icon={bellSelected} />}
            text="Notifications"
          />
          <NavItem
            path="/messages"
            defaultIcon={<FontAwesomeIcon size="lg" icon={messageDefault} />}
            selectedIcon={<FontAwesomeIcon size="lg" icon={messageSelected} />}
            text="Messages"
          />
          <NavItem
            path="/bookmarks"
            defaultIcon={<FontAwesomeIcon size="lg" icon={bookmarkDefault} />}
            selectedIcon={<FontAwesomeIcon size="lg" icon={bookmarkSelected} />}
            text="Bookmarks"
          />
          <NavItem
            path="/profile"
            defaultIcon={<FontAwesomeIcon size="lg" icon={userDefault} />}
            selectedIcon={<FontAwesomeIcon size="lg" icon={userSelected} />}
            text="Profile"
          />
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

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { CreatePost } from '../../components/CreatePost/CreatePost';

const Header = styled.div`
  font-size: 1.5em;
`;
const Home = (): ReactElement => (
  <div>
    <Header>Home</Header>
    <CreatePost />
  </div>
);

export default Home;

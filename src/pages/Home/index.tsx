import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { KweetForm } from '../../components/KweetForm/KweetForm';

const Header = styled.div`
  font-size: 1.5em;
`;
const Home = (): ReactElement => (
  <div>
    <Header>Home</Header>
    <KweetForm />
  </div>
);

export default Home;

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Kweet as KweetModel } from '../../model/kweet';
import { Kweet } from '../Kweet';

interface KweetsListProps {
  kweets: KweetModel[];
}

const Container = styled.div`
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.grey['200']};

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey['200']};
  }
`;

export const KweetsList = ({ kweets }: KweetsListProps): ReactElement => {
  return (
    <Container>
      {kweets.map((kweet, index) => (
        <Kweet kweet={kweet} key={`kweet_${index}`} />
      ))}
    </Container>
  );
};

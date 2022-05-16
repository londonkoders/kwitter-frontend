import { Link } from 'react-router-dom';
import styled from 'styled-components';

import KwitterFavIcon from '../../assets/kwitter_logo_favicon.png';

const Logo = styled.img`
  height: 35px;
  width: 35px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  padding: 7px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export function HomeButton() {
  return (
    <StyledLink to="/">
      <Logo src={KwitterFavIcon} />
    </StyledLink>
  );
}

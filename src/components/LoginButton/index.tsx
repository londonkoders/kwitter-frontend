import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  padding: 16px;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  text-align: center;
  min-width: 150px;
  border-radius: 9999px;
  padding: 8px;
`;

export function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <ButtonContainer>
      <StyledButton onClick={loginWithRedirect}>Log in</StyledButton>
    </ButtonContainer>
  );
}

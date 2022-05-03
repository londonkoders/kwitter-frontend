import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Paths } from '../../paths';

interface NavItemProps {
  path: Paths;
  defaultIcon: React.ReactNode;
  selectedIcon: React.ReactNode;
  text?: string;
}

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
  width: 35px;

  border-radius: 50%;
`;

const StyledLink = styled(Link)<{ isCurrentPath: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 9999px;
  padding: 7px;
  min-height: 50px;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${(props) => (props.isCurrentPath ? 'bolder' : 'normal')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[200]};
  }
`;

const Text = styled.span`
  padding: 0 15px;
`;

export function NavItem({
  path,
  defaultIcon,
  selectedIcon,
  text
}: NavItemProps): JSX.Element {
  const { pathname: currentPath } = useLocation();

  const isCurrentPath = path === currentPath;

  return (
    <StyledLink to={path} isCurrentPath={isCurrentPath}>
      <Icon>{isCurrentPath ? selectedIcon : defaultIcon}</Icon>
      {text && <Text>{text}</Text>}
    </StyledLink>
  );
}

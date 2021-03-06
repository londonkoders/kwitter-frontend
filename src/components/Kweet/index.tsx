import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Kweet as KweetModel } from '../../model/kweet';

interface KweetProps {
  kweet: KweetModel;
}

const Container = styled.article`
  padding: 1em;
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey['100']};
  }

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`;

const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  min-height: 50px;
  min-width: 50px;
  border-radius: 50%;
`;

const KweetContent = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const KweetHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
`;

const DisplayName = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const KwitterHandle = styled.span`
  color: ${({ theme }) => theme.colors.grey['400']};
`;

const KweetedAt = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;

export const Kweet = ({
  kweet: { author, content, kweetedAt, likes }
}: KweetProps): ReactElement => (
  <Container>
    <ProfilePhoto src={author.profileImageUrl} />
    <KweetContent>
      <KweetHeader>
        <DisplayName>{author.displayName}</DisplayName>
        <KwitterHandle>{author.kwitterHandle}</KwitterHandle>
        <span>·</span>
        {/* TODO: Render time only if it was posted today - otherweise render date only */}
        <KweetedAt>{new Date(kweetedAt).toLocaleTimeString()}</KweetedAt>
      </KweetHeader>
      <div>{content}</div>
      <div>❤️ {likes}</div>
    </KweetContent>
  </Container>
);

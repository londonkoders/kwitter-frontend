import React, { useEffect, useState } from 'react';

import { kwitterApiClient } from '../../api/client';
import { ListKweetsResponse } from '../../model/kwitterApiModels';
import { KweetsList } from '../KweetsList';
import {
  KwitterButton,
  KwitterPost,
  KwitterTextArea,
  ProfilePhoto
} from './styled';

export const KweetForm = (): React.ReactElement => {
  const [post, setPost] = useState<string>('');
  const [kweetList, setKweetList] = useState<ListKweetsResponse>([]);

  const fetchData = async () => {
    const fetchKweets = await kwitterApiClient.get<ListKweetsResponse>(
      '/kweets'
    );
    setKweetList(fetchKweets.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const kweet = {
      content: post,
      kweetedAt: new Date().toISOString(),
      likes: 0,
      author: {
        displayName: 'User A',
        kwitterHandle: '@user_A',
        profileImageUrl: 'https://via.placeholder.com/50'
      }
    };
    kwitterApiClient.post('/kweets', kweet).then(() => fetchData());
    setKweetList((prev) => [kweet, ...prev]);
  };

  return (
    <>
      <KwitterPost>
        <ProfilePhoto src="https://via.placeholder.com/50" />
        <form onSubmit={handleSubmit}>
          <KwitterTextArea
            placeholder="What's happening?"
            value={post}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setPost(event.target.value)
            }
          />
          <KwitterButton type="submit">Kweet</KwitterButton>
        </form>
      </KwitterPost>
      <KweetsList kweets={kweetList} />
    </>
  );
};

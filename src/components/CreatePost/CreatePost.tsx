import React, { useEffect, useState } from 'react';

import { kwitterApiClient } from '../../api/client';
import { KweetsList } from '../../components/KweetsList';
import { Kweet as KweetModel } from '../../model/kweet';
import { ListKweetsResponse } from '../../model/kwitterApiModels';
import {
  KwitterButton,
  KwitterPost,
  KwitterTextArea,
  ProfilePhoto
} from './styled';

export const CreatePost = (): React.ReactElement => {
  const [post, setPost] = useState<string>('');
  const [kweetList, setKweetList] = useState<KweetModel[]>([]);

  const fetchData = async () => {
    const fetchKweets = await kwitterApiClient.get<ListKweetsResponse>(
      '/kweets'
    );
    setKweetList(fetchKweets.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setKweetList((prev) => [kweet, ...prev]);
    kwitterApiClient.post('/kweets', { kweet });
    fetchData();
  }

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
          <KwitterButton type="submit">Tweet</KwitterButton>
        </form>
      </KwitterPost>
      <KweetsList kweets={kweetList} />
    </>
  );
};

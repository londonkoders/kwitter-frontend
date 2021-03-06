import React from 'react';

import { render, screen } from '../../testUtils';
import { KweetsList } from '.';

const TEST_KWEETS = [
  {
    author: {
      displayName: 'Alice',
      kwitterHandle: '@alice_the_cat_lover',
      profileImageUrl: 'https://via.placeholder.com/50'
    },
    likes: 9,
    content: 'Look how cute my cat is! 🐱',
    kweetedAt: '2021-09-05T15:39:11.517Z'
  },
  {
    author: {
      displayName: 'ㅊ ㅐ연',
      kwitterHandle: '@chaeyun',
      profileImageUrl: 'https://via.placeholder.com/50'
    },
    likes: 99,
    content:
      '난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ ... ㄱ ㅏ끔은 눈물을 참을 수 없는 내가 별루ㄷ ㅏ...  맘이 ㅇ ㅏ ㅍ ㅏ 서...  소ㄹ ㅣ치며... 울 수 있 ㄷㅏ는건...  좋은ㄱ ㅓ ㅇ ㅑ... ㅁ ㅓ... 꼭 슬 ㅍ ㅓ ㅇ ㅑ만 우는 건 ㅇ ㅏ니잖 ㅇ ㅏ...^^ 난... 눈물ㅇ ㅣ ...좋다... ㅇ ㅏ니... 머 리가 ㅇ ㅏ닌... 맘으로...우는 ㄴ ㅐㄱ ㅏ 좋ㄷ ㅏ...',
    kweetedAt: '2021-09-05T15:39:11.517Z'
  },
  {
    author: {
      displayName: 'Bob',
      kwitterHandle: '@bob_the_builder',
      profileImageUrl: 'https://via.placeholder.com/50'
    },
    likes: 101,
    content: 'I built a new 🏠 over the weekend.',
    kweetedAt: '2021-09-05T15:39:11.517Z'
  }
];

describe('KweetsList', () => {
  it('renders list of kweets', () => {
    render(<KweetsList kweets={TEST_KWEETS} />);

    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
  });
});

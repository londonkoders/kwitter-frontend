import React from 'react';

import { render, screen } from '../../testUtils';
import { Kweet } from '.';

const TEST_KWEET = {
  author: {
    displayName: 'Alice',
    kwitterHandle: '@alice_the_cat_lover',
    profileImageUrl: 'https://via.placeholder.com/50'
  },
  likes: 9,
  content: 'Look how cute my cat is! 🐱',
  kweetedAt: '2021-09-05T15:39:11.517Z'
};

describe('Kweet', () => {
  it('renders kweet', () => {
    jest.spyOn(Date.prototype, 'toLocaleTimeString');

    render(<Kweet kweet={TEST_KWEET} />);

    const container = screen.getByRole('article');
    expect(container).toBeVisible();

    const authorDisplayName = screen.getByText('Alice');
    expect(authorDisplayName).toBeVisible();

    const authorKwitterHandle = screen.getByText('@alice_the_cat_lover');
    expect(authorKwitterHandle).toBeVisible();

    const authorProfileImage = screen.getByRole('img');
    expect(authorProfileImage).toBeVisible();

    // TODO: Add assertion for KweetedAt date / time in none locale specific way

    const kweetContent = screen.getByText('Look how cute my cat is! 🐱');
    expect(kweetContent).toBeVisible();

    const likes = screen.getByText('❤️ 9');
    expect(likes).toBeVisible();
  });
});

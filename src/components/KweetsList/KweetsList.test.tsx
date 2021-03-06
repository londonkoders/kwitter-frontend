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
    content: 'Look how cute my cat is! π±',
    kweetedAt: '2021-09-05T15:39:11.517Z'
  },
  {
    author: {
      displayName: 'γ γμ°',
      kwitterHandle: '@chaeyun',
      profileImageUrl: 'https://via.placeholder.com/50'
    },
    likes: 99,
    content:
      'λ... γ± γλ... λλ¬Όμ νλ¦° γ· γ ... γ± γλμ λλ¬Όμ μ°Έμ μ μλ λ΄κ° λ³λ£¨γ· γ...  λ§μ΄ γ γ γ γ μ...  μγΉ γ£μΉλ©°... μΈ μ μ γ·γλκ±΄...  μ’μγ± γ γ γ... γ γ... κΌ­ μ¬ γ γ γ γλ§ μ°λ κ±΄ γ γλμ γ γ...^^ λ... λλ¬Όγ γ£ ...μ’λ€... γ γλ... λ¨Έ λ¦¬κ° γ γλ... λ§μΌλ‘...μ°λ γ΄ γγ± γ μ’γ· γ...',
    kweetedAt: '2021-09-05T15:39:11.517Z'
  },
  {
    author: {
      displayName: 'Bob',
      kwitterHandle: '@bob_the_builder',
      profileImageUrl: 'https://via.placeholder.com/50'
    },
    likes: 101,
    content: 'I built a new π  over the weekend.',
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

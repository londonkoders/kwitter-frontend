import { Profile } from './profile';

export interface Kweet {
  author: Profile;
  content: string;
  likes: number;
  kweetedAt: string;
}

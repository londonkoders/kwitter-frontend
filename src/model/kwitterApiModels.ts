import { Kweet } from './kweet';

export interface GetUserResponse {
  id: number;
  kweets: Kweet[];
}

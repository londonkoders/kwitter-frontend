import axios from 'axios';

import { KWITTER_API_BASE_URL } from '../config';

const kwitterApiClient = axios.create({
  baseURL: KWITTER_API_BASE_URL
});

export { kwitterApiClient };

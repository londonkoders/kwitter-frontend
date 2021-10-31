const { REACT_APP_KWITTER_API_BASE_URL } = process.env;

if (!REACT_APP_KWITTER_API_BASE_URL) {
  throw new Error('Required configuration not found or invalid');
}

export { REACT_APP_KWITTER_API_BASE_URL as KWITTER_API_BASE_URL };

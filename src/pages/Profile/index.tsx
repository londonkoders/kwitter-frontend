import React, { ReactElement, useEffect, useState } from 'react';

import { kwitterApiClient } from '../../api/client';
import { KweetsList } from '../../components/KweetsList';
import { ListKweetsResponse } from '../../model/kwitterApiModels';

const Profile = (): ReactElement | null => {
  const [kweets, setKweets] = useState<ListKweetsResponse>([]);

  useEffect(() => {
    kwitterApiClient
      // TODO: Seems the soon-to-be API will return profile based on sequential ID for now
      .get<ListKweetsResponse>('/kweets')
      .then((response) => setKweets(response.data));
  }, []);

  return <KweetsList kweets={kweets} />;
};

export default Profile;

import React, { ReactElement, useEffect, useState } from 'react';

import { kwitterApiClient } from '../../api/client';
import { KweetsList } from '../../components/KweetsList';
import { GetUserResponse } from '../../model/kwitterApiModels';

const Profile = (): ReactElement | null => {
  const [userProfile, setUserProfile] = useState<GetUserResponse | undefined>();

  useEffect(() => {
    kwitterApiClient
      // TODO: Seems the soon-to-be API will return profile based on sequential ID for now
      .get<GetUserResponse>('/users/1')
      .then((response) => setUserProfile(response.data));
  }, []);

  return userProfile ? <KweetsList kweets={userProfile.kweets} /> : null;
};

export default Profile;

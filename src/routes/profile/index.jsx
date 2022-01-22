import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const params = useParams();

  useEffect(() => {
    console.log('params object', params);
  }, []);

  return (
    <div>
      Profile page
    </div>
  );
};

export default Profile;

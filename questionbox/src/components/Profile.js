import { useEffect, useState } from 'react';
import axios from 'axios';

export const Profile = ({ token, user }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    
  }, [token]);

  return (
    <>
      <h1>Profile</h1>
      <p>{user.username}</p>
    </>
  );
};

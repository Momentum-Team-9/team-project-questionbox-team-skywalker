import { useEffect, useState } from 'react';
import axios from 'axios';

export const Profile = ({ token }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get('https://questionbox-team-skywalker.herokuapp.com/auth/users/me/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        setProfile(response.data);
      });
  }, [token]);

  return (
    <>
      <h1>Profile</h1>
      <p>{profile.username}</p>
    </>
  );
};

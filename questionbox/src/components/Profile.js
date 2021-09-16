import { useEffect } from 'react';
import axios from 'axios';

export const Profile = ({ token }) => {
  useEffect(() => {
    axios
      .get('https://questionbox-team-skywalker.herokuapp.com/auth/users/me/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${token}`,
        },
      })
      .then((response) => console.log(response.data));
  });
  return <h1>Profile!</h1>;
};

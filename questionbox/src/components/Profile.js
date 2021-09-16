<<<<<<< HEAD
import React from 'react';

export const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
}
=======
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
>>>>>>> ddbf2e5008aa6bc972436ef70347a9ff5fc5410d

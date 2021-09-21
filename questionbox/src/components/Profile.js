import { useEffect, useState } from 'react';
import { Question } from './Question';
import axios from 'axios';

export const Profile = ({ token, user, setSelectedQuestion }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {}, [token]);
  console.log('user questions', user.questions);
  return (
    <>
      <div className="profCont">
        <h1 className="profTitle">Profile</h1>

        <p>{user.username}</p>
        {user[0].questions &&
          user[0].questions.map((question, index) => (
            <Question question={question} username={user[0].username} />
          ))}
      </div>
    </>
  );
};

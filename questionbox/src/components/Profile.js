import { useEffect, useState } from 'react';
import { Question } from './Question';
import axios from 'axios';

export const Profile = ({ token, user, }) => {
  // const [profile, setProfile] = useState([]);
  useEffect(() => {
    
  }, [token]);
  console.log('user questions', user[0])
  return (
    <>
    <div className="profCont">
      <h1 className="profTitle">{user[0].username}'s Profile</h1>
      <div className ='profileQuestions'>
        <h3>{user[0].username}'s Questions</h3>
        {user[0].questions &&
            user[0].questions.map((question, index) => (
              <Question question={question} username={user[0].username}/>
            ))}
        <h3>{user[0].username}'s Answers</h3>
          {user[0].answers.map((answer) => (
            <div className="questionCard">
              <h4>{String(answer.body)}</h4>
              <p>submitted by: {answer.owner}</p>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};


import { useEffect, useState } from 'react';
import { Question } from './Question';
import axios from 'axios';

export const Profile = ({ token, user }) => {
  // const [profile, setProfile] = useState([]);
  useEffect(() => {
    
  }, [token]);
  console.log('user questions', user[0])
  return (
    <>
    <div className="profCont">
      <h1 className="profTitle">{user[0].username}'s profile</h1>
      <div className ='profileQuestions'>
        <h3>{user[0].username}'s questions</h3>
        {user[0].questions &&
            user[0].questions.map((question) => (
              <Question question={question} username={user[0].username}/>
            ))}
        <h3>{user[0].username}'s answers</h3>
          {user[0].answers.map((answer) => (
            <div className="questionCard">
            <div className="questionCardBody">
              <div className="questionTitle">
                <h3>{String(answer.body)}</h3>
              </div>
              <div className="originalQuestion">
                <p>Original question: {answer.question} </p>
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>
    </>
  );
};


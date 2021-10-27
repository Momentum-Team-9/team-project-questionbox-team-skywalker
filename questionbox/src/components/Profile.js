import { useEffect, useState } from 'react';
import { Question } from './Question';

export const Profile = ({ token, user }) => {
  const [setSubmitted] = useState(false);
  useEffect(() => {}, [token]);
  console.log('user questions', user[0]);
  return (
    <>
      <div className="profCont">
        <h1 className="profTitle">{user[0].username}'s Profile</h1>
        <div className="profileQuestions">
          <div className="profSubTitleCont">
            <h3 className="profSubTitle">{user[0].username}'s Questions</h3>
          </div>
          {user[0].questions &&
            user[0].questions.map((question) => (
              <Question
                question={question}
                username={user[0].username}
                token={token}
                setSubmitted={setSubmitted}
              />
            ))}
          <div className="profSubTitleCont">
            <h3 className="profSubTitle">{user[0].username}'s Answers</h3>
          </div>
          {user[0].answers.map((answer) => (
            <div className="questionCard">
              <div className="questionCardBody">
                <div className="answerText">{String(answer.body)}</div>

                <div className="askedBy">
                  <p>original question: {answer.question}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

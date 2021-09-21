import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuestionForm } from './QuestionForm';
import { Link } from 'react-router-dom';
import { Question } from './Question';

export const QuestionList = ({ token, username }) => {
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (token || submitted) {
      axios
        .get(
          `https://questionbox-team-skywalker.herokuapp.com/api/questions/`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `token ${token}`,
            },
          }
        )
        .then((res) => setQuestions(res.data));
          setSubmitted(false)

    } else {
      axios
        .get(`https://questionbox-team-skywalker.herokuapp.com/api/questions/`)
        .then((res) => setQuestions(res.data));
    }
  }, [token, submitted]);

  return (
    <>
      <div className="questions">
        {token && <QuestionForm token={token} setSubmitted={setSubmitted} />}
        <div className="questionTitleCont">
          <h1 className="questionTitle">Seeds of Knowledge</h1>
        </div>
        {questions &&
          questions.map((question, index) => {
            return (
              <Question
                question={question}
                username={username}
                token={token}
                setSubmitted={setSubmitted}
              />
            );
          })}
      </div>
    </>
  );
};

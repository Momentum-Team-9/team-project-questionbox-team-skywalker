import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuestionForm } from './QuestionForm';

import { Question } from './Question';
import { Link } from 'react-router-dom';

export const QuestionList = ({ token }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState();

  useEffect(() => {
    if (token) {
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
    } else {
      axios
        .get(`https://questionbox-team-skywalker.herokuapp.com/api/questions/`)
        .then((res) => setQuestions(res.data));
    }
  }, [token]);
  const urls = questions.map((question) => '/question/' + question.pk);

  return (
    <>
      <div className="questions">
        {token && <QuestionForm token={token} />}
        <h1>Seeds of Knowledge</h1>
        {questions &&
          questions.map((question, index) => (
            <div className="questionCard" key={index}>
              <div className="qustionCardBody">
                <h2>{question.title}</h2>
                <p>
                  Asked by: {question.owner} on {question.created_at}
                </p>
              </div>
              <div className="questionCardFooter">
                <Link
                  to={urls[index]}
                  onClick={() => setSelectedQuestion(question.pk)}
                >
                  View {question.answer_count.id__count} answers
                </Link>
              </div>
            </div>
          ))}
      </div>
      {/* <div>
        <Question props={selectedQuestion} token={token} />
      </div> */}
    </>
  );
};

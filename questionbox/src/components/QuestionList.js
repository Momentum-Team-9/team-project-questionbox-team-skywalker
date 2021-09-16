import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Question } from './Question'

export const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    axios
      .get(`https://questionbox-team-skywalker.herokuapp.com/api/questions/`)
      .then((response) => {
        setQuestions(response.data);
      });
  }, [questions]);


  return (
    <>
      <div className="questions">
        <h2>questions</h2>
        {questions.map((question) => (
          <div className="questionCard">
            key={question.pk}
            <p>{question.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/questions.css';
// import { Question } from './Question'


export const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState (null)
  
  useEffect(() => {
    axios.get(`https://questionbox-team-skywalker.herokuapp.com/api/questions/`).then((response) => {
        setQuestions(response.data)
    });
}, [questions]);

  return (
    <>
    <div className="questions">
        <h1>Seeds of Knowledge</h1>
            {questions.map((question, index) => (
              <div className="questionCard" key={index}>
                <div className="qustionCardBody">
                  <h2>{question.title}</h2>
                  <p>Asked by: {question.owner} on {question.created_at}</p>
                </div>
                <div className="questionCardFooter">
                  {/* <p>Asked: {question.created_at}</p> */}
                  <button onClick={() =>(setSelectedQuestion (question.pk))}>View {question.answer_count.id__count} answers</button>
                </div>
          </div>
            ))}
    </div>
    </>
);
};
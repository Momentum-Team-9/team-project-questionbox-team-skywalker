import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {QuestionForm} from './QuestionForm';
import '../css/questions.css';
import { Question } from './Question'

export const QuestionList = ( {token} ) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  console.log(token)
  useEffect(() => {
    axios.get(`https://questionbox-team-skywalker.herokuapp.com/api/questions/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${token}`
      }
    }).then((res) => setQuestions(res.data))
  }, [token])
  console.log(questions)

  return (
    <>
    <div className="questions">
      Add a Question: {token && <QuestionForm token={token} />}
        <h1>Seeds of Knowledge</h1>
        {questions && questions.map((question, index) => (
              <div className="questionCard" key={index}>
                <div className="qustionCardBody">
                  <h2>{question.title}</h2>
                  <p>Asked by: {question.owner} on {question.created_at}</p>
                </div>
                <div className="questionCardFooter">
                  <button onClick={() =>(setSelectedQuestion (question.pk))}>View {question.answer_count.id__count} answers</button>
                </div>
              </div>
        ))}
    </div>
    <div>
    <Question id={selectedQuestion} />  
    </div>
    </> 
  );
};

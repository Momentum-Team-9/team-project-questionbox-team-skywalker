import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuestionForm } from './QuestionForm';
import { Link } from 'react-router-dom';

export const QuestionList = ({ token, username}) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [submitted, setSubmitted] = useState(false)

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
    } else {
      axios
        .get(`https://questionbox-team-skywalker.herokuapp.com/api/questions/`)
        .then((res) => setQuestions(res.data));
    }
  }, [token, submitted]);
  const urls = questions.map((question) => '/question/' + question.pk);

  const handleDelete = (event) => {
    const id = event.target.id
    return axios.delete(`https://questionbox-team-skywalker.herokuapp.com/api/questions/${id}`, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then((res) => setSubmitted(true))
  }
  return (
    <>
      <div className="questions">
        {token && <QuestionForm token={token} />}
        <h1 className="questionTitle">Seeds of Knowledge</h1>
        {questions &&
          questions.map((question, index) => (
            <div className="questionCard" key={index}>
              <div className="qustionCardBody">
                <h2>{question.title}</h2>
                <div className="questionCardFooter">
                  <div className="answerLink">
                    <Link
                      to={urls[index]}
                      onClick={() => setSelectedQuestion(question.pk)}
                    >
                      View {question.answer_count.id__count} answers
                    </Link>
                  </div>
                  <p className="askedBy">
                    Asked by: {question.owner} on {question.created_at}
                  </p> 
                  {username === question.owner ? <button  id={question.pk} onClick={(e) => handleDelete(e)}>Delete</button> :
                  <button disabled>Delete</button>}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

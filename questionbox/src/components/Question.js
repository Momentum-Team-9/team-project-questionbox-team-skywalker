import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export const Question = ({ question, username, token, setSubmitted }) => {
  const handleDelete = (event) => {
    const id = event.target.id;
    return axios
      .delete(
        `https://questionbox-team-skywalker.herokuapp.com/api/questions/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setSubmitted(true);
      });
  };
  return (
    <div className="questionCard" key={question.pk}>
      <div className="qustionCardBody">
        {username === question.owner ? (
          <div className="deleteContainer">
            <button
              className="deleteButton"
              id={question.pk}
              onClick={(e) => handleDelete(e)}
            >
              X
            </button>
          </div>
        ) : (
          <div className="deleteContainer">
            <button className="deleteDisabled" disabled>
              X
            </button>
          </div>
        )}
        <div className="questionTitle">
          <h2>{question.title}</h2>
        </div>
        <div className="answerLink">
          <Link to={`/question/${question.pk}`}>
            <button className="answerView">
              View {question.answer_count.id__count} answers
            </button>
          </Link>
        </div>
        <div className="askedBy">
          <p>
            Asked by: {question.owner} on {question.created_at}
          </p>
        </div>
      </div>
    </div>
  );
};

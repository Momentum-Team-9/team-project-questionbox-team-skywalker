import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export const Question = ({ question, username, token, setSubmitted }) => {
  const handleDelete = (event) => {
    const id = event.target.id;
    return axios
      .delete(
        `https://questionbox-team-skywalker.herokuapp.com/api/questions/${question.pk}`,
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
        <h2>{question.title}</h2>
        <div className="questionCardFooter">
          <div className="answerLink">
            <Link to={`/question/${question.pk}`}>
              View {question.answer_count.id__count} answers
            </Link>
          </div>
          <p className="askedBy">
            Asked by: {question.owner} on {question.created_at}
          </p>
          {username === question.owner ? (
            <button id={question.pk} onClick={(e) => handleDelete(e)}>
              Delete
            </button>
          ) : (
            <button disabled>Delete</button>
          )}
        </div>
      </div>
    </div>
  );
};

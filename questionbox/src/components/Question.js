import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const Question = ({ question, username, token, setSubmitted }) => {
  const isFavorite = useState(false)
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

  const addFavorite = (e) => {
    const id = e.target.id;
    console.log(id)
    console.log(token)
    const user = {username};
    console.log(user)
    axios
    .patch(`https://questionbox-team-skywalker.herokuapp.com/api/questions/${id}/`,
    {
      favorited_by: user
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      }
    }
    )
    .then((res) => {
      setSubmitted(true);
    })
  }

  return (
    <div className="questionCard" key={question.pk}>
      <div className="qustionCardBody">
        {username === question.owner ? (
          <div className="deleteContainer">
            <button
              className="deleteButton"
              id={question.pk}
              onClick={(e) => { if (window.confirm('Are you sure you want to delete this question?')) handleDelete(e)}}
              >
              X
            </button>
            <button className="favoriteDisabled" disabled>
            Favorite
            </button>
          </div>
        ) : (
          <div className="deleteContainer">
            <button className="deleteDisabled" disabled>
              X
            </button>
            {isFavorite ? (
            <button 
            className="favoriteButton"
            id={question.pk}
            onClick={(e) => addFavorite(e)}
            >
            Favorite
            </button>
            ) : (
            <button 
            className="favoriteButton"
            id={question.pk}
            onClick={(e) => addFavorite(e)}
            >
            UnFavorite
            </button>
            )}
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

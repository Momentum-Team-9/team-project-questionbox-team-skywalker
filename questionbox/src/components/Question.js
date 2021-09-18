import { useEffect, useState } from 'react';
import axios from 'axios';

export const Question = ({ token, props }) => {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://questionbox-team-skywalker.herokuapp.com/api/questions/' +
          props,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        setQuestion(response.data);
      });
  }, [question, props, token]);

  return (
    <>
      <h1>Question Detail</h1>
      <p>{question.pk}</p>
      <p>{question.title}</p>
    </>
  );
};

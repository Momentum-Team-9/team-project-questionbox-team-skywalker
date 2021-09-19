import { useEffect, useState } from 'react';
import axios from 'axios';

export const Question = ({ token, props }) => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      const response = await axios.get(
        'https://questionbox-team-skywalker.herokuapp.com/api/questions/' +
          props.match.params.pk,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`,
          },
        }
      );
      setQuestion(response.data);
      setAnswers(response.data.answers);
    }
    getQuestion();
  }, [props, token]);

  return (
    <>
      <div className="questionDetails">
        <div className="questionCard">
          <h2>{question.title}</h2>
          <p>{question.body}</p>
        </div>
        <div className="questionCard">
          {answers.map((answer) => (
            <p>{String(answer.body)}</p>
          ))}
        </div>
      </div>
    </>
  );
};

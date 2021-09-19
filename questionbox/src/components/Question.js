import { useEffect, useState } from 'react';
import axios from 'axios';
import { AnswerForm } from './AnswerForm';

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
      <h1>Question Detail</h1>
      <div>
        <AnswerForm token={token} />
      </div>
      <p>{question.pk}</p>
      <p>{question.title}</p>
      <p>{question.body}</p>
      {answers.map((answer) => (
        <p>{String(answer.body)}</p>
      ))}
      
    </>
  );
};

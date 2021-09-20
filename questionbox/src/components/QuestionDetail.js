import { useEffect, useState } from 'react';
import axios from 'axios';
import { AnswerForm } from './AnswerForm';

export const QuestionDetail = ({ token, props, pk }) => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      const response = await
 axios.get(
        'https://questionbox-team-skywalker.herokuapp.com/api/questions/' +
          props.match.params.pk,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`,
          },
        }
      ).then((response) => {
        setQuestion(response.data);
        setAnswers(response.data.answers);
      });
    }
    getQuestion();
  }, [props, token, pk]);

  return (
    <>
    {/* test */}
      <div className="questionDetails">
        <div>
        <AnswerForm token={token} />
        </div>
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

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
          <div className="askedBy">
            <p>Asked by: {question.owner} on {question.created_at}
            </p>
          </div>
        </div>
        <h3> Answers </h3>
        {answers.map((answer) => (
          <div className="questionCard">
            <div className="questionCardBody">
              <div className="questionTitle">
                <h4>{String(answer.body)}</h4>
              </div>
              <div className="askedBy">
                <p>submitted by: {answer.owner} on {answer.created_at} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

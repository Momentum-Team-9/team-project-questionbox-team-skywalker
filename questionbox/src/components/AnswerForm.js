import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';

export const AnswerForm = ({ token }) => {
  const [body, setBody] = useState('');
  const history = useHistory();
  const { pk } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        'https://questionbox-team-skywalker.herokuapp.com/api/answers/new',
        {
          question: `${pk}`,
          body: body,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        history.push(`/question/${pk}/`);
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === 'body') {
      setBody(event.target.value);
    }
  };

  return (
    <div className="uk-container uk-flex uk-flex-center uk-flex-middle uk-height-large">
      <form className="uk-form-horizontal" onSubmit={handleSubmit}>
        <label className="uk-form-label">Your Answer: </label>
        <input
          className="uk-input"
          placeholder="Enter Answer Here"
          type="text"
          // using state to pass a value to this attribute
          // makes this a controlled component
          value={body}
          onChange={(e) => handleChange('body', e)}
        />
        <button className="uk-button">Post Your Answer</button>
      </form>
    </div>
  );
};

import { useState } from 'react';
import axios from 'axios';

export const QuestionForm = ({ token, setSubmitted }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        'https://questionbox-team-skywalker.herokuapp.com/api/questions/',
        {
          title: title,
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
        setSubmitted(true);
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === 'title') {
      setTitle(event.target.value);
    }
    if (inputType === 'body') {
      setBody(event.target.value);
    }
  };

  return (
    <div className="uk-container uk-flex uk-flex-center uk-flex-middle uk-height-large">
      <form className="uk-form-horizontal" onSubmit={handleSubmit}>
        <label className="uk-form-label">Title</label>
        <input
          className="uk-input"
          type="text"
          placeholder="Enter Question Here"
          value={title}
          onChange={(e) => handleChange('title', e)}
        />
        <label className="uk-form-label">Body</label>
        <input
          className="uk-input"
          placeholder="Add More Detail (Optional)"
          type="text"
          // using state to pass a value to this attribute
          // makes this a controlled component
          value={body}
          onChange={(e) => handleChange('body', e)}
        />
        <div className="uk-buttonCont">
          <button className="uk-button">Ask a Question</button>
        </div>
      </form>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuestionForm } from './QuestionForm';
import { Question } from './Question';
import _ from 'lodash';

export const QuestionList = ({ token, username }) => {
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (token || submitted) {
      axios
        .get(
          `https://questionbox-team-skywalker.herokuapp.com/api/questions/`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `token ${token}`,
            },
          }
        )
        .then((res) => setQuestions(res.data));
      setSubmitted(false);
    } else {
      axios
        .get(`https://questionbox-team-skywalker.herokuapp.com/api/questions/`)
        .then((res) => setQuestions(res.data));
    }
  }, [token, submitted]);
  const handleSubmit = () => {
    axios
      .get(
        `https://questionbox-team-skywalker.herokuapp.com/api/questions/?search=${search}`
      )
      .then((res) => setQuestions(res.data));
  };

  return (
    <>
      <div className="questions">
        <div className="questionTitleCont">
          <h1 className="questionTitle">Seeds of Knowledge</h1>
        </div>
        <div className="searchBarCont">
          <input
            className="searchBar"
            type="text"
            placeholder="search questions by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="button">
            <button className="uk-button" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>

        {questions && !_.isEmpty(questions)
          ? questions.map((question, index) => {
            return (
              <Question
                question={question}
                username={username}
                token={token}
                setSubmitted={setSubmitted}
              />
            );
          })
          : <div>
              <h4>
                No results found for that search
              </h4>
            </div>}
        {token && <QuestionForm token={token} setSubmitted={setSubmitted} />}
      </div>
    </>
  );
};

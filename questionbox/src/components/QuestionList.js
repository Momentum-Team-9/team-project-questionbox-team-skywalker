import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { questions as questionList } from '../data.js';

export const QuestionList = () => {
  const [questions, setQuestions] = useState(questionList);
  const [selectedQuestion, setSelectedQuestion] = useState (null)
  console.log(questions);
  
//   useEffect(() => {
//     axios.get(`https://questionbox-team-skywalker.herokuapp.com/questions`).then((response) => {
//         setQuestions(response.data.questions)
//     });
// }, []);

  return (
    <div className="questions">
        <h2>Questions</h2>
          <div>
            {questions.map((question) => {
              console.log(question)
                return (
                <button onClick={() => (setSelectedQuestion (question.id))} 
                key={question.id}>{question.title} 
                </button>
                )
          })}
          </div>
          {/* <div>
            <Question id={selectedQuestion} />
          </div> */}
    </div>
);
};

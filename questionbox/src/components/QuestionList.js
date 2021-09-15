import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { questions as questionsList } from '../data.js';

export const QuestionList = () => {
  const [questions, setQuestions] = useState([questionsList]);
  console.log(questions);
  return null;
};

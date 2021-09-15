import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { questions as questionList } from '../data.js';






return (
    <button onClick={() => (setSelectedQuestion (question.id))} 
    key={question.id}>{question.title} 
    </button>
    )
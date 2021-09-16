<<<<<<< HEAD
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { QuestionList } from './QuestionList'


// export const Question = ({questions}) => {
//     const [selectedQuestion, setSelectedQuestion] = useState (null)

//     return (
//         <div className="questions">
//             <h2>Questions</h2>
//             <div>
//                 {questions.map((question) => (
//                     <button onClick={() => (setSelectedQuestion (question.pk))} 
//                     key={question.pk}>{question.title} 
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }
=======
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { questions as questionList } from '../data.js';






return (
    <button onClick={() => (setSelectedQuestion (question.id))} 
    key={question.id}>{question.title} 
    </button>
    )
>>>>>>> ddbf2e5008aa6bc972436ef70347a9ff5fc5410d

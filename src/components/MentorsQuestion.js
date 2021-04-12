import React, { useEffect, useState } from "react";
import axios from "axios";

const MentorsQuestion = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/qa").then((resData) => {
      setQuestions(resData.data);
      console.log(resData);
    });
  }, []);
  return (
    <div>
      <div className="questions-section-heading">Mentors Question</div>
      {questions.map((ques, i) => (
        <div className="question-section" key={ques._id}>
          <p className="question">Q{i+1}: {ques.question}</p>
          <p>Ans: {ques.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default MentorsQuestion;

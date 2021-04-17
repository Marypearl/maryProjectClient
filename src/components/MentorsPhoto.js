import React, { useEffect, useState } from "react";

const MentorsPhoto = () => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/mentors")
      .then((res) => res.json())
      .then((resData) => {
        setMentors(resData);
        console.log(resData)
      });
  },[]);
  const handleOnMentorClick = (item) => {
    console.log("click", item);
  };

  return (
    <div>
      <div className="mentors-photo-heading">Mentors Photo</div>
      <div className="mentors-image-container">
        {mentors.map((mentor) => {
          return (
            <div
              className="mentors-details"
              key={mentor.id}
              onClick={() => handleOnMentorClick(mentor)}
            >
              <img src={mentor.imageUrl} width="200px" height="300px" />
              <div className="mentors-info">
                <p className="mentor-name">{mentor.name}</p>
                <p>{mentor.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MentorsQuestion = () => {
//   const [questions, setQuestions] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/qa").then((resData) => {
//       setQuestions(resData.data);
//       console.log(resData);
//     });
//   }, []);
//   return (
//     <div>
//       <div className="questions-section-heading">Mentors Question</div>
//       {questions.map((ques, i) => (
//         <div className="question-section" key={ques._id}>
//           <p className="question">Q{i+1}: {ques.question}</p>
//           <p>Ans: {ques.answer}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MentorsQuestion;

export default MentorsPhoto;

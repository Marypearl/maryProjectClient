import React, { useEffect, useState } from "react";

const MentorsPhoto = () => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mentors.json")
      .then((res) => res.json())
      .then((resData) => {
        setMentors(resData);
      });
  });
  const handleOnMentorClick = (item) => {
    console.log("click", item);
  };

  return (
    <div>
      <div>Mentors Photo</div>
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

export default MentorsPhoto;

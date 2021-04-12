import React, { useEffect, useState } from "react";

const MentorsBio = () => {
  const [mentorsBios, setMentorsBio] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/MentorsBio.json")
      .then((res) => res.json())
      .then((resData) => {
        setMentorsBio(resData);
        console.log(resData)
      });
  },[]);
  const handleOnMentorsBioClick = (item) => {
    console.log("click", item);
  };

  return (
    <div>
      <div className="mentors-photo-heading">Mentor's Bio</div>
      <div className="">
        {mentorsBios.map(( mentorsBio) => {
          return (
            <div
              className=""
              key={mentorsBio.id}
              onClick={() => handleOnMentorsBioClick(mentorsBio.linkUrl)}
            >
              

              <div className="">
                <p className= "mentorbio-name">{mentorsBio.name}</p>
                <p className="mentorsbio-details">{mentorsBio.bio}</p>
                <p>{mentorsBio.linkUrl}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MentorsBio;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';



const JsonApiJobs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://pothunter-shel-server.herokuapp.com/api/jobs').then((response) => {
      setPosts(response.data);
      console.log(response);
    });

  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

const mystyle5 = {
  width: "90%",
  height: "20%",
  color: 'white',
  backgroundColor: "#2E2A54",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  textAlign: 'center',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const mystyle4 = {
  width: "60%",
  height: "20%",
  color: 'black',
  backgroundColor: "white",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  textAlign: 'center',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const mystyle3 = {
  width: "90%",
  height: "20%",
  color: 'black',
  backgroundColor: "#D6D4E4",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  textAlign: 'center',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const Post = (props) => {
  return (
    
<Card style={mystyle5} class="center">
    <div>
      <h1>Find Jobs!</h1>
      <Card style={mystyle3} class="center">
      <h2> Job ID : {props.post.jobid} - Job Title : {props.post.title}</h2>
      <h2>Location : {props.post.location}</h2>
      <h2>Company : {props.post.cmpny}</h2>
      <Card style={mystyle4} class="center">
      <h3>Apply on Company site!</h3>
     <b> <a href={props.post.ref}>{props.post.ref}</a> </b>
      <h2>Job Description:</h2>
      <h3>{props.post.jd}</h3>
      <br></br>
      </Card>
      </Card>
     
    </div>
    </Card>
  );
};
export default JsonApiJobs;

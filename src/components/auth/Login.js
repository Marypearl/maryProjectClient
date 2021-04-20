import React, { useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import './CardI.css';
import './SamPic.css';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
    } catch (e) {
      console.log('error ', e);
    }
  };
  const classes = useStyles();
  const mystyle5 = {
    width: "80%",
    height: "80%",
    color: '#9e868b',
    backgroundColor: "#00008B",
    fontFamily: 'fantasy',
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  return (
    <>

    
<Card className={classes.root} style={mystyle5} class="center">
<h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      <form onSubmit={(e) => onSubmit2(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div>

        <input type='submit' value='Login' />
      </form>
          </Card>
      
    </>
  );
};

export default Login;

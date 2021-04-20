import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import './CardI.css';
import './SamPic.css';
import { NavLink } from 'react-router-dom';

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

const ReviewCard = () => {
  const classes = useStyles();

  const mystyle = {
    color: "white",
    width: "30%",
    height: "30%",
    backgroundColor: "#00008B",
    padding: "20px",
    fontFamily: "Arial"

  };

  const mystyle2 = {
    width: "30%",
    height: "auto",
    color: 'white',
    backgroundColor: "#5D4B64",
    fontFamily: 'fantasy',
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };

  const mystyle5 = {
    width: "80%",
    height: "80%",
    color: 'white',
    backgroundColor: "#AEB2D6",
    fontFamily: 'fantasy',
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  const mystyle3 = {
    width: "auto",
    height: "auto",
    backgroundColor: "#E7DFE9",
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };

  return (
    <div >
      <br></br>
      <br></br>
      <Card className={classes.root} style={mystyle3} class="center">
        <Card className={classes.root} style={mystyle2} class="center">

          <CardHeader
            action={
              <IconButton aria-label="settings">
              </IconButton>
            }

          />
          <Typography paragraph>

            <h2>
              LOGIN HERE!
       </h2>

            <h3>
              Get Action Words for your RESUME!
       </h3>

          </Typography>
          <img src={require('./logo.jpg')} alt="Resume Img" style={mystyle} />

          <CardContent>
            <Typography variant="body2" component="p" color="white">

            </Typography>
          </CardContent>

          <Card className={classes.root} style={mystyle5} class="center">
            <div>

            </div>

            <p>Click here to see the commonly used action words and accomplish statements in resume</p>
            <NavLink to='/api'>ACTION WORDS</NavLink>
            <br></br>
            <br></br>
            <NavLink to='/apiform'>RESUME TEPLATES</NavLink>

            <br></br>
            <br></br>
            <div className="register">
              <p>Register here to see 100s of Actions Words!</p>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
              <li>
                <NavLink to='/register'>Register</NavLink>
              </li>

            </div>
          </Card>
        </Card>
      </Card>

    </div>

  );
}

export default ReviewCard;
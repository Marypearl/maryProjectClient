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
    width: "50%",
    height: "50%",
    backgroundColor: "white",
    padding: "20px",
    fontFamily: "Arial"

  };

  const mystyle2 = {
    width: "70%",
    height: "70%",
    color: 'white',
    backgroundColor: "#C1BB9A",
    fontFamily: 'fantasy',
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };

  const mystyle5 = {
    width: "90%",
    height: "90%",
    color: 'white',
    backgroundColor: "#334C3A",
    fontFamily: 'fantasy',
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  const mystyle3 = {
    width: "auto",
    height: "auto",
    color: 'white',
    backgroundColor: "#334C3A",
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

            <h1>
              Get Action Words for your RESUME!
       </h1>

          </Typography>
          <img src={require('../img/action.jpg')} alt="Resume Img" style={mystyle} />

          <CardContent>
            <Typography variant="body2" component="p" color="white">

            </Typography>
          </CardContent>

          <Card className={classes.root} style={mystyle5} class="center">
            <div>

            </div>

            <h3>Click here to see the commonly used action words and accomplish statements in resume</h3>   
            <NavLink to='/api'><button type="button" class ="button4"><h3>ACTION WORDS</h3></button></NavLink>
            <h3>Click here to see your RESUME!</h3>
            <NavLink to='/apiform'><button type="button" class ="button4"><h3>RESUME TEPLATES</h3></button></NavLink>


            <br></br>
          </Card>
        </Card>
      </Card>

    </div>

  );
}

export default ReviewCard;
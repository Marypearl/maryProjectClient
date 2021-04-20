import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import './SamPic.css';

const useStyles = makeStyles({
  card: {
    Width: "1000px",
    height: "500px",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },

  row: 
  {
    width: "100%"
  }

});

function CardImg() {



  const classes = useStyles();
  const mystyle2 = {
    width: "auto",
    height: "100%",
  };
  const mystyle3 = {
    width: "auto",
    height: "auto",
    backgroundColor: "#908494",
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  return (
    <div>
      <Card className={classes.root} style={mystyle3} class="center">
      <Container>
        <Typography
          color="white"
          gutterBottom
          variant="h2"
          align="center"
        >
        Top Rated Resume Templates of 2021{" "}
        </Typography>
        
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res1.jpg')} height = {500} width={"100%"} alt={"resume1"} />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res2.jpg')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res3.jpg')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res8.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res9.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res10.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res5.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res6.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res7.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res11.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res12.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res13.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res14.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res15.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('./res16.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
           
      </Container>
      </Card>
    </div>
  );
}

export default CardImg;
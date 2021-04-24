import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Mentors from './Mentors';
import MentorsBio from './MentorsBio';
import MentorsQuestion from './MentorsQuestion'




import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';


const AppRouter = () => {
  return (
    
    <BrowserRouter>
        <Header />
      <div className="content">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Header' component={Header}> </Route>
        <Route path='/Mentors' component={Mentors} />
        <Route path='/MentorsQuestion' component={MentorsQuestion} />        
        <Route path='/MentorsBio' component={MentorsBio} />
        <Route path='/Footer' component={Footer}> </Route>


      
      </Switch>
        
      </div>
     
    </BrowserRouter>
  );
};

export default AppRouter;
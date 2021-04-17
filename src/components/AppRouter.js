import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Contact from './Contact';
import About from './About';
import MentorsPhoto from './MentorsPhoto';
import MentorsBio from './MentorsBio';
import MentorsQuestion from './MentorsQuestion'
import Header from './Header';
import Footer from './Footer';


import '../App.css';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route
          path='/about'
         
        />
        <Route path='/contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/MentorsPhoto' component={MentorsPhoto} />
        <Route path='/MentorsQuestion' component={MentorsQuestion} />

        <Route path='/MentorsBio' component={MentorsBio} />
        
      

      </Switch>
        
      </div>
     <Footer></Footer>
    </BrowserRouter>
  );
};

export default AppRouter;
  
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavCs.css';

const Navigation = () => {
  return (
    <div>
    <nav>
    <NavLink to='/JsonApiJobs'><button type="button" class ="button3"><h4>Click here for latest jobs!</h4></button></NavLink>
          <NavLink to='/resumefaq'><button type="button" class ="button3"><h4>FAQ</h4></button></NavLink>
          <NavLink to='/mainhead'><button type="button" class ="button3"><h4>Top Rated Resume</h4></button></NavLink>
          <NavLink to='/jobs'><button type="button" class ="button3"><h4>Jobs</h4></button></NavLink>
          <NavLink to='/JsonApiWords'><button type="button" class ="button3"><h4>Action Words</h4></button></NavLink>
          <NavLink to='/form'><button type="button" class ="button3"><h4>Build Your Template</h4></button></NavLink>

    </nav>
    </div>
  );
};

export default Navigation;
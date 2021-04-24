import React from 'react';
import {  NavLink } from 'react-router-dom';

function Header(){
  return (
<nav className="navbar">
  <div className="navbar__body">
    <div className="navbar__slot">
      <div className="navbar__logo">
      <p>Logo</p>
              </div>
    </div>
    <div className="navbar__slot desktop-only nav-list">
      <div className="guest">
      <NavLink exact activeClassName='is-active' to='/'>HOME</NavLink>

      <NavLink activeClassName='is-active' to='/mentors'>
            Mentor's Photo 
          </NavLink>
          <NavLink activeClassName='is-active' to='/mentorsBio'>
           Mentor Bio
          </NavLink> 
          <NavLink activeClassName='is-active' to='/mentorsQuestion'>
            Questions for Mentors 
          </NavLink> 
      
       </div>
    </div>
  </div>
</nav>
  );
}
export default Header;
import React from 'react';
import {  NavLink } from 'react-router-dom';

// function Header() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <NavLink exact activeClassName='is-active' to='/'>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName='is-active' to='/mentorsphoto'>
//             Mentor's Photo 
//           </NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName='is-active' to='/contact'>
//             Contact Us 
//           </NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName='is-active' to='/about'>
//             About 
//           </NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName='is-active' to='/mentorsQuestion'>
//             Questions for Mentors 
//           </NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName='is-active' to='/socialMedialink'>
//            Social Media Link 
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }


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
      <NavLink exact activeClassName='is-active' to='/'>Home</NavLink>

      <NavLink activeClassName='is-active' to='/mentorsphoto'>
            Mentor's Photo 
          </NavLink>
          <NavLink activeClassName='is-active' to='/mentorsBio'>
           Mentor Bio
          </NavLink> 
          <NavLink activeClassName='is-active' to='/mentorsQuestion'>
            Questions for Mentors 
          </NavLink>  

          {/* Added Menu By Soumitra */} 
          <NavLink activeClassName='is-active' to='/employmentService'>
            Employment Service 
          </NavLink>  
          <NavLink activeClassName='is-active' to='/successStory'>
            User Success Story 
          </NavLink> 
          <NavLink activeClassName='is-active' to='/mentorsRating'>
            Mentors Rating 
          </NavLink> 
          <NavLink activeClassName='is-active' to='/about'>
            About 
          </NavLink>
          <NavLink activeClassName='is-active' to='/contact'>
            Contact Us 
          </NavLink>
      
       </div>
    </div>
  </div>
</nav>
  );
}
export default Header;
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <ul className='right'>
          <li><NavLink to='/'>Goals</NavLink></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/newProject'>NewProject</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar);
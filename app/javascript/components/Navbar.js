import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => (
  <nav className="clearfix">
    <NavLink to="/">Goals</NavLink>
    <Link to="/projects">Projects</Link>
    <Link to="/newProject">New</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default withRouter(Navbar);

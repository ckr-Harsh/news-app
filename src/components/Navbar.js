import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
      <div className="logo"><h1>News App</h1></div>
      <div className="links">
        <Link to="/">Top Headlines</Link>
        <Link to="/business">Business</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/health">Health</Link>
        <Link to="/science">Science</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
      </div>
      </nav>
    </div>
  )
}

export default Navbar;

import React, { useContext } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { Category } from './try';

const Navbar = () => {
  const [categ,setCateg] = useContext(Category);
  return (
    <div className="navbar">
      <nav>
      <div className="logo"><h1>News App</h1></div>
      <div className="links">
        <NavLink to="/" exact activeClassName="activeLink">Top Headlines</NavLink>
        <NavLink to="/business" exact activeClassName="activeLink" onClick={()=>setCateg('business')}>Business</NavLink>
        <NavLink to="/entertainment" exact activeClassName="activeLink" onClick={()=>setCateg('entertainment')}>Entertainment</NavLink>
        <NavLink to="/health" exact activeClassName="activeLink" onClick={()=>setCateg('health')}>Health</NavLink>
        <NavLink to="/science" exact activeClassName="activeLink" onClick={()=>setCateg('science')}>Science</NavLink>
        <NavLink to="/sports" exact activeClassName="activeLink" onClick={()=>setCateg('sports')}>Sports</NavLink>
        <NavLink to="/technology" exact activeClassName="activeLink" onClick={()=>setCateg('technology')}>Technology</NavLink>
      </div>
      </nav>
    </div>
  )
}

export default Navbar;

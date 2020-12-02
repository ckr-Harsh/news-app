import React, { useContext } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { Category } from './try';

const Navbar = () => {
  const [categ,setCateg] = useContext(Category);
  return (
    <div className="navbar">
      <nav>
      <div className="logo"><h1>News App</h1></div>
      <div className="links">
        <Link to="/" >Top Headlines</Link>
        <Link to="/business"onClick={()=>setCateg('business')}>Business</Link>
        <Link to="/entertainment" onClick={()=>setCateg('entertainment')}>Entertainment</Link>
        <Link to="/health" onClick={()=>setCateg('health')}>Health</Link>
        <Link to="/science" onClick={()=>setCateg('science')}>Science</Link>
        <Link to="/sports" onClick={()=>setCateg('sports')}>Sports</Link>
        <Link to="/technology" onClick={()=>setCateg('technology')}>Technology</Link>
      </div>
      </nav>
    </div>
  )
}

export default Navbar;

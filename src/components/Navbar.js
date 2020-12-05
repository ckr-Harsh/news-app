import React, { useContext, useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {NavLink} from 'react-router-dom';
import { Category } from './ContextPage';

const List = ({style}) => {
  const [categ,setCateg] = useContext(Category);
  return(
    <div style={style}>
              <NavLink to="/" exact activeClassName="activeLink">Headlines</NavLink>
              <NavLink to="/business" exact activeClassName="activeLink" onClick={()=>setCateg('business')}>Business</NavLink>
              <NavLink to="/entertainment" exact activeClassName="activeLink" onClick={()=>setCateg('entertainment')}>Entertainment</NavLink>
              <NavLink to="/health" exact activeClassName="activeLink" onClick={()=>setCateg('health')}>Health</NavLink>
              <NavLink to="/science" exact activeClassName="activeLink" onClick={()=>setCateg('science')}>Science</NavLink>
              <NavLink to="/sports" exact activeClassName="activeLink" onClick={()=>setCateg('sports')}>Sports</NavLink>
              <NavLink to="/technology" exact activeClassName="activeLink" onClick={()=>setCateg('technology')}>Technology</NavLink>
            </div>
  )
}

const MobileList = ({style}) => {
  const [active, setActive] = useState(false);
  return(
    <>
      <button style={{width: '40px', marginLeft: '70%', cursor: 'pointer'}} onClick={()=>{
        setActive(!active);
      }}>
       {active ? <MenuOpenIcon /> : <MenuIcon /> }
      </button>
      { active && (
        <List style={style} />
        )}
    </>
  )
}

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 786px)").matches);

  useEffect(() => {
    window.addEventListener('resize', ()=>{
        setIsMobile(window.matchMedia("(max-width: 786px)").matches);
    })
  })

  return (
      <nav>
        <h1 className="logo">News App</h1>
        {isMobile ? (<MobileList style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '85%',
              marginBottom: '13px'
        }} />
        ) :(
          <List style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '10px'
            }} />
        )}
        
      </nav>

  )
}

export default Navbar;

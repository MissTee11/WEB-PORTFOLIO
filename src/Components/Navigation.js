import React,{useState} from 'react';
import menuHam from '../images/menuHam.png';
import closingIcon from '../images/closingIcon.png';
import './Navbar.css';
function NavigationBar(){
 
  const[menuOpen,setMenuOpen]= useState(false);
    return(
        <nav className="NavigationBar">
            <a className="title" href="/">Portfolio</a>

        <div className="menu">
          <img className="menuBtn" alt="menuBtn"
            src={menuOpen ? closingIcon: menuHam } 
            onClick={()=>{
              setMenuOpen(!menuOpen)}}
          />

          
          <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`} 
          onClick={()=> setMenuOpen(false)}>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">My Skills</a>
              </li>
              <li>
                <a href="#education">Education&Experience</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
        </div>
          
        </nav>
    )
}
export default NavigationBar;
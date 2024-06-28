import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { DigitalClock } from "./DigitalClock";
import { useState } from "react";
import { Image } from "@mui/icons-material";


export function NavBar() {

  const[open,setOpen]=useState(false)


  return (
    <header className="header-container">
      <div className="logo-area">
        <p className="logo">Christian Gaayuoni</p>
        {/* <DigitalClock  /> */}
      </div>

      <nav className="header-nav-container">
        <div className="desk-container"> 
          <div className="desk-menu"> 
          <NavLink to="/homepage">
          <li> Home</li>
          </NavLink>
          <NavLink to="/aboutme">
          <li> My life</li>
          </NavLink>
          <NavLink to="/cv">
          <li> CV</li>
          </NavLink>
          <NavLink to="/contact">
          <li> Contact</li>
        </NavLink>
        </div>
        <div className="menu-img">   
        <img id="mobile-img" src={open? "/close.png" :"/menu.png"} alt="menu image" width={30} height={30}  onClick={()=>setOpen((prev)=>!prev)}/>
        </div>
        </div>

        {

          open && <div className="mobile-menu">
          <NavLink to="/homepage">
           <li> Home</li>
          </NavLink>
          <NavLink to="/aboutme">
           <li> My life</li>
          </NavLink>
          <NavLink to="/cv">
           <li> CV</li>
          </NavLink>
          <NavLink to="/contact">
           <li> Contact</li>
          </NavLink>
        
 
         </div>
        }

        
      </nav>
    </header>
  );
}

import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { DigitalClock } from "./DigitalClock";
export function NavBar() {
  return (
    <header className="header-container">
      <div className="logo-area">
        <p className="logo">Christian Gaayuoni</p>
        <DigitalClock  />
      </div>

      <nav className="header-nav-container">
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
      </nav>
    </header>
  );
}

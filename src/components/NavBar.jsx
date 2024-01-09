import "./NavBar.css";
import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <header className="header-container">
      <p className="logo">Christian Gaayuoni</p>
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

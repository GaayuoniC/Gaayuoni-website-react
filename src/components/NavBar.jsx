import "./NavBar.css";
import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <header>
      <nav>
        <div className="menu">
          <NavLink to="/homepage">
            <li> Home</li>
          </NavLink>
          <NavLink to="/aboutme">
            <li> About me</li>
          </NavLink>
          <NavLink to="/cv">
            <li> CV</li>
          </NavLink>
          <NavLink to="/contact">
            <li> Contact</li>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

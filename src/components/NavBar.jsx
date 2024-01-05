import "./NavBar.css";
import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <header className="header-container">
      <nav className="header-nav-container">
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
      </nav>
      <figure>
              <img
                src={"Chris.jpeg"}
                alt="A picture of a man called Christian"
              />
            </figure>
    </header>
  );
}

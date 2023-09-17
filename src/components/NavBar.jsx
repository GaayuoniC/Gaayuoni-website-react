import "./NavBar.css";
import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <header>
      <nav>
        <div className="menu">
          <NavLink to="/home">
            <li> Home</li>
          </NavLink>
          <NavLink to="/home">
            <li> About me</li>
          </NavLink>
          <NavLink to="/home">
            <li> CV</li>
          </NavLink>
          <NavLink to="/home">
            <li> Contact</li>
          </NavLink>
          <img src={"Chris.jpeg"} alt="A picture of a man called Christian" />
        </div>
      </nav>
    </header>
  );
}

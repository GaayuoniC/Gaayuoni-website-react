import "./Footer.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer>
      <ol className="footer-li">
        <li>Copyright: Christian Gaayuoni</li>
        <Link to="https://www.linkedin.com/in/christian-gaayuoni-5950b132/">
          <li> Linkedin</li>
        </Link>
      </ol>
    </footer>
  );
}

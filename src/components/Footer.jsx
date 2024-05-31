import "./Footer.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer>
      <ol className="footer-li">
        <li> Christian Gaayuoni  &#169;All rights reserved</li>
        <Link to="https://www.linkedin.com/in/christian-gaayuoni-5950b132/" target="#" rel="no referral">
          <li> Linkedin</li>
        </Link>
        <Link to="https://github.com/GaayuoniC" target="#" rel="no referral">
        <li>Github</li>
        
        </Link>
      </ol>
      </footer>)
}

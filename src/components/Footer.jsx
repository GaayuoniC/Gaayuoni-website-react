import "./Footer.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer>
      <ol className="footer-li">
        <li id="copyright"> Christian Gaayuoni &#169;All rights reserved</li>
        <Link
          to="https://www.linkedin.com/in/christian-gaayuoni-5950b132/"
          target="#"
          rel="no referral"
          id="my-profile-link"
        >
          <li className="contact-links"> Linkedin</li>
        </Link>
        <Link
          to="https://github.com/GaayuoniC"
          target="#"
          rel="no referral"
          id="my-profile-link"
        >
          <li className="contact-links">Github</li>
        </Link>
      </ol>
    </footer>
  );
}

import "./Contact.css";

export function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h1> My Contact </h1>
        <p>
          <span id="contact-me">Feel free to get in touch! </span>{" "}
        </p>
        <p>
          <span className="contact-container-item"> Email: </span>
          gayuoni@proton.me
        </p>

        <p>
          <span className="contact-container-item"> Github: </span>
          <a href="https://github.com/GaayuoniC" target="_blank">
            GaayuoniC
          </a>
        </p>
        <p>
          <span className="contact-container-item"> Linkedin: </span>{" "}
          <a
            href="http://www.linkedin.com/in/christian-gaayuoni-5950b132/"
            target="_blank"
          >
            Christian Gaayuoni
          </a>
        </p>
      </div>
      <div className="contact-foto">
        <p>Odessa, Black Sea</p>
      </div>
    </div>
  );
}

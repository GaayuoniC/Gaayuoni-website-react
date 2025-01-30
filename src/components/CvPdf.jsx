import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./CvPdf.css";
import { myStudiesData, itRelevantData } from "../../data/myData";

export function CvPdf() {
  const iconStyle = {
    color: "blue",
  };

  return (
    <div className="cv-container">
      <div className="container-item-top"></div>

      <article className="container-item-body">
        {/* <div className="container-item-body-1">
          <h2>Kurz Profil</h2>
          <p>
            Ich bin ein Mensch, der gerne neuer Sachen lernt. Als neuer Frontend
            Developer fühle ich mich sehr wohl, einen neuen Weg in meiner
            Laufbahn zu gehen. Lerne gerne, wie man technicher Dokumetationen
            effektiv liest und nutzt. Das ist eine wichtiger Fähigkeit für mich,
            um mit neuen Tools und Technologien umzugehen. Ich suche nach
            erfahrenen Entwicklern, die als Mentoren fungieren können, besonders
            in einen agilen und dynamischen Arbeitsumfeld.
          </p>
        </div> */}
        <div className="container-item-body-1">
          <figure>
            <img
              id="cv-foto"
              src={"cvFoto.jpeg"}
              alt="A picture of a man on his resume page"
              width={300}
            />
          </figure>
        </div>
      </article>

      <article className="container-contact-details">
        <div className="icon-email-container">
          <EmailOutlinedIcon fontSize="medium" style={iconStyle} />

          <p>gayuoni@proton.me</p>
        </div>
        <div className="icon-mobile-container">
          <SmartphoneOutlinedIcon style={iconStyle} />
          <p>+49 (0) 15219 313 987</p>
        </div>

        <div className="icon-address-container">
          <HomeOutlinedIcon fontSize="medium" style={iconStyle} />

          <p>Freiligrathstr. 6, 53123 Bonn, Deutschland</p>
        </div>

        <div className="git-address-container">
          <p id="github-label">Github: </p>
          <Link to="https://github.com/GaayuoniC" target="_blank">
            GaayuoniC
          </Link>
        </div>
      </article>
      <article>
        <h3>Fähigkeiten</h3>
        <div className="skills-container">
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript</p>
          <p>React.js</p>
          <p>React Expo Native</p>
          <p>UI/UX Design</p>
          <p>SCM - Git & Github</p>
          <p>Web -und -App Entwicklung</p>
        </div>
      </article>
      <article>
        <ul className="it-education-container">
          <h3>IT relevante Berufserfahrung </h3>
          {itRelevantData.map((study) => (
            <li key={study.id} className="it-education-item">
              {study.period} <br />
              {study.title}
              <br />
              {study.institution}
              <br />
              {study.location}
              <br />
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h3>Bildungsweg</h3>
        <ul className="education-container">
          {myStudiesData.map((study) => (
            <li key={study.id} className="education-item">
              {study.period} <br /> {study.title} <br /> {study.institution}
              <br />
              {study.field}
              <br />
              {study.location}
            </li>
          ))}
        </ul>
      </article>

      <article>
        <h3>Sprachen</h3>
        <div className="container-language-driver-hobby">
          <p>Englisch: Muttersprache</p>
          <p>Deutsch: Verhandlungssicher</p>
          <p>Russisch: Grundkenntnisse</p>
        </div>
      </article>

      <article>
        <h3>Führerschein</h3>
        <div className="container-language-driver-hobby">
          <p>A, B</p>
        </div>
      </article>
      <article>
        <h3>Hobbies</h3>
        <div className="container-language-driver-hobby">
          <p>
            Ich liebe Musik. Wenn ich Guitare spiele, dann bin ich immer
            glücklich und zufrieden. Fußball finde ich auch cool, weil es darum
            geht, wie ein Team zusammen seinen Ziel erreicht.
          </p>
        </div>
      </article>
    </div>
  );
}

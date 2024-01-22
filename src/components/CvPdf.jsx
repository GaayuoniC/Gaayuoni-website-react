import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./CvPdf.css";
export function CvPdf() {
  //defining custom style for changing material ui icons!!
  const iconStyle = {
    color: "blue",
  };

  return (
    <div className="cv-container">
      {/* {
        <iframe
          title="PDF Viewer"
          width="100%"
          height="500px"
          src="../../pdf/Lebenslauf von Christian Gaayuoni.pdf"
        />
      } */}

      <div className="container-item-top"></div>
      <article className="container-item-body">
        <h2>Kurz Profil</h2>
        <p>
          Ich bin ein Mensch, der gerne neuer Sachen lernt. Als neuer Frontend
          Developer fühle ich mich sehr wohl, einen neuen Weg in meiner Laufbahn
          zu gehen. Lerne gerne, wie man technicher Dokumetationen effektiv
          liest und nutzt. Das ist eine wichtiger Fähigkeit für mich, um mit
          neuen Tools und Technologien umzugehen. Ich suche nach erfahrenen
          Entwicklern, die als Mentoren fungieren können, besonders in einen
          agilen und dynamischen Arbeitsumfeld.
        </p>
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
        {/* re-work needed for the git link */}
        <div className="git-address-container">
          <p id="github-label">Github: </p>
          <Link to="https://github.com/GaayuoniC" target="_blank">
            GaayuoniC
          </Link>
        </div>
      </article>
      <article>
        <h3>Fähigkeiten</h3>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">HTML5</Button>
          <Button variant="outlined">CSS3</Button>
          <Button variant="outlined">Javascript</Button>
          <Button variant="outlined">React.js</Button>
          <Button variant="outlined">React Native</Button>
          <Button variant="outlined">SCM - Git & Github</Button>
          <Button variant="outlined">Responsive design</Button>
          <Button variant="outlined">Web- und App-Entwicklung</Button>
        </Stack>
      </article>
      <article>
        <h3>IT relevante Berufserfahrung </h3>

        <p>
          8/2023 - 12/2023 <br /> FRONTEND DEVELOPER BOOTCAMP Taktsoft Campus
          Talents
          <br />
          Javascript grundlagen, HTML5 & CSS3, React.js und React Native gelernt
          und meine eigene Web und App Projekt entwickelt
          <br />
          Bonn, Deutschland
        </p>
        <p>
          10/2022 - 12/2022 <br />
          SOFTWARE TESTING TRAININGS ISTQB <br /> Test planning, Test management
          Test Automation mit Katalon Studio
          <br /> Bonn, Deutschland
        </p>
      </article>
      <article>
        <h3>Bildungsweg</h3>
        <p>
          2013 - 2014 <br />
          Masters Universität Hamburg <br /> Friedensforschung und
          Sicherheitspolitik <br /> Hamburg, Deutschland
        </p>
        <p>
          2004 - 2012 <br /> Engenieur bei der Britische Armee <br />
          England
        </p>
        <p>
          1998 - 2003 <br /> Bachelor University of Science and Technology
          <br />
          Immobilien Management Land Law, Resource Management, Property
          Management <br /> Kumasi, Ghana
        </p>
      </article>
      <article>
        <h3>Sprachen</h3>
        <p>Englisch: Muttersprache</p>
        <p>Deutsch: Verhandlungssicher</p>
      </article>
      <article>
        <h3>Führerschein</h3>
        <p>A, B</p>
      </article>
      <article>
        <h3>Hobbies</h3>
        <p>
          Ich liebe Musik. Wenn ich Guitare spiele, dann bin ich immer glücklich
          und zufrieden. Fußball finde ich auch cool, weil es darum geht, wie
          ein Team zusammen seinen Ziel erreicht.
        </p>
      </article>
    </div>
  );
}

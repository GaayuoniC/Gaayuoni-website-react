import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./CvPdf.css";
export function CvPdf() {
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
      <div className="container-item-body">
        <h2>Kurz Profil</h2>

        <p>
          Ich bin ein Mensch, der keine Angst hat, neue Dinge zu lernen. Als
          neuer Frontend Developer fühle ich mich sehr wohl, einen neuen Weg in
          meiner Laufbahn zu gehen.
        </p>
        <p>
          Lerne gerne, wie man technicher Documetationen effektiv liest und
          nutzt. Das ist eine wichtiger Fähigkeit für mich, um mit neuen Tools
          und Technologien umzugehen.
        </p>
        <p>
          Ich suche nach erfahrenen Entwicklern, die als Mentoren fungieren
          können, besonders in einen agilen und dynamische Arbeitsumfeld
        </p>
      </div>
      <div className="container-contact-details">
        <div className="icon-email-container">
          <EmailOutlinedIcon fontSize="medium" />

          <p>gayuoni@proton.me</p>
        </div>
        <div className="icon-mobile-container">
          <SmartphoneOutlinedIcon />
          <p>+49 (0) 15219 313 987</p>
        </div>

        <div className="icon-address-container">
          <HomeOutlinedIcon fontSize="medium" />

          <p>Freiligrathstr. 6, 53123 Bonn, Deutschland</p>
        </div>
        {/* re-work needed for the git link */}
        <div className="git-address-container">
          <p>Github: </p>
          <Link to="https://github.com/GaayuoniC" target="_blank">
            GaayuoniC
          </Link>
        </div>
      </div>
      <div>
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
      </div>
      <div>
        <h3>Berufserfahrung</h3>

        <p>
          8/2023-12/2023 FRONTEND DEVELOPER BOOTCAMP Taktsoft Campus Talents -
          Bonn Javascript grundlagen, HTML5 & CSS§, React.js und React Native
          gelernt und meine eigene Web und App Projekt entwickelt
        </p>
        <p>
          10/2022-12/2022 SOFTWARE TESTING TRAININGS ISTQB - Bonn Test planning,
          Test management Test Automation mit Katalon Studio
        </p>
      </div>
      <div>
        <h3>Bildungsweg</h3>
        <p>
          2013-2014 MASTERS Universität Hamburg, Friedensforschung und
          Sicherheitspolitik Konfiktforschung, Friedensforschung,
          Sicherheitspolitik
        </p>
        <p>2004-2012 Enginier bei der Britische Armee</p>
        <p>
          Hamburg 977/ J 133- BACHELOR University of Science and Technology,
          Immobilien Management Land Law, EaB jating, jesource Management,
          KropertG Management Kumasi, Ghana
        </p>
      </div>
      <div>
        <h3>Sprachen</h3>
        <p>Englisch: Muttersprache</p>
        <p>Deutsch: Verhandlungssicher</p>
      </div>
      <div>
        <h3>Fühereschein</h3>
        <p>A, B</p>
      </div>
      <div>
        <h3>Hobbies</h3>
        <p>
          Ich liebe Musik und wenn ich guitar spiele dann bin ich immer
          glücklich and zufrieden. Fußball ist auch cool weil es geht um wie ein
          Team miteinander Ihre Eiel erreichen können
        </p>
      </div>
    </div>
  );
}

import "./HomePage.css";
//import { RandomQuotes } from "../components/RandomQuotes";

export function HomePage() {
  return (
    <>
      <div className="home-page-contianer">
        <div className="home-page-contianer-item-1">
          <img
            src={"cvFoto.jpeg"}
            alt="A picture of a man called Christian"
            id="intro-image"
          />
        </div>
        <div className="home-page-contianer-item-1">
          <h1 className="continuous-slide">
            <span>Hello! </span>
            <span>Hallo! </span>
            <span>Привет! </span>
            <span>Amaaraba! </span>
            <span>Akwaaba! </span>
          </h1>
          <p>
            Welcome! My name is Christian, and I am originally from Ghana. After
            dedicating the first half of my life to pursuing two of my lifelong
            dreams, I am now embarking on the journey to fulfill my final
            aspiration: entering the field of IT. With this goal in mind, I am
            excited to transition into a new career in software development,
            beginning this chapter of my professional life in Germany.
          </p>
          <br />
          <p>
            This marks the beginning of the development of my personal website,
            which I began working on from the very first day of my{" "}
            <em> Frontend Web and App </em> software Development Bootcamp at
            <em>
              {" "}
              <a
                href="https://talents.taktsoft.com/"
                target="_blank"
                rel="noreferrer"
              >
                Taktsoft Campus Talents
              </a>
            </em>{" "}
            in Bonn, Germany.
          </p>
        </div>
      </div>
    </>
  );
}

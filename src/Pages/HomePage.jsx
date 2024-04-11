import "./HomePage.css";
import { RandomQuotes } from "../components/RandomQuotes";

export function HomePage() {
  return (
    <>
      <div className="home-page-contianer">
        <div className="home-page-contianer-item-1">
          <img
            src={"BEWERBUNGFOTO.jpg"}
            alt="A picture of a man called Christian"
            id="intro-image"
          />cd
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
            Welcome! My name is Christian and I am originally from Ghana. Having
            spent the first half of my life pursuing two of my dreams in life, I
            have now gotten to the point where I finally get the opportunity to
            achieve my last dream, that is finally venturing into the world of
            IT. So here I am, starting a career change and venturing into the
            world of software development in Germany.
          </p>
          <br />
          <p>
            This is just the beginning of the development of my own website
            which I started developing right from the first day that I started
            my
            <strong> Frontend Web and App </strong> developement Bootcamp with{" "}
            <strong>
              <a
                href="https://talents.taktsoft.com/"
                target="_blank"
                rel="noreferrer"
              >
                Taktsoft Campus Talents
              </a>
            </strong>{" "}
            in Bonn, Germany.
          </p>
        </div>
      </div>
      <div className="quotes-container">
        <RandomQuotes />
      </div>
    </>
  );
}

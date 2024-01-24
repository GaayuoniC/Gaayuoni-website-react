import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home-page-contianer">
      <div className="home-page-contianer-item-1">
        <img
          src={"BEWERBUNGFOTO.jpg"}
          alt="A picture of a man called Christian"
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
          Welcome! My name is Christian and am originally from Ghana. Having
          spent the first half of my life pursuing two of my dreams in life, I
          have now gotten to the point where I finally get the opportunity to
          achieve my last dream, that is finally venturing into the world of IT.
          So here I am, starting a carrier change and venturing into the world
          of software development in Germany.
        </p>
        <p>
          This is just the beginning of the development of my own website which
          I started developing right from the first day that I started my
          <strong> Frontend Web and App </strong> developement Bootcamp with{" "}
          <strong>
            <a href="https://talents.taktsoft.com/" target="_blank">
              Taktsoft Campust Talents {""}
            </a>
          </strong>
          in Bonn, Germany.
        </p>
        <p>WIP</p>
      </div>
    </div>
  );
}

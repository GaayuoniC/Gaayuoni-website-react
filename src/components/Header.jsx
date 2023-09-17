import "./Header.css";
export function Header() {
  return (
    <div className= "container-1">
      <header>
        <h1>Christian Gaayuoni</h1>
        <nav className="nav-tabs" >
          <ol >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">CV</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ol>
        </nav>
        <img src={"Chris.jpeg"} alt="A picture of a man called Christian" />
      </header>
    </div>
  );
}

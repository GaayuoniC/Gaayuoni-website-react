import "./Header.css";
export function Header() {
  return (
    <header>
      <h1>Christian Gaayuoni</h1>
      <nav>
        <ol className="nav-ol">
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
    </header>
  );
}

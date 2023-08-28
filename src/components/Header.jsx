import "./Header.css";
export function Header() {
  return (
    <header>
        <h1>Christian Gaayuoni</h1>
      <nav>
        <ol className="nav-ol">
          <li>Home</li>
          <li>About me</li>
          <li>CV</li>
          <li>Contact</li>
        </ol>
      </nav>
    </header>
  );
}

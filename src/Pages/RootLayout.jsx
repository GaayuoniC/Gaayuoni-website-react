import { NavBar } from "/src/components/NavBar";
import { Footer } from "/src/components/Footer";
import { Outlet } from "react-router-dom";
import "../Pages/RootLayout.css";
export function RootLayout() {
  return (
    <>
      <div className="nav-container-1">
        <NavBar />
        <main>
          <div className="welcome">
            <h1>I welcome you !</h1>
            <figure>
              <img
                src={"Chris.jpeg"}
                alt="A picture of a man called Christian"
              />
            </figure>
          </div>

          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

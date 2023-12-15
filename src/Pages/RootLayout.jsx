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
            
          </div>

          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

import { NavBar } from "/src/components/NavBar";
import { Footer } from "/src/components/Footer";
import { Outlet } from "react-router-dom";
export function RootLayout() {
  return (
    <>
      <div className="nav-container-1">
        <NavBar />
        <main>
          <h1>Welcome to my personal page</h1>

          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

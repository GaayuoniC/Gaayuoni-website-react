import { NavBar } from "/src/components/NavBar";
import { Footer } from "/src/components/Footer";
import { Outlet } from "react-router-dom"; /* Used in order to display all pages via the react dom */
import "../Pages/RootLayout.css";
export function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      {/*   <Footer /> */}
    </>
  );
}

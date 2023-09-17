import { Header } from "/src/components/Header";
import { Footer } from "/src/components/Footer";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to my personal page</h1>

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

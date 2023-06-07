import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header.jsx";
import { Footer } from "../components/footer/Footer";

export const RootPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

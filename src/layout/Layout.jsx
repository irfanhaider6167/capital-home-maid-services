import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import FloatingButtons from "../components/FloatingButtons";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      {/* Slider hidden on 404 and individual service detail pages */}
      {location.pathname !== "/pagenotfound" &&
        !location.pathname.startsWith("/services/") && <Slider />}

      <main key={location.pathname}>
        <Outlet />
      </main>

      <FloatingButtons />
      <Footer />
    </>
  );
};

export default Layout;

import React, { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FloatingButtons from "../components/FloatingButtons";

// Lazy Loaded Components
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("../components/Footer"));
const Slider = lazy(() => import("../components/Slider"));

// Loader
const Loader = () => {
  return (
    <div className="flex items-center justify-center py-6 text-base font-medium">
      Loading...
    </div>
  );
};

const Layout = () => {
  const location = useLocation();

  // Hide Slider on specific pages
  const hideSliderPages = ["/contact", "/qa"];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />

        {!hideSliderPages.includes(location.pathname) && <Slider />}

        <main>
          <Outlet />
        </main>
        <FloatingButtons />
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;

import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Qa from "./pages/Qa";
import PageNotFound from "./pages/PageNotFound";

const Services = lazy(() => import("./pages/Services"));

const Loader = () => <div>Loading...</div>;

const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qa" element={<Qa />} />

        <Route
          path="/services"
          element={
            <Suspense fallback={<Loader />}>
              <Services />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default App;

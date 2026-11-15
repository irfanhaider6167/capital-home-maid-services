import React, { memo, Suspense, lazy, useEffect } from "react";
import ServiceAreas from "../components/ServiceAreas";

// Lazy loading (performance boost)
const ActionAreaCard = lazy(() => import("../components/Card"));
const BasicCard = lazy(() => import("../components/AfterService"));
const ReviewSlider = lazy(() => import("../components/CustomerReviewe"));

// Simple loading fallback
const Loader = () => (
  <div style={{ textAlign: "center", padding: "40px", color: "#0b2a5b" }}>
    Loading...
  </div>
);

const Home = () => {
  useEffect(() => {
    document.title =
      "Sania Home Maid Services | Verified Maids, Cooks & Nurses in Pakistan";
  }, []);

  return (
    <main>
      {/* 1. Our 11 Services & Salary Packages */}
      <Suspense fallback={<Loader />}>
        <ActionAreaCard />
      </Suspense>

      {/* 2. Service Areas (Islamabad, Rawalpindi, Lahore & All Pakistan) */}
      <ServiceAreas />

      {/* 3. Why Choose Us */}
      <Suspense fallback={<Loader />}>
        <BasicCard />
      </Suspense>

      {/* 4. Customer Reviews */}
      <Suspense fallback={<Loader />}>
        <ReviewSlider />
      </Suspense>
    </main>
  );
};

export default memo(Home);

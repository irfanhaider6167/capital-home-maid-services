import React, { memo, Suspense, lazy } from "react";

// Lazy loading (performance boost)
const ActionAreaCard = lazy(() => import("../components/Card"));
const BasicCard = lazy(() => import("../components/AfterService"));
const ReviewSlider = lazy(() => import("../components/CustomerReviewe"));

// Simple loading fallback
const Loader = () => (
  <div style={{ textAlign: "center", padding: "40px" }}>Loading...</div>
);

const Home = () => {
  return (
    <main>
      {/* Services Section */}
      {/* <Suspense fallback={<Loader />}> */}
      <ActionAreaCard />
      {/* </Suspense> */}

      {/* Why Choose Us */}
      {/* <Suspense fallback={<Loader />}> */}
      <BasicCard />
      {/* </Suspense> */}

      {/* Reviews */}
      {/* <Suspense fallback={<Loader />}> */}
      <ReviewSlider />
      {/* </Suspense> */}
    </main>
  );
};

export default memo(Home);

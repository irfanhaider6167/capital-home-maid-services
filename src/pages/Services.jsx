import React, { memo, Suspense } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

// lazy load (better performance)
const ActionAreaCard = React.lazy(() => import("../components/Card"));

const Services = () => {
  return (
    <Wrapper>

      {/* Heading */}
      <Typography variant="h4" className="title">
        Our Services
      </Typography>

      {/* Lazy Loaded Content */}
      <Suspense
        fallback={
          <Box className="loader">
            <CircularProgress />
          </Box>
        }
      >
        <ActionAreaCard />
      </Suspense>

    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 60px 20px;
  background: #f9fafb;

  .title {
    text-align: center;
    margin-bottom: 30px;
    font-weight: 700;
    color: #111827;
  }

  .loader {
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }
`;
export default memo(Services);
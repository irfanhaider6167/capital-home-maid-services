import React, { memo } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

// normal import (no lazy loading)
import ActionAreaCard from "../components/Card";

const Services = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <Typography variant="h4" className="title">
        Our Services
      </Typography>

      {/* Content */}
      <Box className="content">
        <ActionAreaCard />
      </Box>
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

  .content {
    display: flex;
    justify-content: center;
  }
`;

export default memo(Services);

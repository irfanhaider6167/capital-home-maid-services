import React, { memo } from "react";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Wrapper>

      {/* About Section */}
      <motion.div
        className="about_text"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" className="title">
          About Us
        </Typography>

        <Typography variant="body1" className="text">
          This is your go-to platform for hiring domestic help online.
          We are a trusted provider for all your domestic staffing needs.
          As one of Pakistan’s leading housekeeping and maid service companies,
          we provide verified, trained and professional staff including nurses,
          nannies, patient care specialists and more.
        </Typography>
      </motion.div>

      {/* Sections */}
      <Box className="choose_section">

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h5">Why Choose Us</Typography>
          <Typography>
            We provide fast response, verified staff and reliable domestic services.
          </Typography>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5">Our Mission</Typography>
          <Typography>
            To provide high-quality home and commercial services that improve comfort and productivity.
          </Typography>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h5">Our Values</Typography>
          <Typography>
            Integrity, trust, professionalism and customer satisfaction.
          </Typography>
        </motion.div>

      </Box>

    </Wrapper>
  );
};

export default memo(About);

/* ================= STYLED ================= */

const Wrapper = styled.section`
  padding: 80px 20px;
  background: #f9fafb;
  color: #374151;

  .about_text {
    max-width: 800px;
    margin: auto;
    text-align: center;
  }

  .title {
    font-weight: 700;
    margin-bottom: 20px;
    color: #111827;
  }

  .text {
    font-size: 17px;
    line-height: 1.9;
    color: #6b7280;
  }

  .choose_section {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .card {
    width: 320px;
    background: white;
    padding: 25px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    transition: 0.3s ease;
  }

  .card:hover {
    transform: translateY(-8px);
  }

  .card h5 {
    margin-bottom: 12px;
    color: #111827;
    font-weight: 600;
  }

  .card p {
    color: #6b7280;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;
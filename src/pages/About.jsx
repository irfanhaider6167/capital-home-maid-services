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
          About Sania Home Maid Services
        </Typography>

        <Typography variant="body1" className="text">
          <strong>Sania Home Maid Services</strong> is your trusted platform in
          Islamabad and Rawalpindi for hiring verified domestic help online. We
          provide trained, reliable, and background-verified staff including
          house maids, cooks, chefs, house keepers, patient care attendants,
          home nurses, babysitters/nannies, domestic couples, kitchen helpers,
          drivers, and security guards.
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
            We provide fast response, CNIC-verified staff, and dependable
            domestic staffing solutions across Islamabad and Rawalpindi.
          </Typography>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5">Our Mission</Typography>
          <Typography>
            To deliver trustworthy, well-trained home and commercial staff that
            bring comfort, safety, and peace of mind to every family.
          </Typography>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h5">Our Values</Typography>
          <Typography>
            Integrity, safety, professionalism, and complete customer
            satisfaction in every placement.
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
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
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

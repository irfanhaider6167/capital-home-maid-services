import React, { memo } from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3">Contact Us</Typography>

        <Typography className="subtext">
          Feel free to contact us anytime for fast and reliable maid services.
        </Typography>
      </motion.div>

      {/* Cards */}
      <Box className="contact">
        {/* CALL */}
        <motion.a
          href="tel:+923254708027"
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <AddIcCallSharpIcon className="icon" />
          <Typography className="label">Call Now</Typography>
          <Typography className="value">+92 3254708027</Typography>
        </motion.a>

        {/* EMAIL */}
        <motion.a
          href="mailto:capitalmaidservicess@gmail.com?subject=Service%20Inquiry&body=Hello%20Capital%20Home%20Maid%20Services,%20I%20want%20to%20ask%20about%20your%20services."
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <EmailSharpIcon className="icon" />
          <Typography className="label">Email Us</Typography>
          <Typography className="value">
            capitalmaidservicess@gmail.com
          </Typography>
        </motion.a>

        {/* LOCATION */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Jaffar+Chowk+G11+Service+Road+Islamabad"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <LocationOnSharpIcon className="icon" />
          <Typography className="label">Location</Typography>
          <Typography className="value">
            Service Road Near Jaffar Chock G11 Islamabad
          </Typography>
        </motion.a>
      </Box>
    </Wrapper>
  );
};

export default memo(Contact);

/* ================= STYLE ================= */

const Wrapper = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f9fafb, #eef2f3);
  color: #374151;

  .heading {
    text-align: center;
    max-width: 700px;
    margin: auto;
  }

  h3 {
    font-weight: 700;
    color: #111827;
    margin-bottom: 10px;
  }

  .subtext {
    color: #6b7280;
  }

  .contact {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .card {
    width: 320px;
    background: white;
    padding: 30px 20px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    text-decoration: none;
    color: inherit;
    transition: 0.3s ease;
  }

  .icon {
    font-size: 45px;
    color: #25d366;
    margin-bottom: 15px;
  }

  .label {
    font-weight: 600;
    margin-bottom: 8px;
    color: #111827;
  }

  .value {
    color: #6b7280;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;

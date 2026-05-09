import React, { memo } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQ's", path: "/qa" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <Box className="footerWrapper">
        <div className="footerContainer">
          {/* LOGO */}
          <div className="logoContainer">
            <img
              src="/images/finalimg/logo1.png"
              alt="logo"
              className="logoImg"
            />
            <Typography className="description">
              Trusted home maid and cleaning services across Pakistan.
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* LINKS */}
          <div className="linksContainer">
            <Typography variant="h5">Information</Typography>

            {footerLinks.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* SOCIAL */}
          <div className="linksContainer">
            <Typography variant="h5">Social</Typography>

            <div className="footerIcons">
              <FacebookIcon />
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>

            <div className="footerIcons">
              <InstagramIcon />
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* CONTACT */}
          <div className="contactContainer">
            <Typography variant="h5">Contact</Typography>

            {/* PHONE */}
            <a href="tel:+923254708027" className="footerIcons">
              <AddIcCallIcon />
              <span>+92 3254708027</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:capitalmaidservicess@gmail.com"
              className="footerIcons"
            >
              <EmailIcon />
              <span>capitalmaidservicess@gmail.com</span>
            </a>

            {/* LOCATION (FIXED MAP LINK) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=G11+Service+Road+near+Jaffar+Chowk"
              target="_blank"
              rel="noreferrer"
              className="footerIcons"
            >
              <LocationOnIcon />
              <span>G11 Service Road near Jaffar Chowk</span>
            </a>
          </div>
        </div>

        <Divider className="bottomDivider" />

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography className="copyright">
            © {year} Capital Home Maid Services
          </Typography>
        </motion.div>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footerWrapper {
    background: #000;
    color: #f3f4f6;
    width: 100%;
    padding: 40px 25px 20px;
  }

  .footerContainer {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .logoImg {
    width: 110px;
    height: 110px;
    object-fit: contain;
  }

  .description {
    color: #d1d5db;
    font-size: 14px;
    line-height: 1.6;
  }

  .linksContainer,
  .contactContainer {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-width: 180px;
  }

  a {
    text-decoration: none;
    color: #d1d5db;
    transition: 0.3s;
  }

  a:hover {
    color: #f7d774;
    transform: translateX(4px);
  }

  .footerIcons {
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }

  .divider {
    background: rgba(255, 255, 255, 0.15);
  }

  .bottomDivider {
    margin: 25px 0 15px;
    background: rgba(255, 255, 255, 0.2);
  }

  .copyright {
    text-align: center;
    color: #9ca3af;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .footerContainer {
      flex-direction: column;
    }

    .divider {
      display: none;
    }
  }
`;

export default memo(Footer);

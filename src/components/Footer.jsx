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
import { servicesData } from "../data/servicesData";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "All Services", path: "/services" },
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
              src="/images/service/logo.svg"
              alt="Sania Home Maid Services Logo"
              className="logoImg"
            />
            <Typography className="description">
              Sania Home Maid Services — Clean, Reliable, and Trusted domestic
              staff all over Pakistan, specially Islamabad, Rawalpindi & Lahore.
            </Typography>
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* LINKS */}
          <div className="linksContainer">
            <Typography variant="h6" className="colHeading">
              Information
            </Typography>

            {footerLinks.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* ALL 11 SERVICES */}
          <div className="linksContainer">
            <Typography variant="h6" className="colHeading">
              Our Services
            </Typography>

            <div className="servicesGridLinks">
              {servicesData.map((service) => (
                <NavLink key={service.id} to={`/services/${service.slug}`}>
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>

          <Divider orientation="vertical" flexItem className="divider" />

          {/* CONTACT & SOCIAL */}
          <div className="contactContainer">
            <Typography variant="h6" className="colHeading">
              Contact
            </Typography>

            {/* PHONE */}
            <a href="tel:+923477054656" className="footerIcons">
              <AddIcCallIcon fontSize="small" />
              <span>+92 347 7054656</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:saniahomemaidservices@gmail.com"
              className="footerIcons"
            >
              <EmailIcon fontSize="small" />
              <span>saniahomemaidservices@gmail.com</span>
            </a>

            {/* LOCATION */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=F-11%2F1+Street+No.+3+Service+Road+Islamabad+Pakistan"
              target="_blank"
              rel="noreferrer"
              className="footerIcons"
            >
              <LocationOnIcon fontSize="small" />
              <span>
                F-11/1, Street No. 3, Service Road, Islamabad, Pakistan
              </span>
            </a>

            {/* SOCIAL */}
            <div className="socialRow">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footerIcons"
              >
                <FacebookIcon fontSize="small" />
                <span>Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footerIcons"
              >
                <InstagramIcon fontSize="small" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <Divider className="bottomDivider" />

        {/* SERVICE COVERAGE & COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography className="coverageText">
            <strong>Service Areas:</strong> All Over Pakistan — Specially
            Islamabad (F-6, F-7, F-8, F-10, F-11, E-7, G-11, DHA), Rawalpindi
            (Bahria Town Phase 1–8, Chaklala Scheme III, Cantt) & Lahore (DHA,
            Bahria Town, Gulberg, Model Town, Johar Town)
          </Typography>

          <Typography className="copyright">
            © {year} Sania Home Maid Services. All Rights Reserved.
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
    padding: 45px 25px 20px;
  }

  .footerContainer {
    display: flex;
    justify-content: space-between;
    gap: 1.8rem;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: auto;
  }

  .colHeading {
    color: #f7d774;
    font-weight: 700 !important;
    margin-bottom: 6px !important;
  }

  .logoImg {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    object-fit: contain;
    background: #ffffff;
    border: 3px solid #c59b43;
    padding: 2px;
    margin-bottom: 12px;
  }

  .description {
    color: #d1d5db;
    font-size: 14px;
    line-height: 1.6;
    max-width: 240px;
  }

  .linksContainer,
  .contactContainer {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .servicesGridLinks {
    display: grid;
    grid-template-columns: repeat(2, minmax(125px, 1fr));
    gap: 0.65rem 1.2rem;
  }

  .contactContainer {
    max-width: 270px;
  }

  a {
    text-decoration: none;
    color: #d1d5db;
    font-size: 14.5px;
    transition: 0.3s;
  }

  a:hover {
    color: #f7d774;
    transform: translateX(4px);
  }

  .footerIcons {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    line-height: 1.5;
  }

  .socialRow {
    display: flex;
    gap: 18px;
    margin-top: 6px;
  }

  .divider {
    background: rgba(255, 255, 255, 0.15);
  }

  .bottomDivider {
    margin: 25px 0 15px;
    background: rgba(255, 255, 255, 0.2);
  }

  .coverageText {
    text-align: center;
    color: #cbd5e1;
    font-size: 13px;
    line-height: 1.6;
    max-width: 950px;
    margin: 0 auto 12px;
  }

  .coverageText strong {
    color: #f7d774;
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

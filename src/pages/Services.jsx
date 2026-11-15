import React, { memo, useEffect } from "react";
import { Typography, Box, Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import styled from "styled-components";
import { motion } from "framer-motion";

import ActionAreaCard from "../components/Card";
import ServiceAreas from "../components/ServiceAreas";
import { servicesData } from "../data/servicesData";

const WHATSAPP_NUMBER = "923477054656";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Our Services & Salary Packages | Sania Home Maid Services Pakistan";
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Sania Home Maid Services, I want to hire verified domestic staff. Please share details.",
  )}`;

  return (
    <Wrapper>
      {/* Pro Dark Navy & Gold Hero Banner */}
      <Box className="heroBanner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heroInner"
        >
          <span className="eyebrow">
            ALL OVER PAKISTAN • ISLAMABAD • RAWALPINDI • LAHORE
          </span>

          <Typography variant="h2" component="h1" className="title">
            Our Domestic & Commercial Staffing Services
          </Typography>

          <Typography className="subtitle">
            Explore our 11 background-verified staffing categories with
            transparent monthly salary packages. Book full-time, part-time, or
            24/7 live-in staff with guaranteed free replacement.
          </Typography>

          {/* Trust Highlights */}
          <Box className="trustRow">
            <div className="trustBadge">
              <VerifiedUserIcon className="trustIcon" />
              <span>CNIC & Police Verified</span>
            </div>
            <div className="trustBadge">
              <AutorenewIcon className="trustIcon" />
              <span>Free Staff Replacement</span>
            </div>
            <div className="trustBadge">
              <SupportAgentIcon className="trustIcon" />
              <span>24/7 Placement Support</span>
            </div>
          </Box>

          {/* Direct CTA Buttons */}
          <Box className="heroCtas">
            <Button
              component="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<WhatsAppIcon />}
              className="waBtn"
            >
              Book Staff on WhatsApp
            </Button>

            <Button
              component="a"
              href="tel:+923477054656"
              variant="outlined"
              startIcon={<CallIcon />}
              className="callBtn"
            >
              Call: +92 347 7054656
            </Button>
          </Box>
        </motion.div>
      </Box>

      {/* Quick Direct Service Links Bar */}
      <Box className="quickLinksBar">
        <Box className="quickLinksInner">
          <Typography className="quickLabel">Quick Jump:</Typography>
          <Box className="chipsList">
            {servicesData.map((srv) => (
              <Chip
                key={srv.id}
                label={srv.name}
                component={Link}
                to={`/services/${srv.slug}`}
                clickable
                className="servicePill"
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* All 11 Services Cards Grid */}
      <Box className="content">
        <ActionAreaCard />
      </Box>

      {/* Service Areas Across Pakistan */}
      <ServiceAreas />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f9fafb;

  /* Hero Section */
  .heroBanner {
    background: linear-gradient(135deg, #071426 0%, #0b2a5b 100%);
    color: #ffffff;
    padding: 75px 20px 65px;
    text-align: center;
    border-bottom: 3px solid #c59b43;
  }

  .heroInner {
    max-width: 880px;
    margin: auto;
  }

  .eyebrow {
    display: inline-block;
    background: rgba(247, 215, 116, 0.12);
    color: #f7d774;
    border: 1px solid rgba(197, 155, 67, 0.6);
    padding: 6px 18px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.6px;
    margin-bottom: 18px;
  }

  .title {
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 16px;
    line-height: 1.25;
  }

  .subtitle {
    color: #cbd5e1;
    font-size: 17px;
    line-height: 1.7;
    max-width: 720px;
    margin: 0 auto 28px;
  }

  .trustRow {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }

  .trustBadge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    color: #f1f5f9;
  }

  .trustIcon {
    color: #f7d774;
    font-size: 20px !important;
  }

  .heroCtas {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .waBtn {
    background: #25d366 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    padding: 12px 28px !important;
    border-radius: 50px !important;
    text-transform: none !important;
    font-size: 15px !important;
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35) !important;
  }

  .waBtn:hover {
    background: #1ebe5d !important;
  }

  .callBtn {
    border-color: #f7d774 !important;
    color: #f7d774 !important;
    font-weight: 700 !important;
    padding: 12px 28px !important;
    border-radius: 50px !important;
    text-transform: none !important;
    font-size: 15px !important;
  }

  .callBtn:hover {
    background: rgba(247, 215, 116, 0.12) !important;
  }

  /* Quick Links Strip */
  .quickLinksBar {
    background: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    padding: 16px 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  }

  .quickLinksInner {
    max-width: 1240px;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .quickLabel {
    font-weight: 700 !important;
    color: #0b2a5b;
    font-size: 14px !important;
    white-space: nowrap;
  }

  .chipsList {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .servicePill {
    background: #f8fafc !important;
    border: 1px solid #cbd5e1 !important;
    color: #1e293b !important;
    font-weight: 600 !important;
    font-size: 13px !important;
    transition: all 0.2s ease !important;
  }

  .servicePill:hover {
    background: #0b2a5b !important;
    color: #f7d774 !important;
    border-color: #0b2a5b !important;
  }

  .content {
    width: 100%;
  }

  @media (max-width: 768px) {
    .heroBanner {
      padding: 55px 16px 45px;
    }

    .title {
      font-size: 1.85rem !important;
    }

    .subtitle {
      font-size: 15px;
    }
  }
`;

export default memo(Services);

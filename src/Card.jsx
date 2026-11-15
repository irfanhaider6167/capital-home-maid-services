import React, { memo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

const WHATSAPP_NUMBER = "923477054656";

const ActionAreaCard = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" className="heading">
          Our Services
        </Typography>

        <Typography className="subHeading">
          Sania Home Maid Services provides verified and trusted domestic staff
          for your family and business needs in Islamabad & Rawalpindi.
        </Typography>
      </motion.div>

      {/* Cards */}
      <Box className="cardContainer">
        {servicesData.map((service, index) => {
          const message = `Hello Sania Home Maid Services, I am interested in hiring a ${service.name} (${service.salary}).`;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <Card className="serviceCard">
                <Link to={`/services/${service.slug}`} className="cardLink">
                  <CardMedia
                    component="img"
                    image={service.imgurl}
                    alt={service.name}
                    className="serviceImage"
                    loading="lazy"
                  />
                </Link>

                <CardContent className="cardContent">
                  <Link to={`/services/${service.slug}`} className="cardLink">
                    <Typography variant="h5" className="serviceTitle">
                      {service.name.toUpperCase()}
                    </Typography>
                  </Link>

                  {/* Salary Tag */}
                  <Box className="salaryBox">
                    <PaymentsIcon className="salaryIcon" />
                    <Typography className="salaryText">
                      {service.salary}
                    </Typography>
                  </Box>

                  <Typography className="serviceDescription">
                    {service.shortDesc}
                  </Typography>

                  <Box className="btnGroup">
                    <Button
                      component={Link}
                      to={`/services/${service.slug}`}
                      variant="outlined"
                      className="detailsBtn"
                    >
                      View Details
                    </Button>

                    <Button
                      component="a"
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        message,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      className="whatsappBtn"
                    >
                      WhatsApp
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Wrapper>
  );
};

export default memo(ActionAreaCard);

/* ================= STYLE ================= */

const Wrapper = styled.section`
  padding: 90px 20px;
  background: linear-gradient(180deg, #f9fafb, #eef2f7);

  .heading {
    text-align: center;
    font-weight: 700;
    color: #111827;
    margin-bottom: 10px;
  }

  .subHeading {
    text-align: center;
    max-width: 700px;
    margin: auto;
    color: #6b7280;
    font-size: 16px;
    margin-bottom: 50px;
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .serviceCard {
    width: 340px;
    border-radius: 18px !important;
    overflow: hidden;
    background: #fff !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08) !important;
    transition: 0.3s ease;
  }

  .cardLink {
    text-decoration: none;
    color: inherit;
  }

  .serviceImage {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    padding: 60px 15px;

    .serviceCard {
      width: 100%;
    }

    .serviceImage {
      height: 180px;
      object-position: center top;
    }
  }

  .cardContent {
    padding: 20px !important;
  }

  .serviceTitle {
    font-weight: 700 !important;
    margin-bottom: 10px !important;
    color: #0b2a5b;
  }

  .salaryBox {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #fef9c3;
    border: 1px solid #facc15;
    padding: 5px 12px;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  .salaryIcon {
    color: #0b2a5b;
    font-size: 18px !important;
  }

  .salaryText {
    font-weight: 700 !important;
    font-size: 14px !important;
    color: #0b2a5b;
  }

  .serviceDescription {
    color: #6b7280;
    margin-bottom: 18px !important;
    line-height: 1.6;
  }

  .btnGroup {
    display: flex;
    gap: 10px;
  }

  .detailsBtn {
    flex: 1;
    border-color: #0b2a5b !important;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .whatsappBtn {
    flex: 1;
    background: #25d366 !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .whatsappBtn:hover {
    background: #1ebe5d !important;
  }
`;

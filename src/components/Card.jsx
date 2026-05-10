import React, { memo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

import styled from "styled-components";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "923177799786";

const services = [
  {
    name: "FILIPINO NANNY",
    description:
      "Professional and caring Filipino nanny services for families and children.",
    imgurl: "/images/finalimg/Filipino Nanny.jpg",
  },
  {
    name: "ENGLISH MAID",
    description:
      "Experienced English-speaking maids for home cleaning and household work.",
    imgurl: "/images/finalimg/English Maid.jpg",
  },
  {
    name: "CHINESE TRANSLATOR",
    description:
      "Professional Chinese translator services for business and communication.",
    imgurl: "/images/finalimg/Chinese Translator.jpg",
  },
  {
    name: "COOK",
    description:
      "Skilled home and office cooks for delicious and hygienic meals.",
    imgurl:
      "https://plus.unsplash.com/premium_photo-1661714089290-ea7791092f78?q=80&w=1457&auto=format&fit=crop",
  },
  {
    name: "DRIVER",
    description:
      "Reliable and professional drivers for personal and family transport.",
    imgurl:
      "https://plus.unsplash.com/premium_photo-1681821679118-bb069eeb2d98?q=80&w=1470&auto=format&fit=crop",
  },
  {
    name: "BABY CARE",
    description:
      "Trusted baby care and babysitting services with trained staff.",
    imgurl:
      "https://plus.unsplash.com/premium_photo-1682094262987-86ac9b94a500?q=80&w=1470&auto=format&fit=crop",
  },
  {
    name: "CLEANER",
    description:
      "Professional cleaning and housekeeping staff for homes and offices.",
    imgurl:
      "https://plus.unsplash.com/premium_photo-1661721750123-e5b654d0ee4a?q=80&w=1470&auto=format&fit=crop",
  },
  {
    name: "SECURITY GUARD",
    description:
      "Well-trained security guards for safety and property protection.",
    imgurl:
      "https://plus.unsplash.com/premium_photo-1682125939509-03aa8ae4b587?q=80&w=1470&auto=format&fit=crop",
  },
  {
    name: "NURSE",
    description:
      "Professional nursing and patient care services at your doorstep.",
    imgurl:
      "https://plus.unsplash.com/premium_photo-1673958771843-12c73b278bd0?q=80&w=1470&auto=format&fit=crop",
  },
];

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
          Trusted home maid services for your family and business needs.
        </Typography>
      </motion.div>

      {/* Cards */}
      <Box className="cardContainer">
        {services.map((service, index) => {
          const message = `Hi, I am interested in ${service.name} service`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <Card className="serviceCard">
                <CardMedia
                  component="img"
                  image={service.imgurl}
                  alt={service.name}
                  className="serviceImage"
                  loading="lazy"
                />

                <CardContent className="cardContent">
                  <Typography variant="h5" className="serviceTitle">
                    {service.name}
                  </Typography>

                  <Typography className="serviceDescription">
                    {service.description}
                  </Typography>

                  <Button
                    component="a"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      message,
                    )}`}
                    target="_blank"
                    variant="contained"
                    className="whatsappBtn"
                  >
                    WhatsApp Now
                  </Button>
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

  /* ✅ IMAGE FIX */
  .serviceImage {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
  }

  /* ✅ MOBILE FIX */
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
    color: #111827;
  }

  .serviceDescription {
    color: #6b7280;
    margin-bottom: 15px !important;
    line-height: 1.6;
  }

  .whatsappBtn {
    background: #25d366 !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .whatsappBtn:hover {
    background: #1ebe5d !important;
  }
`;

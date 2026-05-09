import React, { memo } from "react";

import { Card, CardContent, Typography, Box } from "@mui/material";

import styled from "styled-components";

import { motion } from "framer-motion";

// Icons
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SecurityIcon from "@mui/icons-material/Security";
import SavingsIcon from "@mui/icons-material/Savings";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const data = [
  {
    heading: "Expert Staff",
    text: "Our trained and experienced staff provide professional home maid services with care and responsibility.",
    icon: <WorkspacePremiumIcon />,
  },

  {
    heading: "Secure Services",
    text: "We provide trusted, verified, and reliable domestic staff for your safety and peace of mind.",
    icon: <SecurityIcon />,
  },

  {
    heading: "Affordable Pricing",
    text: "Get reliable and affordable maid services in Pakistan at competitive rates.",
    icon: <SavingsIcon />,
  },

  {
    heading: "Always On Time",
    text: "We value punctuality and ensure timely service for every client and household.",
    icon: <AccessTimeFilledIcon />,
  },
];

const BasicCard = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <motion.div
        className="headingContainer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h3" className="heading">
          Why Choose Us
        </Typography>

        <Typography className="subHeading">
          We provide professional, trusted, and affordable home maid services
          with complete customer satisfaction.
        </Typography>
      </motion.div>

      {/* Cards */}
      <Box className="cardContainer">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <Card className="card">
              <CardContent>
                {/* Icon */}
                <div className="iconBox">{item.icon}</div>

                {/* Title */}
                <Typography variant="h5" className="cardHeading">
                  {item.heading}
                </Typography>

                {/* Text */}
                <Typography className="cardText">{item.text}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Wrapper>
  );
};

export default memo(BasicCard);

const Wrapper = styled.section`
  padding: 90px 20px;

  background: linear-gradient(180deg, #ffffff, #f3f4f6);

  .headingContainer {
    text-align: center;

    max-width: 750px;

    margin: auto;

    margin-bottom: 60px;
  }

  .heading {
    font-weight: 700;

    color: #111827;

    margin-bottom: 16px;
  }

  .subHeading {
    color: #6b7280;

    line-height: 1.8;

    font-size: 17px;
  }

  .cardContainer {
    display: flex;

    justify-content: center;

    gap: 2rem;

    flex-wrap: wrap;
  }

  .card {
    width: 290px;

    padding: 30px 20px;

    border-radius: 24px !important;

    background: white !important;

    text-align: center;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;

    transition: 0.3s ease !important;

    overflow: hidden;

    position: relative;
  }

  .card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 5px;

    background: linear-gradient(90deg, #25d366, #16a34a);
  }

  .iconBox {
    width: 75px;
    height: 75px;

    margin: auto;

    margin-bottom: 22px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(135deg, #25d366, #16a34a);

    color: white;

    font-size: 2rem;

    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.25);
  }

  .cardHeading {
    font-weight: 700 !important;

    color: #111827;

    margin-bottom: 16px !important;
  }

  .cardText {
    color: #6b7280;

    line-height: 1.8;

    font-size: 15px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding: 70px 15px;

    .heading {
      font-size: 2rem !important;
    }

    .subHeading {
      font-size: 15px;
    }

    .card {
      width: 100%;
    }
  }
`;

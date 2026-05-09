import React, { useState, memo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { motion } from "framer-motion";

const faqData = [
  {
    q: "Is Capital Home Maid Services registered?",
    a: "Yes, Capital Home Maid Services is a registered and trusted company providing services since 2019.",
  },
  {
    q: "What is the registration number of Capital Home Maid Services?",
    a: "The registration number of Capital Home Maid Services is 3730139464981.",
  },
  {
    q: "Who is the owner of Capital Home Maid Services?",
    a: "IMRAN HAIDER BHATTI is the owner of Capital Home Maid Services.",
  },
  {
    q: "What is the response time of your services?",
    a: "Our response time is within 24 hours for all service requests and inquiries.",
  },
  {
    q: "What is the office address of Capital Home Maid Services?",
    a: "G-11/2 Service Road, Islamabad.",
  },
];

const Qa = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        <Typography variant="h4">Frequently Asked Questions</Typography>
      </motion.div>

      {/* FAQ */}
      <div className="faqs">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              className="accordion"
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="question">{item.q}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="answer">{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 60px 20px;
  background: #f9fafb;
  color: #374151;

  .heading {
    text-align: center;
    margin-bottom: 40px;
  }

  h4 {
    font-weight: 700;
    color: #111827;
  }

  .faqs {
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .accordion {
    border-radius: 12px !important;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }

  .question {
    font-weight: 600;
    color: #374151;
  }

  .answer {
    color: #6b7280;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .faqs {
      width: 100%;
    }
  }
`;
export default memo(Qa);

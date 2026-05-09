import React, { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

const FloatingButtons = () => {
  return (
    <Wrapper>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/923254708027"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="whatsapp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 180,
        }}
        whileHover={{
          scale: 1.12,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <WhatsAppIcon className="icon" />
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+923254708027"
        aria-label="Call Now"
        className="call"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 180,
        }}
        whileHover={{
          scale: 1.12,
          rotate: -8,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <CallIcon className="icon" />
      </motion.a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;

  right: 18px;
  bottom: 20px;

  z-index: 9999;

  display: flex;
  flex-direction: column;

  gap: 14px;

  .whatsapp,
  .call {
    width: 58px;
    height: 58px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);

    animation: pulse 2s infinite;
  }

  .whatsapp {
    background: #25d366;
  }

  .call {
    background: #0ea5e9;
  }

  .icon {
    color: white;
    font-size: 30px !important;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
    }

    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
    }

    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  @media (max-width: 768px) {
    right: 14px;
    bottom: 14px;

    .whatsapp,
    .call {
      width: 52px;
      height: 52px;
    }

    .icon {
      font-size: 26px !important;
    }
  }
`;

export default memo(FloatingButtons);

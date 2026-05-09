import React, { memo } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import styled from "styled-components";
import { motion } from "framer-motion";

const images = [
  {
    url: "/images/finalimg/Maid.jpg",
    text: "WELCOME TO CAPITAL HOME MAID SERVICES",
    category: "MAID",
  },
  {
    url: "/images/finalimg/Couple Maid (2).jpg",
    text: "PROFESSIONAL & TRUSTED HOME STAFF",
    category: "COUPLE MAID",
  },
  {
    url: "/images/finalimg/Cook.jpg",
    text: "EXPERIENCED HOME & OFFICE COOKS",
    category: "COOK",
  },
  {
    url: "/images/finalimg/Female Chef.jpg",
    text: "QUALITY DOMESTIC SERVICES",
    category: "FEMALE CHEF",
  },
  {
    url: "/images/finalimg/Driver (2).jpg",
    text: "RELIABLE DRIVER SERVICES",
    category: "DRIVER",
  },
  {
    url: "/images/finalimg/Baby Sitter.jpg",
    text: "SAFE & PROFESSIONAL BABY CARE",
    category: "BABY CARE",
  },
  {
    url: "/images/finalimg/Nurse.jpg",
    text: "PROFESSIONAL NURSING SERVICES",
    category: "NURSE",
  },
];

const Slider = () => {
  return (
    <Wrapper>
      <Box className="sliderContainer">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          loop={true}
          speed={1200}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              {/* Image */}
              <motion.img
                src={item.url}
                alt={item.category}
                className="sliderImage"
                loading={index === 0 ? "eager" : "lazy"}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 6,
                  ease: "easeOut",
                }}
              />

              {/* Overlay */}
              <div className="overlay"></div>

              {/* Content */}
              <motion.div
                className="content"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
              >
                <Typography variant="h2" className="sliderText">
                  {item.text}
                </Typography>

                {/* Category */}
                <motion.div
                  className="category"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  <Typography variant="h5">{item.category}</Typography>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous Button */}
        <IconButton className="prev-btn navBtn">
          <ArrowBackIos />
        </IconButton>

        {/* Next Button */}
        <IconButton className="next-btn navBtn">
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sliderContainer {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .sliderImage {
    width: 100%;
    height: 88vh;
    object-fit: cover;
    display: block;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  .content {
    position: absolute;
    inset: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    padding: 20px;
  }

  .sliderText {
    color: white;
    font-weight: 700;
    max-width: 950px;
    line-height: 1.3;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    margin-bottom: 25px;
  }

  .category {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 12px 28px;
    border-radius: 50px;
    backdrop-filter: blur(8px);

    animation: float 3s ease-in-out infinite;
  }

  .navBtn {
    position: absolute !important;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;

    background: rgba(255, 255, 255, 0.9) !important;

    transition: 0.3s ease !important;
  }

  .navBtn:hover {
    transform: translateY(-50%) scale(1.15);
    background: #25d366 !important;
    color: white;
  }

  .prev-btn {
    left: 15px;
  }

  .next-btn {
    right: 15px;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-8px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    .sliderImage {
      height: 55vh;
      object-position: center;
    }

    .sliderText {
      font-size: 1.6rem !important;
      line-height: 1.5;
    }

    .category {
      padding: 10px 20px;
    }

    .category h5 {
      font-size: 16px;
    }

    .navBtn {
      width: 40px;
      height: 40px;
    }
  }
`;

export default memo(Slider);

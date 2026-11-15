import React, { memo } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  WhatsApp,
} from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styled from "styled-components";

const WHATSAPP_NUMBER = "923477054656";

const slidesData = [
  {
    url: "/images/service/house-maid.webp",
    badge: "CLEAN • RELIABLE • TRUSTED",
    text: "WELCOME TO SANIA HOME MAID SERVICES",
    subtext:
      "CNIC-verified house maids, house keepers & domestic staff in Islamabad & Rawalpindi.",
    slug: "/services/house-maid",
  },
  {
    url: "/images/service/couple.webp",
    badge: "VERIFIED DOMESTIC COUPLES",
    text: "COMPLETE HOUSEHOLD MANAGEMENT",
    subtext:
      "Experienced husband-and-wife domestic couples for homes, villas & farmhouses.",
    slug: "/services/couple",
  },
  {
    url: "/images/service/cook.webp",
    badge: "HYGIENIC HOME COOKING",
    text: "EXPERIENCED HOME & OFFICE COOKS",
    subtext:
      "Skilled cooks & kitchen helpers for fresh, healthy daily family meals.",
    slug: "/services/cook",
  },
  {
    url: "/images/service/chef.webp",
    badge: "MULTI-CUISINE CULINARY EXPERTS",
    text: "PROFESSIONAL CHEF SERVICES",
    subtext:
      "Pakistani, Continental & Chinese cuisine specialists for home & private events.",
    slug: "/services/chef",
  },
  {
    url: "/images/service/driver.webp",
    badge: "SAFE & PUNCTUAL STAFF",
    text: "LICENSED DRIVERS & SECURITY GUARDS",
    subtext:
      "Background-verified family drivers and trained residential security guards.",
    slug: "/services/driver",
  },
  {
    url: "/images/service/babysitter.webp",
    badge: "LOVING & ATTENTIVE CHILD CARE",
    text: "TRUSTED BABYSITTER & NANNY SERVICES",
    subtext:
      "Caring, experienced female nannies for newborns, infants & school-going kids.",
    slug: "/services/babysitter-nanny",
  },
  {
    url: "/images/service/nurse.webp",
    badge: "24/7 MEDICAL & ELDERLY CARE",
    text: "PROFESSIONAL HOME NURSING & PATIENT CARE",
    subtext:
      "Qualified male & female nurses and patient care attendants at your doorstep.",
    slug: "/services/nurse",
  },
];

const Slider = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Sania Home Maid Services, I would like to hire verified domestic staff in Islamabad/Rawalpindi.",
  )}`;

  return (
    <Wrapper>
      <Box className="sliderContainer">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slideInner">
                {/* Continuous Zoom-In Image */}
                <img
                  src={item.url}
                  alt={`${item.badge} - Sania Home Maid Services`}
                  className="sliderImage"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Cinematic Gradient Overlay */}
                <div className="overlay"></div>

                {/* Animated Slide Content */}
                <div className="content">
                  <span className="badgePill">{item.badge}</span>

                  <Typography
                    variant="h2"
                    component={index === 0 ? "h1" : "h2"}
                    className="sliderText"
                  >
                    {item.text}
                  </Typography>

                  <Typography className="sliderSubtext">
                    {item.subtext}
                  </Typography>

                  <Box className="ctaGroup">
                    <Button
                      component={Link}
                      to={item.slug}
                      variant="contained"
                      className="primaryBtn"
                    >
                      Explore Service
                    </Button>

                    <Button
                      component="a"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<WhatsApp />}
                      className="waBtn"
                    >
                      Book on WhatsApp
                    </Button>
                  </Box>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <IconButton className="prev-btn navBtn" aria-label="Previous slide">
          <ArrowBackIosNew fontSize="small" />
        </IconButton>

        <IconButton className="next-btn navBtn" aria-label="Next slide">
          <ArrowForwardIos fontSize="small" />
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
    background: #071426;
  }

  .slideInner {
    position: relative;
    width: 100%;
    height: 88vh;
    overflow: hidden;
  }

  .sliderImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1);
    will-change: transform;
  }

  /* Smooth Ken Burns Zoom-In on Active Slide */
  .swiper-slide-active .sliderImage {
    animation: kenBurnsZoom 7s ease-out forwards;
  }

  @keyframes kenBurnsZoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.14);
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(7, 20, 38, 0.55) 0%,
      rgba(7, 20, 38, 0.45) 50%,
      rgba(7, 20, 38, 0.8) 100%
    );
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
    padding: 20px 60px;
  }

  .badgePill {
    background: rgba(11, 42, 91, 0.85);
    color: #f7d774;
    border: 1px solid rgba(197, 155, 67, 0.75);
    padding: 8px 22px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 18px;
    backdrop-filter: blur(6px);
    opacity: 0;
    transform: translateY(25px);
  }

  .sliderText {
    color: #ffffff;
    font-weight: 800;
    max-width: 920px;
    line-height: 1.25;
    text-shadow: 0 6px 25px rgba(0, 0, 0, 0.65);
    margin-bottom: 16px;
    opacity: 0;
    transform: translateY(30px);
  }

  .sliderSubtext {
    color: #e5e7eb;
    max-width: 680px;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    opacity: 0;
    transform: translateY(30px);
  }

  .ctaGroup {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    transform: translateY(30px);
  }

  /* Staggered Entrance Animations when Slide Becomes Active */
  .swiper-slide-active .badgePill {
    animation: slideFadeUp 0.7s ease-out 0.15s forwards;
  }

  .swiper-slide-active .sliderText {
    animation: slideFadeUp 0.75s ease-out 0.3s forwards;
  }

  .swiper-slide-active .sliderSubtext {
    animation: slideFadeUp 0.75s ease-out 0.45s forwards;
  }

  .swiper-slide-active .ctaGroup {
    animation: slideFadeUp 0.75s ease-out 0.6s forwards;
  }

  @keyframes slideFadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .primaryBtn {
    background: #c59b43 !important;
    color: #071426 !important;
    font-weight: 700 !important;
    padding: 12px 28px !important;
    border-radius: 50px !important;
    text-transform: none !important;
    font-size: 15px !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
    transition: 0.3s ease !important;
  }

  .primaryBtn:hover {
    background: #f7d774 !important;
    transform: translateY(-2px);
  }

  .waBtn {
    background: #25d366 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    padding: 12px 28px !important;
    border-radius: 50px !important;
    text-transform: none !important;
    font-size: 15px !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
    transition: 0.3s ease !important;
  }

  .waBtn:hover {
    background: #1ebe5d !important;
    transform: translateY(-2px);
  }

  .navBtn {
    position: absolute !important;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 48px;
    height: 48px;
    background: rgba(7, 20, 38, 0.65) !important;
    color: #f7d774 !important;
    border: 1px solid rgba(247, 215, 116, 0.4) !important;
    backdrop-filter: blur(6px);
    transition: 0.3s ease !important;
  }

  .navBtn:hover {
    transform: translateY(-50%) scale(1.1);
    background: #c59b43 !important;
    color: #071426 !important;
  }

  .prev-btn {
    left: 20px;
  }

  .next-btn {
    right: 20px;
  }

  /* Pagination Bullets */
  .swiper-pagination {
    bottom: 24px !important;
    z-index: 10;
  }

  .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    background: rgba(255, 255, 255, 0.65);
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 8px;
    background: #f7d774;
  }

  @media (max-width: 768px) {
    .slideInner {
      height: 64vh;
    }

    .content {
      padding: 20px 24px;
    }

    .badgePill {
      font-size: 11px;
      padding: 6px 14px;
      letter-spacing: 1.2px;
      margin-bottom: 12px;
    }

    .sliderText {
      font-size: 1.55rem !important;
      line-height: 1.35;
      margin-bottom: 10px;
    }

    .sliderSubtext {
      font-size: 14px;
      margin-bottom: 20px;
    }

    .primaryBtn,
    .waBtn {
      padding: 9px 18px !important;
      font-size: 13px !important;
    }

    .navBtn {
      width: 36px;
      height: 36px;
    }

    .prev-btn {
      left: 8px;
    }

    .next-btn {
      right: 8px;
    }
  }
`;

export default memo(Slider);

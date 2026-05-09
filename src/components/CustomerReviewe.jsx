import React, { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";

import { Typography, Box } from "@mui/material";

import { motion } from "framer-motion";

// Reviews Data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Excellent maid service with professional and trusted staff.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },

  {
    id: 2,
    name: "Jane Smith",
    review: "Very satisfied with the cleaning and baby care services.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },

  {
    id: 3,
    name: "Alex Johnson",
    review: "Highly recommended for home staff and nursing services.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },

  {
    id: 4,
    name: "Samee Ullah",
    review: "Professional team with fast response and excellent support.",
    image: "/images/finalimg/samee.jpg",
  },
];

const ReviewSlider = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
      >
        <Typography variant="h3" className="mainHeading">
          Our Testimonials
        </Typography>

        <Typography className="subHeading">
          We are grateful for the trust and positive feedback from our valued
          clients.
        </Typography>
      </motion.div>

      {/* Slider */}
      <Box className="reviewSlider">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id}>
              <motion.div
                className="reviewCard"
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
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                {/* Avatar */}
                <div className="avatarContainer">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="avatar"
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <Typography variant="h6" className="reviewName">
                  {review.name}
                </Typography>

                {/* Review */}
                <Typography className="reviewText">{review.review}</Typography>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Wrapper>
  );
};

export default memo(ReviewSlider);

const Wrapper = styled.section`
  padding: 90px 20px;

  background:
    linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=1400");

  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .heading {
    text-align: center;
    max-width: 800px;
    margin: auto;
    margin-bottom: 60px;
  }

  .mainHeading {
    color: white;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .subHeading {
    color: #d1d5db;
    font-size: 17px;
    line-height: 1.7;
  }

  .reviewSlider {
    width: 92%;
    margin: auto;
  }

  .reviewCard {
    background: rgba(255, 255, 255, 0.97);

    border-radius: 24px;

    padding: 35px 25px;

    text-align: center;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

    transition: 0.3s ease;

    min-height: 370px;
  }

  .avatarContainer {
    margin-bottom: 20px;
  }

  .avatar {
    width: 110px;
    height: 110px;

    border-radius: 50%;

    object-fit: cover;

    border: 5px solid #25d366;

    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
  }

  .reviewName {
    font-weight: 700;
    color: #111827;

    margin-bottom: 14px;
  }

  .reviewText {
    color: #4b5563;

    line-height: 1.8;

    font-size: 15px;
  }

  /* SWIPER */
  .swiper {
    padding-bottom: 60px;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: #25d366;
    opacity: 1;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding: 70px 15px;

    .mainHeading {
      font-size: 2rem !important;
    }

    .subHeading {
      font-size: 15px;
    }

    .reviewSlider {
      width: 100%;
    }

    .reviewCard {
      padding: 30px 20px;
      min-height: auto;
    }

    .avatar {
      width: 90px;
      height: 90px;
    }
  }
`;

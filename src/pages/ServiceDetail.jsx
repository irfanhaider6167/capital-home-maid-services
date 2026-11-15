import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Chip,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "styled-components";
import { servicesData } from "../data/servicesData";

const WHATSAPP_NUMBER = "923477054656";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = service.title;
    }
  }, [service, slug]);

  if (!service) {
    return (
      <Wrapper>
        <Box className="notFound">
          <Typography variant="h4">Service Not Found</Typography>
          <Button
            component={Link}
            to="/services"
            variant="contained"
            sx={{ mt: 2 }}
          >
            View All Services
          </Button>
        </Box>
      </Wrapper>
    );
  }

  const relatedServices = servicesData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Hello Sania Home Maid Services, I want to hire a ${service.name} (${service.salary}) in Islamabad/Rawalpindi.`,
  );

  return (
    <Wrapper>
      <Box className="container">
        <Button
          component={Link}
          to="/services"
          startIcon={<ArrowBackIcon />}
          className="backBtn"
        >
          Back to All Services
        </Button>

        <Box className="grid">
          {/* Service Image */}
          <img
            src={service.imgurl}
            alt={`${service.name} - Sania Home Maid Services`}
            className="heroImg"
          />

          {/* Service Info */}
          <Box className="info">
            <Chip
              label="CNIC Verified Staff • Islamabad & Rawalpindi"
              className="badge"
            />
            <Typography variant="h3" component="h1" className="title">
              {service.name} Services
            </Typography>

            {/* Salary & Shift Box */}
            <Box className="salaryCard">
              <Box className="salaryItem">
                <PaymentsIcon className="iconGold" />
                <div>
                  <Typography className="label">Estimated Salary</Typography>
                  <Typography className="value">{service.salary}</Typography>
                </div>
              </Box>

              <Box className="salaryItem">
                <AccessTimeIcon className="iconGold" />
                <div>
                  <Typography className="label">Duty Timing</Typography>
                  <Typography className="value">{service.shift}</Typography>
                </div>
              </Box>
            </Box>

            <Typography className="desc">{service.fullDesc}</Typography>

            <Typography variant="h6" className="subTitle">
              Key Responsibilities & Features:
            </Typography>

            <ul className="dutiesList">
              {service.duties.map((duty, i) => (
                <li key={i}>
                  <CheckCircleIcon className="checkIcon" />
                  <span>{duty}</span>
                </li>
              ))}
            </ul>

            {/* Direct Action Buttons */}
            <Box className="actions">
              <Button
                component="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<WhatsAppIcon />}
                className="waBtn"
              >
                Book on WhatsApp
              </Button>

              <Button
                component="a"
                href="tel:+923477054656"
                variant="outlined"
                startIcon={<CallIcon />}
                className="callBtn"
              >
                Call: 0347-7054656
              </Button>
              <Typography sx={{ mt: 2.5, fontSize: "14px", color: "#4b5563" }}>
                <strong>Available Areas:</strong> All Over Pakistan — Specially
                Islamabad, Rawalpindi & Lahore (DHA, Bahria Town, F-Sectors,
                Gulberg, Model Town & more).
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Related Services Section */}
        <Box className="relatedSection">
          <Typography variant="h4" component="h2" className="relatedHeading">
            Related Services
          </Typography>

          <Box className="relatedGrid">
            {relatedServices.map((item) => (
              <Card key={item.id} className="relatedCard">
                <Link to={`/services/${item.slug}`} className="cardLink">
                  <CardMedia
                    component="img"
                    image={item.imgurl}
                    alt={`${item.name} - Sania Home Maid Services`}
                    className="relatedImg"
                    loading="lazy"
                  />
                </Link>

                <CardContent className="relatedContent">
                  <Link to={`/services/${item.slug}`} className="cardLink">
                    <Typography variant="h6" className="relatedTitle">
                      {item.name}
                    </Typography>
                  </Link>

                  <Typography className="relatedSalary">
                    {item.salary}
                  </Typography>

                  <Typography className="relatedDesc">
                    {item.shortDesc}
                  </Typography>

                  <Button
                    component={Link}
                    to={`/services/${item.slug}`}
                    variant="outlined"
                    fullWidth
                    className="relatedBtn"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default ServiceDetail;

const Wrapper = styled.section`
  padding: 60px 20px;
  background: #f9fafb;

  .container {
    max-width: 1100px;
    margin: auto;
  }

  .backBtn {
    margin-bottom: 25px;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    text-transform: none !important;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 40px;
    background: #ffffff;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }

  .heroImg {
    width: 100%;
    height: 430px;
    object-fit: cover;
    border-radius: 16px;
  }

  .badge {
    background: #e0f2fe !important;
    color: #0b2a5b !important;
    font-weight: 600;
    margin-bottom: 14px;
  }

  .title {
    font-weight: 700;
    color: #0b2a5b;
    margin-bottom: 16px;
  }

  .salaryCard {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    background: #071426;
    color: #ffffff;
    padding: 16px 20px;
    border-radius: 14px;
    border-left: 4px solid #c59b43;
    margin-bottom: 20px;
  }

  .salaryItem {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 180px;
  }

  .iconGold {
    color: #f7d774;
    font-size: 28px !important;
  }

  .label {
    font-size: 12px !important;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .value {
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #f7d774;
  }

  .desc {
    color: #4b5563;
    line-height: 1.8;
    margin-bottom: 22px;
    font-size: 16px;
  }

  .subTitle {
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
  }

  .dutiesList {
    list-style: none;
    padding: 0;
    margin: 0 0 28px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dutiesList li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #374151;
    font-size: 15px;
  }

  .checkIcon {
    color: #25d366;
    font-size: 20px !important;
  }

  .actions {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .waBtn {
    background: #25d366 !important;
    font-weight: 600 !important;
    padding: 12px 24px !important;
    border-radius: 10px !important;
    text-transform: none !important;
  }

  .callBtn {
    border-color: #0b2a5b !important;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    padding: 12px 24px !important;
    border-radius: 10px !important;
    text-transform: none !important;
  }

  /* Related Services Styles */
  .relatedSection {
    margin-top: 65px;
  }

  .relatedHeading {
    font-weight: 700;
    color: #0b2a5b;
    margin-bottom: 25px;
    text-align: center;
  }

  .relatedGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .relatedCard {
    border-radius: 16px !important;
    overflow: hidden;
    background: #ffffff !important;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06) !important;
    transition: transform 0.25s ease;
    display: flex;
    flex-direction: column;
  }

  .relatedCard:hover {
    transform: translateY(-6px);
  }

  .cardLink {
    text-decoration: none;
    color: inherit;
  }

  .relatedImg {
    width: 100%;
    height: 185px;
    object-fit: cover;
  }

  .relatedContent {
    padding: 18px !important;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .relatedTitle {
    font-weight: 700 !important;
    color: #0b2a5b;
    margin-bottom: 6px !important;
  }

  .relatedSalary {
    font-size: 13px !important;
    font-weight: 700 !important;
    color: #92400e;
    background: #fef9c3;
    display: inline-block;
    padding: 3px 10px;
    border-radius: 6px;
    margin-bottom: 10px !important;
    align-self: flex-start;
  }

  .relatedDesc {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px !important;
    flex-grow: 1;
  }

  .relatedBtn {
    border-color: #0b2a5b !important;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .notFound {
    text-align: center;
    padding: 80px 20px;
  }

  @media (max-width: 850px) {
    .grid {
      grid-template-columns: 1fr;
      padding: 20px;
    }

    .heroImg {
      height: 260px;
    }

    .title {
      font-size: 1.8rem !important;
    }

    .relatedGrid {
      grid-template-columns: 1fr;
    }
  }
`;

import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Box, TextField, MenuItem, Button } from "@mui/material";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import ServiceAreas from "../components/ServiceAreas";

const WHATSAPP_NUMBER = "923477054656";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Islamabad",
    service: "House Maid",
    details: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Contact Us | Sania Home Maid Services Islamabad, Rawalpindi & Lahore";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Sania Home Maid Services,%0A*Name:* ${
      formData.name || "Not specified"
    }%0A*Phone:* ${formData.phone || "Not specified"}%0A*City / Area:* ${
      formData.city
    }%0A*Required Service:* ${formData.service}%0A*Details:* ${
      formData.details || "Please share available staff details."
    }`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <>
      <Wrapper>
        {/* Heading */}
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" component="h1">
            Contact Us
          </Typography>

          <Typography className="subtext">
            Contact Sania Home Maid Services anytime for CNIC-verified maids,
            cooks, nurses, babysitters, drivers, and security guards across
            Pakistan — specially Islamabad, Rawalpindi & Lahore.
          </Typography>
        </motion.div>

        {/* Contact Info Cards */}
        <Box className="contact">
          {/* WHATSAPP */}
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello Sania Home Maid Services, I want to hire domestic staff.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -6 }}
          >
            <WhatsAppIcon className="icon" />
            <Typography className="label">WhatsApp 24/7</Typography>
            <Typography className="value">+92 347 7054656</Typography>
          </motion.a>

          {/* CALL */}
          <motion.a
            href="tel:+923477054656"
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -6 }}
          >
            <AddIcCallSharpIcon className="icon" />
            <Typography className="label">Call Directly</Typography>
            <Typography className="value">+92 347 7054656</Typography>
          </motion.a>

          {/* EMAIL */}
          <motion.a
            href="mailto:saniahomemaidservices@gmail.com?subject=Service%20Inquiry&body=Hello%20Sania%20Home%20Maid%20Services,%20I%20want%20to%20ask%20about%20your%20services."
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -6 }}
          >
            <EmailSharpIcon className="icon" />
            <Typography className="label">Email Us</Typography>
            <Typography className="value">
              saniahomemaidservices@gmail.com
            </Typography>
          </motion.a>

          {/* LOCATION */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=F-11%2F1+Street+No.+3+Service+Road+Islamabad+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -6 }}
          >
            <LocationOnSharpIcon className="icon" />
            <Typography className="label">Head Office</Typography>
            <Typography className="value">
              F-11/1, Street No. 3, Service Road, Islamabad, Pakistan
            </Typography>
          </motion.a>
        </Box>

        {/* Quick Staff Booking Form */}
        <Box className="formSection">
          <Typography variant="h4" component="h2" className="formHeading">
            Quick Staff Booking Request
          </Typography>
          <Typography className="formSub">
            Fill in your requirement below to send an instant booking inquiry on
            WhatsApp.
          </Typography>

          <form onSubmit={handleWhatsAppSubmit} className="bookingForm">
            <Box className="formRow">
              <TextField
                label="Your Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Phone / WhatsApp Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Box>

            <Box className="formRow">
              <TextField
                select
                label="Select City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Islamabad">Islamabad</MenuItem>
                <MenuItem value="Rawalpindi">Rawalpindi</MenuItem>
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="Karachi">Karachi</MenuItem>
                <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                <MenuItem value="Multan">Multan</MenuItem>
                <MenuItem value="Peshawar">Peshawar</MenuItem>
                <MenuItem value="Other City (All Pakistan)">
                  Other City (All Pakistan)
                </MenuItem>
              </TextField>

              <TextField
                select
                label="Select Required Service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                fullWidth
              >
                {servicesData.map((srv) => (
                  <MenuItem key={srv.id} value={`${srv.name} (${srv.salary})`}>
                    {srv.name} — {srv.salary}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <TextField
              label="Sector / Society & Duty Timing (e.g. F-11, 24-Hour Live-In or Day Shift)"
              name="details"
              value={formData.details}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              className="submitBtn"
            >
              Send Booking Inquiry on WhatsApp
            </Button>
          </form>
        </Box>
      </Wrapper>

      {/* Service Areas Section */}
      <ServiceAreas />
    </>
  );
};

export default memo(Contact);

/* ================= STYLE ================= */

const Wrapper = styled.section`
  padding: 75px 20px;
  background: linear-gradient(135deg, #f9fafb, #eef2f3);
  color: #374151;

  .heading {
    text-align: center;
    max-width: 750px;
    margin: auto;
  }

  h1 {
    font-weight: 700;
    color: #0b2a5b;
    margin-bottom: 12px;
  }

  .subtext {
    color: #6b7280;
    line-height: 1.6;
  }

  .contact {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    width: 270px;
    background: white;
    padding: 28px 18px;
    border-radius: 18px;
    text-align: center;
    border-top: 4px solid #0b2a5b;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    text-decoration: none;
    color: inherit;
    transition: 0.3s ease;
  }

  .icon {
    font-size: 42px;
    color: #25d366;
    margin-bottom: 12px;
  }

  .label {
    font-weight: 700;
    margin-bottom: 6px;
    color: #0b2a5b;
  }

  .value {
    color: #4b5563;
    font-size: 14.5px;
    word-break: break-word;
  }

  /* Booking Form */
  .formSection {
    max-width: 820px;
    margin: 65px auto 0;
    background: #ffffff;
    padding: 38px;
    border-radius: 20px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
    border-top: 4px solid #c59b43;
  }

  .formHeading {
    text-align: center;
    font-weight: 700;
    color: #0b2a5b;
    margin-bottom: 8px;
  }

  .formSub {
    text-align: center;
    color: #6b7280;
    margin-bottom: 28px;
    font-size: 15px;
  }

  .bookingForm {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .formRow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .submitBtn {
    background: #25d366 !important;
    font-weight: 700 !important;
    padding: 13px 24px !important;
    border-radius: 10px !important;
    text-transform: none !important;
    font-size: 16px !important;
  }

  .submitBtn:hover {
    background: #1ebe5d !important;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
    }

    .formSection {
      padding: 24px 18px;
    }

    .formRow {
      grid-template-columns: 1fr;
    }
  }
`;

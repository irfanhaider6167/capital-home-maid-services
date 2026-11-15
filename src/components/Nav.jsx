import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { servicesData } from "../data/servicesData";

const WHATSAPP_NUMBER = "923477054656";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handledrawer = () => setMenu(!menu);
  const openDropdown = Boolean(anchorEl);

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setAnchorEl(null);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Sania Home Maid Services, I want to hire verified domestic staff in Islamabad/Rawalpindi.",
  )}`;

  const drawer = (
    <Box className="drawerRoot">
      {/* TOP BRAND HEADER IN DRAWER */}
      <Box className="drawerHeader">
        <img
          src="/images/finalimg/logo.svg"
          alt="Sania Home Maid Services Logo"
          className="logodrawer"
        />
        <Typography className="drawerBrand">
          Sania Home Maid Services
        </Typography>
        <Typography className="drawerTagline">
          CLEAN • RELIABLE • TRUSTED
        </Typography>

        <IconButton
          onClick={handledrawer}
          aria-label="Close menu"
          className="closeBtn"
        >
          <HighlightOffIcon sx={{ fontSize: "34px", color: "#f7d774" }} />
        </IconButton>
      </Box>

      {/* MOBILE NAVIGATION LINKS */}
      <ul className="mobileNavList">
        <li>
          <NavLink to="/" onClick={handledrawer}>
            Home
          </NavLink>
        </li>
        <Divider className="navDivider" />

        <li>
          <NavLink to="/about" onClick={handledrawer}>
            About Us
          </NavLink>
        </li>
        <Divider className="navDivider" />

        {/* Expandable 11 Services List */}
        <li>
          <button
            type="button"
            className="mobileServicesToggle"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            <span>Services (11)</span>
            <KeyboardArrowDownIcon
              sx={{
                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)",
                transition: "0.3s",
                color: "#f7d774",
              }}
            />
          </button>

          {mobileServicesOpen && (
            <Box className="mobileSubList">
              <NavLink
                to="/services"
                onClick={handledrawer}
                className="allServicesMobile"
              >
                View All Services & Salaries →
              </NavLink>
              {servicesData.map((service) => (
                <NavLink
                  key={service.id}
                  to={`/services/${service.slug}`}
                  onClick={handledrawer}
                  className="subServiceLink"
                >
                  <span>{service.name}</span>
                  <small>{service.salary}</small>
                </NavLink>
              ))}
            </Box>
          )}
        </li>
        <Divider className="navDivider" />

        <Divider className="navDivider" />

        <li>
          <NavLink to="/contact" onClick={handledrawer}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* DRAWER BOTTOM CTA BUTTONS */}
      <Box className="drawerCta">
        <Button
          component="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          fullWidth
          startIcon={<WhatsAppIcon />}
          className="waHeaderBtn"
        >
          Book on WhatsApp
        </Button>

        <Button
          component="a"
          href="tel:+923477054656"
          variant="outlined"
          fullWidth
          startIcon={<CallIcon />}
          className="callDrawerBtn"
        >
          Call: 0347-7054656
        </Button>
      </Box>
    </Box>
  );

  return (
    <Wrapper>
      <AppBar component="nav" className="proAppBar" elevation={0}>
        <Toolbar className="proToolbar">
          {/* LOGO + BRAND NAME */}
          <Box className="logoContainer">
            <Link to="/" className="brandLink">
              <img
                src="/images/service/logo.svg"
                alt="Sania Home Maid Services Logo"
                className="logo"
              />
              <Box className="brandTextWrap">
                <Typography component="span" className="brandName">
                  Sania Home Maid Services
                </Typography>
                <Typography component="span" className="brandSub">
                  Islamabad & Rawalpindi
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* DESKTOP NAVIGATION */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <ul className="navList">
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <button
                  type="button"
                  className="servicesTrigger"
                  onClick={handleServicesClick}
                  aria-controls={
                    openDropdown ? "services-mega-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openDropdown ? "true" : undefined}
                >
                  Services
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    sx={{
                      transform: openDropdown ? "rotate(180deg)" : "rotate(0)",
                      transition: "0.25s",
                    }}
                  />
                </button>

                <Menu
                  id="services-mega-menu"
                  anchorEl={anchorEl}
                  open={openDropdown}
                  onClose={handleServicesClose}
                  PaperProps={{
                    sx: {
                      backgroundColor: "#08172c",
                      color: "#ffffff",
                      border: "1px solid rgba(197, 155, 67, 0.45)",
                      borderRadius: "14px",
                      boxShadow: "0 20px 45px rgba(0, 0, 0, 0.55)",
                      mt: 1.5,
                      p: 1.5,
                      width: 520,
                      maxWidth: "92vw",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pb: 1.2,
                      mb: 1.2,
                      px: 1,
                      borderBottom: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#94a3b8",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Our 11 Domestic Services
                    </Typography>

                    <Link
                      to="/services"
                      onClick={handleServicesClose}
                      style={{
                        color: "#f7d774",
                        fontSize: "13px",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      View All →
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 0.8,
                    }}
                  >
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={handleServicesClose}
                        style={{
                          textDecoration: "none",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "rgba(255,255,255,0.03)",
                          transition: "0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(247, 215, 116, 0.14)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(255,255,255,0.03)";
                        }}
                      >
                        <span
                          style={{
                            color: "#ffffff",
                            fontWeight: 600,
                            fontSize: "14px",
                          }}
                        >
                          {service.name}
                        </span>
                        <span
                          style={{
                            color: "#f7d774",
                            fontSize: "11.5px",
                            marginTop: "2px",
                          }}
                        >
                          {service.salary}
                        </span>
                      </Link>
                    ))}
                  </Box>
                </Menu>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>

            {/* DESKTOP CTA BUTTON */}
            <Button
              component="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<WhatsAppIcon />}
              className="waHeaderBtn"
            >
              Book Staff
            </Button>
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handledrawer}
            aria-label="Open menu"
            className="mobileMenuBtn"
          >
            <MenuIcon sx={{ fontSize: "2rem", color: "#f7d774" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        variant="temporary"
        open={menu}
        onClose={handledrawer}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100vw",
            maxWidth: "420px",
            background: "#08172c",
            color: "#ffffff",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .proAppBar {
    background: rgba(7, 20, 38, 0.94) !important;
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(197, 155, 67, 0.35);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35) !important;
  }

  .proToolbar {
    max-width: 1320px;
    width: 100%;
    margin: auto;
    padding: 6px 20px !important;
  }

  /* LOGO & BRAND */
  .logoContainer {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .brandLink {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
  }

  .brandTextWrap {
    display: flex;
    flex-direction: column;
  }

  .brandName {
    color: #f7d774;
    font-weight: 800;
    font-size: 19px;
    line-height: 1.2;
    letter-spacing: 0.3px;
  }

  .brandSub {
    color: #cbd5e1;
    font-size: 11.5px;
    letter-spacing: 0.6px;
  }

  .logo {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    object-fit: contain;
    background: #ffffff;
    border: 2px solid #c59b43;
    padding: 2px;
    transition: transform 0.3s ease;
  }

  .brandLink:hover .logo {
    transform: rotate(-5deg) scale(1.05);
  }

  /* DESKTOP NAV LINKS */
  .navList {
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navList a,
  .servicesTrigger {
    position: relative;
    text-decoration: none;
    color: #f1f5f9;
    font-size: 16.5px;
    font-weight: 600;
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 2px;
    font-family: inherit;
    transition: color 0.25s ease;
  }

  .navList a::after,
  .servicesTrigger::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: #f7d774;
    transition: width 0.25s ease;
  }

  .navList a:hover,
  .navList a.active,
  .servicesTrigger:hover {
    color: #f7d774;
  }

  .navList a:hover::after,
  .navList a.active::after,
  .servicesTrigger:hover::after {
    width: 100%;
  }

  .waHeaderBtn {
    background: #25d366 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    text-transform: none !important;
    border-radius: 50px !important;
    padding: 8px 20px !important;
    font-size: 14.5px !important;
    box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35) !important;
    transition: 0.25s ease !important;
  }

  .waHeaderBtn:hover {
    background: #1ebe5d !important;
    transform: translateY(-2px);
  }

  .mobileMenuBtn {
    border: 1px solid rgba(247, 215, 116, 0.35) !important;
    border-radius: 10px !important;
    padding: 6px !important;
  }

  @media (max-width: 600px) {
    .proToolbar {
      padding: 6px 12px !important;
    }

    .brandName {
      font-size: 15.5px;
    }

    .brandSub {
      font-size: 10.5px;
    }

    .logo {
      width: 46px;
      height: 46px;
    }
  }
`;

/* Drawer internal styles */
const globalDrawerStyles = `
  .drawerRoot {
    min-height: 100vh;
    background: #08172c;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }
  .drawerHeader {
    position: relative;
    background: #050f1e;
    padding: 28px 20px 22px;
    text-align: center;
    border-bottom: 1px solid rgba(197, 155, 67, 0.3);
  }
  .logodrawer {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: contain;
    background: #ffffff;
    border: 3px solid #c59b43;
    padding: 2px;
    margin-bottom: 10px;
  }
  .drawerBrand {
    color: #f7d774;
    font-weight: 800 !important;
    font-size: 18px !important;
  }
  .drawerTagline {
    color: #94a3b8;
    font-size: 11px !important;
    letter-spacing: 2px;
    margin-top: 3px !important;
  }
  .closeBtn {
    position: absolute !important;
    right: 12px;
    top: 12px;
  }
  .mobileNavList {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .mobileNavList li > a,
  .mobileServicesToggle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    color: #f1f5f9;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    box-sizing: border-box;
  }
  .mobileNavList li > a.active {
    color: #f7d774;
    background: rgba(247, 215, 116, 0.08);
  }
  .navDivider {
    background: rgba(255, 255, 255, 0.08) !important;
  }
  .mobileSubList {
    background: #050f1e;
    padding: 8px 16px 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .allServicesMobile {
    color: #f7d774 !important;
    font-weight: 700;
    font-size: 14.5px;
    padding: 8px 10px;
    text-decoration: none;
  }
  .subServiceLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    color: #e2e8f0;
    text-decoration: none;
    font-size: 14.5px;
  }
  .subServiceLink small {
    color: #f7d774;
    font-size: 11px;
  }
  .drawerCta {
    margin-top: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .callDrawerBtn {
    border-color: #f7d774 !important;
    color: #f7d774 !important;
    font-weight: 700 !important;
    text-transform: none !important;
    border-radius: 50px !important;
    padding: 9px 20px !important;
  }
`;

if (
  typeof document !== "undefined" &&
  !document.getElementById("pro-drawer-css")
) {
  const styleTag = document.createElement("style");
  styleTag.id = "pro-drawer-css";
  styleTag.innerHTML = globalDrawerStyles;
  document.head.appendChild(styleTag);
}

export default Nav;

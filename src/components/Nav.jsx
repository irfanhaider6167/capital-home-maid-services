import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const handledrawer = () => setMenu(!menu);

  const drawer = (
    <Box onClick={handledrawer} sx={{ textAlign: "center" }}>
      {/* TOP LOGO AREA */}
      <Typography
        component="div"
        sx={{
          backgroundColor: "#071426",
          height: "30vh",
          overflow: "hidden",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="./images/finalimg/logo1.png"
          alt="logo"
          className="logodrawer"
        />
      </Typography>

      {/* CLOSE ICON */}
      <Box>
        <HighlightOffIcon
          sx={{
            position: "absolute",
            right: "15px",
            top: "15px",
            fontSize: "38px",
            color: "#f7d774",
          }}
        />
      </Box>

      {/* LINKS */}
      <Wrapper>
        <ul className="mobileNavList">
          <NavLink to="/" onClick={handledrawer}>
            <li>Home</li>
          </NavLink>
          <Divider />
          <NavLink to="/about" onClick={handledrawer}>
            <li>About</li>
          </NavLink>
          <Divider />
          <NavLink to="/services" onClick={handledrawer}>
            <li>Services</li>
          </NavLink>
          <Divider />
          <NavLink to="/contact" onClick={handledrawer}>
            <li>Contact</li>
          </NavLink>
          <Divider />
          <NavLink to="/qa" onClick={handledrawer}>
            <li>FAQ's</li>
          </NavLink>
        </ul>
      </Wrapper>
    </Box>
  );

  return (
    <Wrapper>
      <AppBar component="nav" sx={{ backgroundColor: "#071426" }}>
        <Toolbar>
          {/* LOGO */}
          <Typography className="logoContainer">
            <img
              src="./images/finalimg/logo1.png"
              alt="logo"
              className="logo"
            />
          </Typography>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navList">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/qa">FAQ's</Link>
              </li>
            </ul>
          </Box>

          {/* MOBILE ICON */}
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handledrawer}
          >
            <MenuIcon style={{ fontSize: "2.5rem", color: "#f7d774" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        variant="temporary"
        open={menu}
        onClose={handledrawer}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100vw",
            background: "#0b1c33",
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
  /* DESKTOP MENU */
  .navList {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  .navList a {
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    transition: 0.3s;
  }

  .navList a:hover {
    color: #f7d774;
  }

  /* MOBILE MENU */
  .mobileNavList {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .mobileNavList a {
    color: #ffffff;
    font-size: 22px;
    text-decoration: none;
    display: block;
    padding: 18px;
    transition: 0.3s;
  }

  .mobileNavList a:hover {
    background: rgba(247, 215, 116, 0.1);
    color: #f7d774;
  }

  /* LOGO FIX */
  .logoContainer {
    flex-grow: 1;
  }

  .logo {
    width: 75px;
    height: 75px;
    object-fit: contain;
  }

  .logodrawer {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default Nav;

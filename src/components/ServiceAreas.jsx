import React, { memo, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";
import styled from "styled-components";

const WHATSAPP_NUMBER = "923477054656";

const cityData = [
  {
    id: "islamabad",
    city: "Islamabad",
    tag: "Head Office • Same-Day Staff",
    areas: [
      "F-5 & F-6",
      "F-7",
      "F-8",
      "F-10",
      "F-11 (Head Office)",
      "E-7",
      "E-8 & E-9",
      "E-11",
      "G-6 to G-11",
      "G-13 & G-15",
      "I-8",
      "I-9 & I-10",
      "D-12",
      "B-17 Multi Gardens",
      "Park View City",
      "Bahria Enclave",
      "Bani Gala",
      "Chak Shahzad",
      "Gulberg Greens",
      "DHA Islamabad (Phase 1–5)",
      "Naval Anchorage",
      "PWD Housing Society",
      "Soan Garden",
      "CBR Town",
      "Ghauri Town",
      "Margalla Town",
    ],
  },
  {
    id: "rawalpindi",
    city: "Rawalpindi",
    tag: "Twin Cities • Fast Dispatch",
    areas: [
      "Bahria Town (Phase 1–8)",
      "Bahria Phase 8 Extension",
      "Chaklala Scheme III",
      "Askari 1 to 14",
      "Satellite Town",
      "Westridge (I, II & III)",
      "Peshawar Road",
      "Saddar & Rawalpindi Cantt",
      "Lalazar",
      "Harley Street",
      "Gulraiz Housing Scheme",
      "DHA Phase 1 & 2",
      "Media Town",
      "Pakistan Town",
      "Korang Town",
      "Airport Housing Society",
      "Judicial Colony",
      "Morgah",
      "Adiala Road Societies",
      "Range Road & Chakri Road",
    ],
  },
  {
    id: "lahore",
    city: "Lahore",
    tag: "Dedicated Lahore Team",
    areas: [
      "DHA Lahore (Phase 1–9)",
      "Bahria Town Lahore",
      "Bahria Orchard",
      "Gulberg (I–V)",
      "Model Town",
      "Johar Town",
      "Lahore Cantt",
      "Cavalry Ground",
      "Askari (1–11)",
      "Wapda Town",
      "Lake City",
      "Valencia Town",
      "Garden Town",
      "Faisal Town",
      "EME Society",
      "Paragon City",
      "State Life Housing Society",
      "Eden City",
      "Shadman",
      "Allama Iqbal Town",
      "Township",
      "Sabzazar",
      "Canal Bank Societies",
      "Raiwind Road Societies",
    ],
  },
];

const otherPakistanCities = [
  "Karachi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Sialkot",
  "Gujranwala",
  "Quetta",
  "Abbottabad",
  "Jhelum",
  "Mirpur AJK",
  "Sargodha",
  "Bahawalpur",
];

const ServiceAreas = () => {
  const [activeCity, setActiveCity] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAreaClick = (area) => {
    const msg = encodeURIComponent(
      `Hello Sania Home Maid Services, I need verified domestic staff in ${area}.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const filteredCities = cityData
    .filter((item) => activeCity === "all" || item.id === activeCity)
    .map((item) => ({
      ...item,
      areas: item.areas.filter((area) =>
        area.toLowerCase().includes(searchQuery.toLowerCase().trim()),
      ),
    }))
    .filter((item) => item.areas.length > 0);

  return (
    <Wrapper>
      <Box className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="headerWrap"
        >
          <span className="eyebrow">NATIONWIDE COVERAGE</span>
          <Typography variant="h3" component="h2" className="heading">
            Service Areas Across Pakistan
          </Typography>
          <Typography className="subHeading">
            CNIC-verified maids, cooks, chefs, nurses, babysitters, drivers, and
            security guards <strong>all over Pakistan</strong> — with priority
            placement in <strong>Islamabad, Rawalpindi & Lahore</strong>.
          </Typography>
        </motion.div>

        {/* Filter Tabs + Sector Search Bar */}
        <Box className="controlsBar">
          <Box className="tabsGroup">
            {[
              { id: "all", label: "All Priority Cities" },
              { id: "islamabad", label: "Islamabad (26)" },
              { id: "rawalpindi", label: "Rawalpindi (20)" },
              { id: "lahore", label: "Lahore (24)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCity(tab.id)}
                className={`tabBtn ${activeCity === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </Box>

          <TextField
            size="small"
            placeholder="Search sector or society (e.g. F-11, DHA, Bahria, Gulberg)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="searchInput"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#0b2a5b" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* City Cards Grid */}
        {filteredCities.length > 0 ? (
          <Box
            className={`citiesGrid ${
              filteredCities.length === 1 ? "singleCol" : ""
            }`}
          >
            {filteredCities.map((cityObj, idx) => (
              <motion.div
                key={cityObj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="cityCard"
              >
                <Box className="cityCardTop">
                  <Box className="cityHeader">
                    <Box className="iconCircle">
                      <LocationOnIcon className="pinIcon" />
                    </Box>
                    <div>
                      <Typography variant="h5" className="cityTitle">
                        {cityObj.city}
                      </Typography>
                      <Typography className="cityTag">
                        <VerifiedIcon sx={{ fontSize: 14, mr: 0.5 }} />
                        {cityObj.tag}
                      </Typography>
                    </div>
                  </Box>
                  <span className="countPill">
                    {cityObj.areas.length} Areas
                  </span>
                </Box>

                <Box className="chipsWrap">
                  {cityObj.areas.map((area, i) => (
                    <Chip
                      key={i}
                      label={area}
                      onClick={() =>
                        handleAreaClick(`${area}, ${cityObj.city}`)
                      }
                      className="areaChip"
                    />
                  ))}
                </Box>
              </motion.div>
            ))}
          </Box>
        ) : (
          <Box className="emptySearch">
            <Typography>
              No matching sector found for "<strong>{searchQuery}</strong>". We
              still serve your area!
            </Typography>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              onClick={() => handleAreaClick(searchQuery)}
              className="bannerWaBtn"
              sx={{ mt: 1.5 }}
            >
              Book Staff in {searchQuery}
            </Button>
          </Box>
        )}

        {/* All Over Pakistan Nationwide Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pakistanBanner"
        >
          <Box className="bannerTop">
            <PublicIcon className="globeIcon" />
            <Typography variant="h5" className="bannerTitle">
              24/7 Live-In Staff Available All Over Pakistan
            </Typography>
          </Box>

          <Typography className="bannerDesc">
            For 24-hour live-in house maids, domestic couples, patient care,
            nurses, cooks, and security guards, we dispatch verified staff to
            all major cities across Pakistan:
          </Typography>

          <Box className="pakistanChips">
            {otherPakistanCities.map((city, i) => (
              <Chip
                key={i}
                label={city}
                onClick={() => handleAreaClick(city)}
                className="cityChipDark"
              />
            ))}
          </Box>

          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={() => handleAreaClick("Pakistan")}
            className="bannerWaBtn"
          >
            Check Staff Availability in Your City
          </Button>
        </motion.div>
      </Box>
    </Wrapper>
  );
};

export default memo(ServiceAreas);

const Wrapper = styled.section`
  padding: 85px 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f4f7fb 100%);

  .container {
    max-width: 1280px;
    margin: auto;
  }

  .headerWrap {
    text-align: center;
    margin-bottom: 36px;
  }

  .eyebrow {
    display: inline-block;
    background: rgba(11, 42, 91, 0.08);
    color: #0b2a5b;
    border: 1px solid rgba(197, 155, 67, 0.5);
    padding: 5px 16px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }

  .heading {
    font-weight: 800;
    color: #0b2a5b;
    margin-bottom: 12px;
  }

  .subHeading {
    max-width: 760px;
    margin: auto;
    color: #4b5563;
    font-size: 16px;
    line-height: 1.65;
  }

  /* Filter Tabs + Search */
  .controlsBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 32px;
    background: #ffffff;
    padding: 14px 18px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  }

  .tabsGroup {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .tabBtn {
    border: 1px solid #cbd5e1;
    background: #f8fafc;
    color: #1e293b;
    padding: 8px 18px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.25s ease;
  }

  .tabBtn:hover {
    border-color: #0b2a5b;
    color: #0b2a5b;
  }

  .tabBtn.active {
    background: #0b2a5b;
    color: #f7d774;
    border-color: #0b2a5b;
    box-shadow: 0 4px 12px rgba(11, 42, 91, 0.25);
  }

  .searchInput {
    min-width: 330px;
    background: #f8fafc;
    border-radius: 10px;
  }

  /* Cities Grid */
  .citiesGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .citiesGrid.singleCol {
    grid-template-columns: minmax(320px, 820px);
    justify-content: center;
  }

  .cityCard {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-top: 4px solid #c59b43;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 10px 28px rgba(11, 42, 91, 0.06);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .cityCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 36px rgba(11, 42, 91, 0.11);
  }

  .cityCardTop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 18px;
    padding-bottom: 14px;
    border-bottom: 1px solid #f1f5f9;
  }

  .cityHeader {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .iconCircle {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #071426;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .pinIcon {
    color: #f7d774;
    font-size: 24px !important;
  }

  .cityTitle {
    font-weight: 800 !important;
    color: #0b2a5b;
    line-height: 1.2 !important;
  }

  .cityTag {
    display: inline-flex;
    align-items: center;
    font-size: 12px !important;
    color: #16a34a;
    font-weight: 600 !important;
    margin-top: 3px !important;
  }

  .countPill {
    background: #fef9c3;
    color: #854d0e;
    border: 1px solid #fde047;
    font-size: 11.5px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 50px;
    white-space: nowrap;
  }

  .chipsWrap {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .areaChip {
    background: #f8fafc !important;
    border: 1px solid #cbd5e1 !important;
    color: #1e293b !important;
    font-weight: 600 !important;
    font-size: 12.5px !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
  }

  .areaChip:hover {
    background: #0b2a5b !important;
    color: #f7d774 !important;
    border-color: #0b2a5b !important;
    transform: translateY(-2px);
  }

  .emptySearch {
    text-align: center;
    background: #ffffff;
    padding: 32px 20px;
    border-radius: 16px;
    border: 1px dashed #cbd5e1;
    color: #475569;
  }

  /* All Over Pakistan Banner */
  .pakistanBanner {
    margin-top: 36px;
    background: linear-gradient(135deg, #071426 0%, #0b2a5b 100%);
    color: #ffffff;
    border-radius: 22px;
    padding: 34px 28px;
    border: 1px solid rgba(197, 155, 67, 0.55);
    box-shadow: 0 14px 34px rgba(7, 20, 38, 0.25);
    text-align: center;
  }

  .bannerTop {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .globeIcon {
    color: #f7d774;
    font-size: 32px !important;
  }

  .bannerTitle {
    font-weight: 800 !important;
    color: #f7d774;
  }

  .bannerDesc {
    color: #e2e8f0;
    font-size: 15px;
    max-width: 740px;
    margin: 0 auto 20px;
    line-height: 1.65;
  }

  .pakistanChips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  .cityChipDark {
    background: rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important;
    border: 1px solid rgba(247, 215, 116, 0.45) !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: 0.25s ease !important;
  }

  .cityChipDark:hover {
    background: #f7d774 !important;
    color: #071426 !important;
    transform: translateY(-2px);
  }

  .bannerWaBtn {
    background: #25d366 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    padding: 11px 26px !important;
    border-radius: 50px !important;
    text-transform: none !important;
    font-size: 15px !important;
    box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35) !important;
  }

  .bannerWaBtn:hover {
    background: #1ebe5d !important;
  }

  @media (max-width: 960px) {
    .citiesGrid {
      grid-template-columns: 1fr;
    }

    .controlsBar {
      flex-direction: column;
      align-items: stretch;
    }

    .searchInput {
      min-width: 100%;
    }

    .heading {
      font-size: 1.85rem !important;
    }
  }
`;

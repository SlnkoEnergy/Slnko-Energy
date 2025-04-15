import React, { useState, lazy, Suspense } from "react";
import {
  Box,
  Grid,
  Typography,
  Modal,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Lazy load state components
const MadhyaPradesh = lazy(() => import("../Pages/Map"));
const Rajasthan = lazy(() => import("../Pages/Rajasthan"));
// const UttarPradesh = lazy(() => import("../Pages/UttarPradesh"));

const India = () => {
  const geoUrl = process.env.PUBLIC_URL + "/maps/India.topojson";

  const yellowDistricts = [
    "Madhya Pradesh",
    "Rajasthan",
    "Uttar Pradesh",
    "Bihar",
    "Jharkhand",
    "Chhindwara",
    "Narsinghpur",
    "Seoni",
    "Jabalpur",
    "Shahdol",
    "Sidhi",
    "Rewa",
    "Chhatarpur",
    "Sagar",
    "Niwari",
    "Singrauli",
  ];

  const districtWpData = {
    "Madhya Pradesh": { wp: 50.4, status: "ongoing" },
    Rajasthan: { wp: 40.0, status: "completed" },
    "Uttar Pradesh": { wp: 30.2, status: "completed" },
    "Khargone (West Nimar)": { wp: 2.0, status: "ongoing" },
    Bihar: { wp: 4.4, status: "ongoing" },
    Jharkhand: { wp: 1.2, status: "completed" },
    Narsinghpur: { wp: 2.0, status: "completed" },
    Seoni: { wp: 3.6, status: "ongoing" },
    Jabalpur: { wp: 4.8, status: "ongoing" },
    Shahdol: { wp: 2.0, status: "completed" },
    Sidhi: { wp: 3.0, status: "ongoing" },
    Rewa: { wp: 2.0, status: "completed" },
    Chhatarpur: { wp: 4.0, status: "completed" },
    Sagar: { wp: 7.4, status: "ongoing" },
    Niwari: { wp: 2.4, status: "completed" },
    Singrauli: { wp: 1.0, status: "ongoing" },
  };

  const [tooltipContent, setTooltipContent] = useState({ name: "", wp: "", status: "" });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [hoveredDistrict, setHoveredDistrict] = useState("");
  const [selectedState, setSelectedState] = useState(null);

  const maxWp = Math.max(...Object.values(districtWpData).map((d) => d.wp));
  const minWp = Math.min(...Object.values(districtWpData).map((d) => d.wp));

  const getFillColor = (name) => {
    const data = districtWpData[name];
    if (!data) return "white";
    const normalized = (data.wp - minWp) / (maxWp - minWp);
    const lightness = 90 - normalized * 30;
    return `hsl(45, 100%, ${lightness}%)`;
  };

  let leaveTimeout;

  const handleMouseLeave = () => {
    leaveTimeout = setTimeout(() => {
      setShowCard(false);
      setHoveredDistrict("");
    }, 100);
  };

  const handleMouseEnter = (geo, evt) => {
    clearTimeout(leaveTimeout);
    const name = geo.properties?.NAME_1;
    const data = districtWpData[name] || {};
    const { wp = "", status = "" } = data;
    const path = evt.target;

    requestAnimationFrame(() => {
      const bbox = path.getBoundingClientRect();
      setTooltipContent({ name, wp, status });
      setPosition({
        x: bbox.left + bbox.width / 2,
        y: bbox.top + bbox.height / 2,
      });
      setShowCard(true);
      setHoveredDistrict(name);
    });
  };

  const handleClick = (geo) => {
    const name = geo.properties?.NAME_1;
    if (yellowDistricts.includes(name)) {
      setSelectedState(name);
    }
  };

  const renderStateComponent = (stateName) => {
    switch (stateName) {
      case "Madhya Pradesh":
        return <MadhyaPradesh />;
      case "Rajasthan":
        return <Rajasthan />;
      // case "Uttar Pradesh":
      //   return <UttarPradesh />;
      default:
        return <div>Data for {stateName} is not available yet.</div>;
    }
  };

  return (
    <>
      <Grid
        container
        mt={{ xs: 0, sm: 10 }}
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            fontFamily={"poppins"}
            color="#0a1a44"
            fontSize={{
              xs: "1.7rem",
              sm: "2.2rem",
              md: "2.5rem",
              lg: "3.5rem",
              xl: "4rem",
            }}
            maxWidth={{ lg: "820px", xl: "1000px" }}
          >
            Our Presence in <span style={{ fontWeight: "bold" }}>India</span>
          </Typography>

          <Grid display={"flex"} flexDirection={"column"} gap={2} mt={2}>
            <Grid display="flex" gap={2}>
              <Box sx={legendBoxStyle("#ffd945", "#1d3f79")}>Completed</Box>
              <Box sx={legendBoxStyle("#1d3f79", "#ffd945")}>20 MWp</Box>
            </Grid>
            <Grid display="flex" gap={2}>
              <Box sx={legendBoxStyle("#ffd945", "#1d3f79")}>Ongoing</Box>
              <Box sx={legendBoxStyle("white", "#1d3f79", true)}>10 MWp</Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item display="flex" justifyContent="center" width="100%">
          <Grid
            sx={{
              backgroundColor: "white",
              width: {
                xs: "110%",
                sm: "150%",
                md: "70%",
                lg: "50%",
                xl: "50%",
              },
              height: {
                xs: "auto",
                md: "600px",
              },
              position: "relative",
              mb: { xl: 10 },
            }}
          >
            <Box width="100%" sx={{ aspectRatio: "4 / 3", maxWidth: "2000px" }}>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 800, center: [80.65, 22.5] }}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={geoUrl}>
  {({ geographies }) =>
    geographies.map((geo) => {
      const districtName = geo.properties?.NAME_1;
      const isYellow = yellowDistricts.includes(districtName);
      const isHovered = districtName === hoveredDistrict;

      return (
        <g key={geo.rsmKey}>
  {/* Interactive Transparent Layer */}
  <Geography
    geography={geo}
    onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
    onMouseLeave={handleMouseLeave}
    onClick={() => handleClick(geo)}  
    style={{
      default: {
        fill: "transparent",
        stroke: "none",
        outline: "none",
        pointerEvents: "auto",
      },
      hover: {
        fill: "transparent",
        stroke: "none",
        outline: "none",
      },
      pressed: {
        fill: "transparent",
        stroke: "none",
        outline: "none",
      },
    }}
  />

  {/* Visible Non-interactive Layer */}
  <Geography
    geography={geo}
    style={{
      default: {
        fill: isYellow ? getFillColor(districtName) : "white",
        stroke: "black",
        strokeWidth: 0.5,
        outline: "none",
        pointerEvents: "none",
        transform:
          isHovered && isYellow ? "translate(-4px, -4px)" : "none",
        transition: "all 0.1s ease-in-out",
      },
      hover: {},
      pressed: {},
    }}
  />
</g>

      
      );
    })
  }
</Geographies>

              </ComposableMap>
            </Box>

            {showCard && (
              <div
                style={{
                  position: "fixed",
                  top: position.y + 10,
                  left: position.x,
                  transform: "translate(-50%, 0)",
                  zIndex: 1000,
                  pointerEvents: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {tooltipContent.wp ? (
                  <>
                    <div
                      style={{
                        height: "100px",
                        width: "2px",
                        backgroundColor: "#1d3f79",
                        marginBottom: "4px",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "200",
                        color: tooltipContent.status === "completed" ? "#ffffff" : "#1d3f79",
                        background: tooltipContent.status === "completed" ? "#1d3f79" : "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        border: tooltipContent.status === "completed" ? "none" : "1px solid #1d3f79",
                        fontFamily: "poppins",
                      }}
                    >
                      {tooltipContent.name} - {tooltipContent.wp} MWp
                    </div>
                  </>
                ) : (
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1d3f79",
                      background: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      border: "1px solid #1d3f79",
                      fontFamily: "poppins",
                    }}
                  >
                    {tooltipContent.name}
                  </div>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Modal open={!!selectedState} onClose={() => setSelectedState(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 2,
            width: "90%",
            maxWidth: "1000px",
            maxHeight: "90%",
            overflow: "auto",
            borderRadius: 2,
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={() => setSelectedState(null)}
          >
            <CloseIcon />
          </IconButton>
          <Suspense fallback={<CircularProgress color="primary" />}>
            {renderStateComponent(selectedState)}
          </Suspense>
        </Box>
      </Modal>
    </>
  );
};

// Reusable styles
const legendBoxStyle = (bg, color, isBordered = false) => ({
  backgroundColor: bg,
  color: color,
  padding: { xs: 0.6, sm: 0.8 },
  borderRadius: "3px",
  fontSize: { xs: "0.65rem", sm: "0.8rem", md: "0.9rem" },
  textAlign: "center",
  fontFamily: "poppins",
  width: { xs: "60px", sm: "80px", md: "100px" },
  border: isBordered ? `1px solid ${color}` : "none",
});

export default India;

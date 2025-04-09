import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Import individual state components
import MadhyaPradesh from "../Pages/Map.js";
import Rajasthan from "../Pages/Rajasthan.js";
// import UttarPradesh from "../Pages/UttarPradesh";
// Add more imports as needed...

const India = () => {
  const geoUrl = process.env.PUBLIC_URL + "/maps/India.geojson";

  const yellowDistricts = [
    "Madhya Pradesh",
    "Rajasthan",
    "Uttar Pradesh",
    "Khargone (West Nimar)",
    "Raisen",
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
    Raisen: { wp: 4.4, status: "ongoing" },
    Chhindwara: { wp: 1.2, status: "completed" },
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

  const handleMouseEnter = (geo, evt) => {
    const name = geo.properties?.NAME_1;
    const data = districtWpData[name] || {};
    const { wp = "", status = "" } = data;
    const path = evt.target;
    const bbox = path.getBoundingClientRect();
    setTooltipContent({ name, wp, status });
    setPosition({ x: bbox.left + bbox.width / 2, y: bbox.top + bbox.height / 2 });
    setShowCard(true);
    setHoveredDistrict(name);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
    setHoveredDistrict("");
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
    //   case "Uttar Pradesh":
    //     return <UttarPradesh />;
      // Add more cases as needed
      default:
        return <div>Data for {stateName} is not available yet.</div>;
    }
  };

  return (
    <>
      <Grid container mt={{ xs: 0, sm: 10 }} direction={{ xs: "row", lg: "column" }} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography
            fontFamily={"poppins"}
            color="#0a1a44"
            fontSize={{ xs: "1.5rem", sm: "2.2rem", md: "2.5rem", lg: "2.5rem", xl: "4rem" }}
            maxWidth={{ lg: "520px", xl: "1000px" }}
          >
            Our Presence in <span style={{ fontWeight: "bold" }}>India</span>
          </Typography>
        </Grid>

        <Grid item>
          <div style={{ backgroundColor: "white", position: "relative", width: "800px", height: "600px", maxWidth: "100%" }}>
            <Box sx={{ width: "100%", height: { xs: "80%", sm: "100%" } }}>
              <ComposableMap
                projection="geoMercator"
                width={800}
                height={800}
                style={{ width: "100%", height: "100%" }}
                projectionConfig={{ scale: 1410, center: [77.65, 21.5] }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const districtName = geo.properties?.NAME_1;
                      const isYellow = yellowDistricts.includes(districtName);
                      const isHovered = districtName === hoveredDistrict;
                      return (
                        <g key={geo.rsmKey} transform={isHovered ? "translate(0,-5)" : "translate(0,0)"}>
                          <Geography
                            geography={geo}
                            onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(geo)}
                            style={{
                              default: {
                                fill: isYellow ? getFillColor(districtName) : "white",
                                stroke: "black",
                                strokeWidth: 0.5,
                                outline: "none",
                                cursor: isYellow ? "pointer" : "default",
                              },
                              hover: {
                                fill: isYellow ? "#ffd945" : "#f1e5b5",
                                outline: "none",
                              },
                              pressed: {
                                fill: isYellow ? "#ffd945" : "#f1e5b5",
                                outline: "none",
                              },
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
                    <div style={{ height: "100px", width: "2px", backgroundColor: "#1d3f79", marginBottom: "4px" }} />
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "200",
                        color: tooltipContent.status === "completed" ? "#ffffff" : "#1d3f79",
                        background: tooltipContent.status === "completed" ? "#1d3f79" : "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        border: tooltipContent.status === "completed" ? "none" : "1px solid #1d3f79",
                        letterSpacing: 1,
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
          </div>
        </Grid>
      </Grid>

      {/* Modal */}
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
          {renderStateComponent(selectedState)}
        </Box>
      </Modal>
    </>
  );
};

export default India;

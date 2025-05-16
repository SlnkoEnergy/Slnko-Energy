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
const MadhyaPradesh = lazy(() => import("./IndianStates/Mp"));
const Rajasthan = lazy(() => import("./IndianStates/Rajasthan"));
const UttarPradesh = lazy(() => import("./IndianStates/UttarPradesh"));
const Punjab = lazy(() => import("./IndianStates/Punjab"));
const HimachalPradesh = lazy(() => import("./IndianStates/HimachalPradesh"));
const Uttarakhand = lazy(() => import("./IndianStates/Uttarakhand"));
const Jharkhand = lazy(() => import("./IndianStates/Jharkhand"));
const Chhattisgarh = lazy(() => import("./IndianStates/Chhattisgarh"));
const Telangana = lazy(() => import("./IndianStates/Telangana"));
const Kerala = lazy(() => import("./IndianStates/Kerala"));
const Maharashtra = lazy(() => import("./IndianStates/Maharashtra"));
const Gujarat = lazy(() => import("./IndianStates/Gujarat"));
const Sikkim = lazy(() => import("./IndianStates/Sikkim"));
const Assam = lazy(() => import("./IndianStates/Assam"));

const India = () => {
  const [selectedFilter, setSelectedFilter] = useState("overall"); // "overall" or "kusum"
  const [selectedState, setSelectedState] = useState(null);
  const [tooltipContent, setTooltipContent] = useState({
    name: "",
    wp: "",
    status: "",
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [hoveredDistrict, setHoveredDistrict] = useState("");

  const yellowStates = [
    "Madhya Pradesh",
    "Rajasthan",
    "Uttar Pradesh",
    "Jharkhand",
    "Assam",
    "Chhattisgarh",
    "Gujarat",
    "Himachal Pradesh",
    "Kerala",
    "Maharashtra",
    "Punjab",
    "Sikkim",
    "Telangana",
    "Uttarakhand",
  ];

  const yellowStatesKusum = ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh"];

  const StateWpData = {
    "Madhya Pradesh": { wp: 718.9, status: "ongoing" },
    Rajasthan: { wp: 2881.56, status: "ongoing" },
    "Uttar Pradesh": { wp: 56.92, status: "completed" },
    Assam: { wp: 455.0, status: "ongoing" },
    Jharkhand: { wp: 2, status: "completed" },
    Chhattisgarh: { wp: 0.12, status: "completed" },
    Gujarat: { wp: 28.0, status: "ongoing" },
    "Himachal Pradesh": { wp: 5.0, status: "ongoing" },
    Kerala: { wp: 8.0, status: "completed" },
    Maharashtra: { wp: 33.8, status: "ongoing" },
    Punjab: { wp: 25.0, status: "completed" },
    Sikkim: { wp: 0.4, status: "completed" },
    Telangana: { wp: 126.0, status: "ongoing" },
    Uttarakhand: { wp: 30.69, status: "completed" },
  };

  const StateWpDataKusum = {
    "Madhya Pradesh": { wp: 718.9, status: "ongoing" },
    Rajasthan: { wp: 2881.56, status: "ongoing" },
    "Uttar Pradesh": { wp: 56.92, status: "completed" },
  };

  const geoUrl = import.meta.env.BASE_URL + "maps/India.geojson";
const geoUrlKusum = import.meta.env.BASE_URL + "maps/IndiaKusum.geojson";


  const maxWp = Math.max(...Object.values(StateWpData).map((d) => d.wp));
  const minWp = Math.min(...Object.values(StateWpData).map((d) => d.wp));

  const getFillColor = (name) => {
    const data = StateWpData[name];
    if (!data) return "white";
    const normalized = (data.wp - minWp) / (maxWp - minWp);
    const lightness = 90 - normalized * 40;
    return `hsl(45, 100%, ${lightness}%)`;
  };

  const maxWpK = Math.max(...Object.values(StateWpData).map((d) => d.wp));
  const minWpK = Math.min(...Object.values(StateWpData).map((d) => d.wp));

  const getFillColorK = (name) => {
    const data = StateWpDataKusum[name];
    if (!data) return "white";
    const normalized = (data.wp - minWpK) / (maxWpK - minWpK);
    const lightness = 90 - normalized * 40;
    return `hsl(45, 100%, ${lightness}%)`;
  };

  let leaveTimeout, leaveTimeoutk;

  const handleMouseLeave = () => {
    leaveTimeout = setTimeout(() => {
      setShowCard(false);
      setHoveredDistrict("");
    }, 100);
  };

  const handleMouseEnter = (geo, evt) => {
    clearTimeout(leaveTimeout);
    const name = geo.properties?.st_nm;
    const data = StateWpData[name] || {};
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

  const handleMouseLeaveK = () => {
    leaveTimeoutk = setTimeout(() => {
      setShowCard(false);
      setHoveredDistrict("");
    }, 100);
  };

  const handleMouseEnterK = (geo, evt) => {
    clearTimeout(leaveTimeoutk);
    const name = geo.properties?.st_nm;
    const data = StateWpDataKusum[name] || {};
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
    const name = geo.properties?.st_nm;
    if (yellowStates.includes(name)) {
      setSelectedState(name);
    }
  };

  const handleClickK = (geo) => {
    const name = geo.properties?.st_nm;
    if (yellowStatesKusum.includes(name)) {
      setSelectedState(name);
    }
  };

  const renderStateComponent = (stateName) => {
    switch (stateName) {
      case "Madhya Pradesh":
        return <MadhyaPradesh />;
      case "Rajasthan":
        return <Rajasthan />;
      case "Uttar Pradesh":
        return <UttarPradesh />;
      case "Punjab":
        return <Punjab />;
      case "Himachal Pradesh":
        return <HimachalPradesh />;
      case "Uttarakhand":
        return <Uttarakhand />;
      case "Jharkhand":
        return <Jharkhand />;
      case "Chhattisgarh":
        return <Chhattisgarh />;
      case "Telangana":
        return <Telangana />;
      case "Kerala":
        return <Kerala />;
      case "Maharashtra":
        return <Maharashtra />;
      case "Gujarat":
        return <Gujarat />;
      case "Sikkim":
        return <Sikkim />;
      case "Assam":
        return <Assam />;
      default:
        return <div>Data for {stateName} is not available yet.</div>;
    }
  };

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

  return (
    <>
      <Grid
        height={"100%"}
        width={"100%"}
        container
        mt={{ xs: 6, sm: 10 }}
        direction={{ xs: "column", lg: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems={{ xs: "center", lg: "flex-start" }}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          width={{xs:'90%', sm:'80%', md:'50%', lg:'40%'}}
          gap={{xs:2, xl:4}}
        >
          <Typography
            fontFamily="poppins"
            color="#0a1a44"
            fontSize={{
              xs: "1.7rem",
              sm: "2.2rem",
              md: "2.5rem",
              lg: "2.8rem",
              xl: "3.5rem",
            }}
            maxWidth={{ lg: "820px", xl: "1000px" }}
          >
            Our Presence in <span style={{ fontWeight: "bold" }}>India</span>
          </Typography>

          {/* Filter Buttons */}
          <Grid display="flex" justifyContent="center" gap={4} mt={2}>
            <Typography
              component="span"
              onClick={() => setSelectedFilter("overall")}
              sx={{
                cursor: "pointer",
                textDecoration:
                  selectedFilter === "overall" ? "3px underline" : "none",
                textDecorationColor:
                  selectedFilter === "overall" ? "#ffd945" : "transparent",
                textUnderlineOffset: "4px",
                fontWeight: selectedFilter === "overall" ? "bold" : "normal",
                color: selectedFilter === "overall" ? "#0a1a44" : "#0a1a44", // You can change this if needed
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontFamily: "poppins",
              }}
            >
              Overall
            </Typography>
            <Typography
              component="span"
              onClick={() => setSelectedFilter("Kusum")}
              sx={{
                cursor: "pointer",
                textDecoration:
                  selectedFilter === "Kusum" ? "3px underline" : "none",
                textDecorationColor:
                  selectedFilter === "Kusum" ? "#ffd945" : "transparent",
                textUnderlineOffset: "4px",
                fontWeight: selectedFilter === "Kusum" ? "bold" : "normal",
                color: selectedFilter === "Kusum" ? "#0a1a44" : "#0a1a44", // You can change this if needed
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontFamily: "poppins",
              }}
            >
              Kusum
            </Typography>
          </Grid>
          {selectedFilter === "overall" && (
           <Grid
           letterSpacing={{xs:0, sm:1}}
           
           >
              <Typography fontSize={{xs:'0.8rem', sm:'0.9rem', lg:'1rem' ,xl:'1.1rem'}}>
                Slnko Energy is proud to be the leading and largest
                brand under the <b>PM-KUSUM Yojana</b>, having successfully completed
                over 1.5 GW of solar installations across India. Our commitment
                to empowering farmers with sustainable and affordable solar
                solutions has positioned us at the forefront of the
                decentralized solar energy movement, driving rural development
                and energy independence.
              </Typography>
            </Grid>
          )}
          {selectedFilter === "Kusum" && (
           <Grid
           letterSpacing={{xs:0, sm:1}}
           >
              <Typography fontSize={{xs:'0.8rem', sm:'0.9rem', lg:'1rem' ,xl:'1.1rem'}}>
                Slnko Energy is proud to be the leading and largest
                brand under the <b>PM-KUSUM Yojana</b>, having successfully completed
                over 1.5 GW of solar installations across India. Our commitment
                to empowering farmers with sustainable and affordable solar
                solutions has positioned us at the forefront of the
                decentralized solar energy movement, driving rural development
                and energy independence.
              </Typography>
            </Grid>
          )}

          {/* Legend */}
          {selectedFilter === "overall" && (
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              mt={2}
            >
              <Grid display="flex" gap={2}>
                <Box sx={legendBoxStyle("#ffd945", "#1d3f79")}>Completed</Box>
                <Box sx={legendBoxStyle("#1d3f79", "#ffd945")}>20 MWp</Box>
              </Grid>
              <Grid display="flex" gap={2}>
                <Box sx={legendBoxStyle("#ffd945", "#1d3f79")}>Ongoing</Box>
                <Box sx={legendBoxStyle("white", "#1d3f79", true)}>10 MWp</Box>
              </Grid>
            </Grid>
          )}

          {selectedFilter === "Kusum" && (
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              mt={2}
            >
              <Grid display="flex" gap={2}>
                <Box sx={legendBoxStyle("#ffd945", "#1d3f79")}>Completed</Box>
                <Box sx={legendBoxStyle("#1d3f79", "#ffd945")}>10 MWp</Box>
              </Grid>
              <Grid display="flex" gap={2}>
                <Box sx={legendBoxStyle("#ffd945", "#1d3f79")}>Ongoing</Box>
                <Box sx={legendBoxStyle("white", "#1d3f79", true)}>15 MWp</Box>
              </Grid>
            </Grid>
          )}
        </Grid>

        {/* Main Map */}
        <Grid
          item
          display="flex"
          justifyContent="center"
          width={{ xs: "100%", lg: "50%" }}
          height={"100%"}
        >
          <Grid
            sx={{
              backgroundColor: "white",
              width: {
                xs: "100%",
                sm: "150%",
                md: "75%",
                lg: "100%",
                xl: "100%",
              },
              height: {
                xs: "auto",
                md: "auto",
              },
              position: "relative",
              mb: { xl: 10 },
            }}
          >
            <Box width="100%" sx={{ aspectRatio: "4 / 3", maxWidth: "2000px" }}>
              <Suspense fallback={<CircularProgress color="primary" />}>
                {selectedFilter === "overall" ? (
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 800, center: [80.65, 22.5] }}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const districtName = geo.properties?.st_nm;
                          const isYellow = yellowStates.includes(districtName);
                          const isHovered = districtName === hoveredDistrict;

                          return (
                            <g key={geo.rsmKey}>
                              <Geography
                                geography={geo}
                                onMouseEnter={(evt) =>
                                  handleMouseEnter(geo, evt)
                                }
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(geo)}
                                style={{
                                  default: {
                                    fill: "transparent",
                                    stroke: "none",
                                    outline: "none",
                                    pointerEvents: "auto",
                                  },
                                  hover: { fill: "transparent" },
                                  pressed: { fill: "transparent" },
                                }}
                              />
                              <Geography
                                geography={geo}
                                style={{
                                  default: {
                                    fill: isYellow
                                      ? getFillColor(districtName)
                                      : "white",
                                    stroke: "black",
                                    strokeWidth: 0.5,
                                    outline: "none",
                                    pointerEvents: "none",
                                    transform:
                                      isHovered && isYellow
                                        ? "translate(-4px, -4px)"
                                        : "none",
                                    transition: "all 0.1s ease-in-out",
                                  },
                                }}
                              />
                            </g>
                          );
                        })
                      }
                    </Geographies>
                  </ComposableMap>
                ) : (
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 800, center: [80.65, 22.5] }}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Geographies geography={geoUrlKusum}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const districtName = geo.properties?.st_nm;
                          const isYellow =
                            yellowStatesKusum.includes(districtName);
                          const isHovered = districtName === hoveredDistrict;

                          return (
                            <g key={geo.rsmKey}>
                              <Geography
                                geography={geo}
                                onMouseEnter={(evt) =>
                                  handleMouseEnterK(geo, evt)
                                }
                                onMouseLeave={handleMouseLeaveK}
                                onClick={() => handleClickK(geo)}
                                style={{
                                  default: {
                                    fill: "transparent",
                                    stroke: "none",
                                    outline: "none",
                                    pointerEvents: "auto",
                                  },
                                  hover: { fill: "transparent" },
                                  pressed: { fill: "transparent" },
                                }}
                              />
                              <Geography
                                geography={geo}
                                style={{
                                  default: {
                                    fill: isYellow
                                      ? getFillColorK(districtName)
                                      : "white",
                                    stroke: "black",
                                    strokeWidth: 0.5,
                                    outline: "none",
                                    pointerEvents: "none",
                                    transform:
                                      isHovered && isYellow
                                        ? "translate(-4px, -4px)"
                                        : "none",
                                    transition: "all 0.1s ease-in-out",
                                  },
                                }}
                              />
                            </g>
                          );
                        })
                      }
                    </Geographies>
                  </ComposableMap>
                )}
              </Suspense>

              {/* Tooltip */}
              {showCard && selectedFilter === "overall" && (
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
                          color:
                            tooltipContent.status === "completed"
                              ? "#ffffff"
                              : "#1d3f79",
                          background:
                            tooltipContent.status === "completed"
                              ? "#1d3f79"
                              : "white",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          border:
                            tooltipContent.status === "completed"
                              ? "none"
                              : "1px solid #1d3f79",
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

              {showCard && selectedFilter === "Kusum" && (
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
                          color:
                            tooltipContent.status === "completed"
                              ? "#ffffff"
                              : "#1d3f79",
                          background:
                            tooltipContent.status === "completed"
                              ? "#1d3f79"
                              : "white",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          border:
                            tooltipContent.status === "completed"
                              ? "none"
                              : "1px solid #1d3f79",
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
            </Box>
          </Grid>
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
            width: "100%",
            maxWidth: "1000px",
            maxHeight: "50%",
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

export default India;

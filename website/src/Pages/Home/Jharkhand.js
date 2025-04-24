import { Box, Grid, CircularProgress } from "@mui/material";
import React, { useState, Suspense } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Jharkhand = () => {
  const geoUrl = process.env.PUBLIC_URL + "/maps/Jharkhand.geojson";

  const [tooltipContent, setTooltipContent] = useState({
    name: "",
    wp: "",
    status: "",
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [hoveredDistrict, setHoveredDistrict] = useState("");
  const yellowDistricts = [
    "Ranchi",
  ];

  const districtWpData = {
    Ranchi: { wp: "90 MWp", status: "completed" },
  };

  const wpValues = Object.values(districtWpData).map((d) => parseFloat(d.wp));
  const maxWp = Math.max(...wpValues);
  const minWp = Math.min(...wpValues);

  const getFillColor = (name) => {
    const data = districtWpData[name];
    if (!data) return "white";

    const wpValue = parseFloat(data.wp); // extract number
    const normalized = (wpValue - minWp) / (maxWp - minWp);
    const lightness = 90 - normalized * 45;

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
    const name = geo.properties?.district;
    const data = districtWpData[name] || {};
    const { wp = "", status = "" } = data;

    const container = evt.currentTarget.ownerSVGElement;
    const containerRect = container.getBoundingClientRect();
    const mouseX = evt.clientX - containerRect.left;
    const mouseY = evt.clientY - containerRect.top;
    setTooltipContent({ name, wp, status });
    setPosition({ x: mouseX, y: mouseY });
    setShowCard(true);
    setHoveredDistrict(name);
  };

  return (
    <Grid
      container
      direction={{ xs: "row-reverse", lg: "row-reverse" }}
      justifyContent={"space-around"}
      alignItems="center"
      spacing={{ xs: 0, sm: 8, md: 8, lg: 1, xl: 2 }}
    >
      <Grid
        item
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={{ xs: 4, sm: 4, md: 5, lg: 15, xl: 20 }}
      >
        <Grid
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignContent={"center"}
          gap={2}
        >
          <Grid display={"flex"} gap={2}>
            <Box
              sx={{
                backgroundColor: "#ffd945",
                color: "#1d3f79",
                padding: { xs: 0.8, sm: 0.8, md: 0.8 },
                borderRadius: { xs: "3px", sm: "3px", md: "2px" },
                fontSize: { xs: "0.6rem", sm: "0.9rem", md: "1rem" },
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "poppins",
                width: { xs: "60px", sm: "80px", md: "100px" },
              }}
            >
              Completed
            </Box>
            <Box
              sx={{
                backgroundColor: "#1d3f79",
                color: "#ffd945",
                padding: { xs: 0.8, sm: 0.8, md: 0.8 },
                borderRadius: { xs: "3px", sm: "3px", md: "2px" },
                fontSize: { xs: "0.6rem", sm: "0.9rem", md: "1rem" },
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "poppins",
                width: { xs: "60px", sm: "80px", md: "100px" },
              }}
            >
              90 MWp
            </Box>
          </Grid>
          <Grid display={"flex"} gap={2}>
            <Box
              sx={{
                backgroundColor: "#ffd945",
                color: "#1d3f79",
                padding: { xs: 0.8, sm: 0.8, md: 0.8 },
                borderRadius: { xs: "3px", sm: "3px", md: "2px" },
                fontSize: { xs: "0.6rem", sm: "0.9rem", md: "1rem" },
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "poppins",
                width: { xs: "60px", sm: "80px", md: "100px" },
              }}
            >
              Ongoing
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                color: "#1d3f79",
                padding: { xs: 0.8, sm: 0.8, md: 0.8 },
                borderRadius: { xs: "3px", sm: "3px", md: "2px" },
                fontSize: { xs: "0.6rem", sm: "0.9rem", md: "1rem" },
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "poppins",
                border: "1px solid #1d3f79",
                width: { xs: "60px", sm: "80px", md: "100px" },
              }}
            >
              0 MWp
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        display="flex"
        justifyContent="center"
        width={{ xs: "50%", lg: "50%" }}
        height={"100%"}
      >
        <Grid
          sx={{
            backgroundColor: "white",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            },
            height: {
              xs: "auto",
              md: "auto",
            },
            position: "relative",
          }}
        >
          <Box width="100%" sx={{ aspectRatio: "4 / 3", maxWidth: "2000px" }}>
            <Suspense fallback={<CircularProgress color="primary" />}>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 8000, center: [85.65, 23.7] }}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const districtName = geo.properties?.district;
                      const isYellow = yellowDistricts.includes(districtName);
                      const isHovered = districtName === hoveredDistrict;

                      return (
                        <g key={geo.rsmKey}>
                          <Geography
                            geography={geo}
                            onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                            onMouseLeave={handleMouseLeave}
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
            </Suspense>
          </Box>
          {showCard && (
            <div
              style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                transform: "translate(-10%, 10%)",
                zIndex: 1000,
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {tooltipContent.status === "completed" && tooltipContent.wp ? (
                <>
                  <Grid
                    sx={{
                      fontSize: {
                        xs: "0.5rem",
                        sm: "0.6rem",
                        md: "0.7rem",
                        lg: "0.9rem",
                      },
                      fontWeight: "200",
                      color: "#ffffff",
                      background: "#1d3f79",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      letterSpacing: { xs: 0, md: 1 },
                      fontFamily: "poppins",
                    }}
                  >
                    {tooltipContent.name} - {tooltipContent.wp}
                  </Grid>
                </>
              ) : tooltipContent.wp ? (
                <>
                  <Grid
                    sx={{
                      fontSize: {
                        xs: "0.4rem",
                        sm: "0.6rem",
                        md: "0.7rem",
                        lg: "0.9rem",
                      },
                      fontWeight: "200",
                      color: "#1d3f79",
                      background: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      border: "1px solid #1d3f79",
                      letterSpacing: { xs: 0, md: 1 },
                      fontFamily: "poppins",
                    }}
                  >
                    {tooltipContent.name} - {tooltipContent.wp}
                  </Grid>
                </>
              ) : (
                <Grid
                  sx={{
                    fontSize: {
                      xs: "0.5rem",
                      sm: "0.6rem",
                      md: "0.7rem",
                      lg: "0.9rem",
                    },
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
                </Grid>
              )}
            </div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Jharkhand;

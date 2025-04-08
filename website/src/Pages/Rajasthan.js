import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Rajasthan = () => {
  const geoUrl = process.env.PUBLIC_URL + "/maps/Rajasthan.geojson";

  const [tooltipContent, setTooltipContent] = useState({
    name: "",
    wp: "",
    status: "",
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [hoveredDistrict, setHoveredDistrict] = useState("");

  const yellowDistricts = [
    "Jhunjhunu",
    "Alwar",
    "Jaipur",
    "Didwana",
    "Jhalawar",
    "Bhilwara",
    "Nagaur",
    "Jodhpur",
    "Sirohi",
    "Jalor",
    "Barmer",
    "Jaisalmer",
    "Bikaner",
    "Hanumangarh",
    "Ganganagar",
  ];

  const districtWpData = {
    Ganganagar: { wp: "2.6 MWp", status: "completed" },
    Hanumangarh: { wp: "2.52 MWp", status: "completed" },
    Bikaner: { wp: "60 MWp", status: "completed" },
    Jaisalmer: { wp: "1.0 Wp", status: "completed" },
    Barmer: { wp: "7.5 MWp", status: "completed" },
    Jalor: { wp: "2.5 MWp", status: "completed" },
    Sirohi: { wp: "1.5 MWp", status: "completed" },
    Jodhpur: { wp: "34.8 MWp", status: "completed" },
    Nagaur: { wp: "2.5 MWp", status: "completed" },
    Bhilwara: { wp: "1.0 MWp", status: "completed" },
    Jhalawar: { wp: "1.5 MWp", status: "completed" },
    Didwana: { wp: "1.0 MWp", status: "completed" },
    Jaipur: { wp: "5.0 MWp", status: "completed" },
    Alwar: { wp: "33.8 MWp", status: "completed" },
    Jhunjhunu: { wp: "5.5 MWp", status: "completed" },
  };

  const handleMouseEnter = (geo, evt) => {
    const name = geo.properties?.Dist_Name;
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

  const handleMouseLeave = () => {
    setShowCard(false);
    setHoveredDistrict("");
  };

  return (
    <Grid
      container
      mt={10}
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
        <Grid>
          <Typography
            fontFamily={"poppins"}
            color="#0a1a44"
            fontSize={{
              xs: "1.5rem",
              sm: "2.2rem",
              md: "2.5rem",
              lg: "2.5rem",
              xl: "3rem",
            }}
            maxWidth={{ lg: "520px", xl: "500px" }}
          >
            Our Presence in{" "}
            <span style={{ fontWeight: "bold" }}>Rajasthan</span>
          </Typography>
        </Grid>

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
              20 MWp
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
              10 MWp
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            width: "800px",
            height: "600px",
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "80%", // 80% height on extra-small screens
                sm: "100%", // 100% on small and above
              },
            }}
          >
            <ComposableMap
              projection="geoMercator"
              width={800}
              height={600}
              style={{ width: "100%", height: "100%" }}
              projectionConfig={{ scale: 4200, center: [74.65, 26.6] }}
            >
              {/* Your Map Layers */}

              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const districtName = geo.properties?.Dist_Name;
                    const isYellow = yellowDistricts.includes(districtName);
                    const isHovered = districtName === hoveredDistrict;

                    return (
                      <g
                        key={geo.rsmKey}
                        transform={
                          isHovered ? "translate(0,-5)" : "translate(0,0)"
                        }
                      >
                        <Geography
                          geography={geo}
                          onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                          onMouseLeave={handleMouseLeave}
                          style={{
                            default: {
                              fill: isYellow ? "#efc82f" : "white",
                              stroke: "black",
                              strokeWidth: 0.4,
                              outline: "none",
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
                position: "absolute",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, 10px)",
                zIndex: 1000,
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {tooltipContent.status === "completed" && tooltipContent.wp ? (
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
                      color: "#ffffff",
                      background: "#1d3f79",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      letterSpacing: 1,
                      fontFamily: "poppins",
                    }}
                  >
                    {tooltipContent.name} - {tooltipContent.wp}
                  </div>
                </>
              ) : tooltipContent.wp ? (
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
                      color: "#1d3f79",
                      background: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      border: "1px solid #1d3f79",
                      letterSpacing: 1,
                      fontFamily: "poppins",
                    }}
                  >
                    {tooltipContent.name} - {tooltipContent.wp}
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
  );
};

export default Rajasthan;

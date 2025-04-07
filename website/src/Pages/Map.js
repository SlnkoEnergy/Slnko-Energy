import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MadhyaPradeshMap = () => {
  const geoUrl = process.env.PUBLIC_URL + "/maps/MadhyaPradesh.geojson";

  const [tooltipContent, setTooltipContent] = useState({
    name: "",
    wp: "",
    status: "",
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [hoveredDistrict, setHoveredDistrict] = useState("");

  const yellowDistricts = [
    "Rajgarh",
    "Mandsaur",
    "Ujjain",
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
    Rajgarh: { wp: "2.4 MWp", status: "ongoing" },
    Mandsaur: { wp: "2.0 MWp", status: "completed" },
    Ujjain: { wp: "2.2 MWp", status: "completed" },
    "Khargone (West Nimar)": { wp: "2.0 MWp", status: "ongoing" },
    Raisen: { wp: "4.4 MWp", status: "ongoing" },
    Chhindwara: { wp: "1.2 MWp", status: "completed" },
    Narsinghpur: { wp: "2.0 MWp", status: "completed" },
    Seoni: { wp: "3.6 MWp", status: "ongoing" },
    Jabalpur: { wp: "4.8 MWp", status: "ongoing" },
    Shahdol: { wp: "2.0 MWp", status: "completed" },
    Sidhi: { wp: "3.0 MWp", status: "ongoing" },
    Rewa: { wp: "2.0 MWp", status: "completed" },
    Chhatarpur: { wp: "4.0 MWp", status: "completed" },
    Sagar: { wp: "7.4 MWp", status: "ongoing" },
    Niwari: { wp: "2.4 MWp", status: "completed" },
    Singrauli: { wp: "1.0 MWp", status: "ongoing" },
  };

  const handleMouseEnter = (geo, evt) => {
    const name = geo.properties?.Dist_Name;
    const data = districtWpData[name] || {};
    const { wp = "", status = "" } = data;

    const path = evt.target;
    const bbox = path.getBoundingClientRect();
    const centerX = bbox.left + bbox.width / 2;
    const centerY = bbox.top + bbox.height / 2;

    setTooltipContent({ name, wp, status });
    setPosition({ x: centerX, y: centerY });
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
      direction="row"
      justifyContent={"space-around"}
      alignItems="center"
      spacing={2}
    >
      <Grid
        item
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={20}
      >
        <Grid>
          <Typography
            fontFamily={"poppins"}
            color="#0a1a44"
            fontSize={"3rem"}
            maxWidth={"500px"}
          >
            Our Presence in{" "}
            <span style={{ fontWeight: "bold" }}>Madhya Pradesh</span>
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
                padding: 0.8,
                borderRadius: "2px",
                fontSize: "1rem",
                fontWeight: 400,

                textAlign: "center",
                fontFamily: "poppins",
                width: "100px",
              }}
            >
              Completed
            </Box>
            <Box
              sx={{
                backgroundColor: "#1d3f79",
                color: "#ffd945",
                padding: 0.8,
                borderRadius: "2px",
                fontSize: "1rem",
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "poppins",
                width: "100px",
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
                padding: 0.8,
                borderRadius: "2px",
                fontSize: "1rem",
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "poppins",
                width: "100px",
              }}
            >
               Ongoing
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                color: "#1d3f79",
                padding: 0.8,
                borderRadius: "2px",
                fontSize: "1rem",
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "poppins",
                border:'1px solid #1d3f79',                
                width: "100px",
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
          <ComposableMap
            projection="geoMercator"
            width={800}
            height={600}
            style={{ width: "100%", height: "100%" }}
            projectionConfig={{ scale: 4500, center: [78.65, 23.5] }} // ⬅️ Increase scale
          >
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

export default MadhyaPradeshMap;

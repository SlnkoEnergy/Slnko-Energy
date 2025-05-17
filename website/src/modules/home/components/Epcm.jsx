import React, { useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useInView } from "framer-motion";
import "../../../css/file.css";

const Epcm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <Box sx={{ backgroundColor: "white", textAlign: "center" }}>
      {/* Banner */}
      <Box
        className="scroll-container"
        sx={{
          backgroundColor: "#ffd945",
          color: "#1d3f79",
          fontWeight: "900",
          fontSize: "1.2rem",
          py: 1,
          letterSpacing: 2,
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
          overflowX: "hidden",
          width: "100%",
        }}
      >
        <span className="scroll-text">
          Empowering Farmers, Businesses, and Communities with Clean Energy.
          Join the solar revolution with Slnko Energy now.
        </span>
      </Box>

      <Typography variant="h3" fontWeight="400" color="#1d3f79" mt={4}>
        Solution we provide
      </Typography>

      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt={4}
        px={10}
        ref={sectionRef}
      >
        {[
          {
            letter: "E",
            title: "ENGINEERING",
            color: "#6daedb",
            description:
              "Creating detailed designs for the solar power plant, including layout, electrical schematics, and structural drawings",
            gradient: "linear-gradient(to bottom, #6daedb, white)",
          },
          {
            letter: "P",
            title: "PROCUREMENT",
            color: "#f44336",
            description:
              "Procurement of all the required materials and equipment necessary for the solar power plant.",
            gradient: "linear-gradient(to bottom, #f44336, white)",
          },
          {
            letter: "C",
            title: "CONSTRUCTION",
            color: "#ffcc00",
            description:
              "Construction and assembly of the solar panels, inverters, and electrical systems on-site.",
            gradient: "linear-gradient(to bottom, #ffcc00, white)",
          },
          {
            letter: "M",
            title: "MANAGEMENT",
            color: "#ff9800",
            description:
              "Overseeing the project implementation and long-term operations of the solar energy system.",
            gradient: "linear-gradient(to bottom, #ff9800, white)",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "100%" : "24%",
              textAlign: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(200px)",
              transition: `opacity 0.6s ease-out ${
                index * 0.2
              }s, transform 0.6s ease-out ${index * 0.2}s`,
            }}
          >
            <Typography
              variant="h1"
              fontWeight="900"
              fontSize={{ xs: "6rem", sm: "6em", md: "10rem", lg: "14rem" }}
              color="#1d3f79"
              textShadow="4px 4px 8px rgba(0,0,0,0.2)"
              lineHeight="1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                transform: isVisible
                  ? "translateX(0)"
                  : `translateX(${index % 2 === 0 ? "-0%" : "0%"})`,
                transition: `transform 0.8s ease-out ${index * 0.3}s`,
              }}
            >
              {item.letter}
            </Typography>

            <Box
              sx={{
                background: item.gradient,
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                height: { xs: "100%", sm: "200px", md: "380px" },
              }}
            >
              <Typography
                fontWeight="900"
                color="white"
                fontSize={{
                  xs: "0.8rem",
                  sm: "0.6rem",
                  md: "1.2rem",
                  lg: "1.4rem",
                }}
                letterSpacing={2}
              >
                {item.title}
              </Typography>
              <Typography
                fontSize={{
                  xs: "0.8rem",
                  sm: "0.6rem",
                  md: "1.2rem",
                  lg: "1.5rem",
                }}
                mt={3}
                p={1}
                color="#1d3f79"
                maxWidth={"300px"}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Epcm;

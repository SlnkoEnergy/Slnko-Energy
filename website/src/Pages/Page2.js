import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import "../CSS/file.css"; // Ensure this import is at the top

const Page2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow for smooth entrance effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ backgroundColor: "white", textAlign: "center" }}>
      {/* Top Banner with scrolling effect */}
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
          overflow: "hidden", // Prevent horizontal overflow
          width: "100%", // Ensure it does not exceed screen width
        }}
      >
        <span className="scroll-text">
          Empowering Farmers, Businesses, and Communities with Clean Energy.
          Join the solar revolution with Slnko Energy now.
        </span>
      </Box>

      {/* Main Title */}
      <Typography variant="h3" fontWeight="400" color="#1d3f79" mt={4}>
        Solution we provide
      </Typography>

      {/* EPCM Row (Force into one row) */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} // Column on small screens, row on large
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt={4}
        px={10}
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
              "Creating detailed designs for the solar power plant, including layout, electrical schematics, and structural drawings",
            gradient: "linear-gradient(to bottom, #f44336, white)",
          },
          {
            letter: "C",
            title: "CONSTRUCTION",
            color: "#ffcc00",
            description:
              "Creating detailed designs for the solar power plant, including layout, electrical schematics, and structural drawings",
            gradient: "linear-gradient(to bottom, #ffcc00, white)",
          },
          {
            letter: "M",
            title: "MANAGEMENT",
            color: "#ff9800",
            description:
              "Creating detailed designs for the solar power plant, including layout, electrical schematics, and structural drawings",
            gradient: "linear-gradient(to bottom, #ff9800, white)",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "100%" : "24%", // Full width on mobile, 4x1 layout on desktop
              textAlign: "center",
              opacity: isVisible ? 1 : 0, // Fade-in effect
              transform: isVisible ? "translateY(0)" : "translateY(30px)", // Slide-up effect
              transition: "opacity 1s ease-out, transform 1s ease-out", // Smooth transition for opacity and transform
            }}
          >
            {/* Large Letter */}
            <Typography
              variant="h1"
              fontWeight="900"
              fontSize={{ xs: "6rem", sm: "6em", md: "10rem", lg: "14rem" }}
              color="#1d3f79"
              textShadow="4px 4px 8px rgba(0,0,0,0.2)"
              lineHeight="1"
              sx={{
                fontFamily: "Montserrat, sans-serif", // Apply Montserrat
                animation: `slideInFromPaper 1s ease-out forwards`,
                animationDelay: `${index * 0.3}s`, // Stagger animation for each letter
                transform: `translateX(${index % 2 === 0 ? "-150%" : "150%"})`, // Start off-screen, left for even index and right for odd
              }}
            >
              {item.letter}
            </Typography>

            {/* Box with Content */}
            <Box
              sx={{
                background: item.gradient,
                textAlign: "center",
                width: { xs: "100%", sm: "100%", md: "100%" },
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

export default Page2;

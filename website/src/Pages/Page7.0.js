import React, { useState, useEffect } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Importing images
import Img1 from "../assets/Tendering.png";
import Img2 from "../assets/Loan.png";
import Img3 from "../assets/Construction.png";
import Img4 from "../assets/Commissioning.png";


const projects = [Img1, Img2, Img3, Img4];

const Page7N = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 600) {
        setVisibleItems(1); // Show single image for mobile
      } else if (window.innerWidth < 900) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1200) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const scrollLeft = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const scrollRight = () =>
    setStartIndex((prev) => Math.min(prev + 1, projects.length - visibleItems));

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Box
        sx={{
          background: "#ffde5b",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          
          overflow: "hidden",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#1D2D5C",
            textAlign: "center",
            fontSize: { xs: "1.4rem", sm: "2rem", md: "2.6rem" },
            mb: { xs: 3, sm: 4, md: 5 },
            textTransform: "uppercase",
          }}
        >
          Projects Delivered
        </Typography>

        {/* Scrollable Cards Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowX: { xs: "auto", sm: "hidden" },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* Left Scroll Button */}
          <IconButton
            onClick={scrollLeft}
            disabled={startIndex === 0}
            sx={{
              position: "absolute",
              left: { xs: 5, sm: 10 },
              background: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { background: "black" },
              zIndex: 10,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Card Container */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2, md: 3 },
              width: "85vw",
              overflow: "hidden",
              justifyContent: "center",
              flexWrap: "nowrap",
            }}
          >
            {projects.slice(startIndex, startIndex + visibleItems).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: visibleItems === 1 ? "90vw" : "100%", // Adjust for single image on mobile
                  maxWidth: { xs: "90vw", sm: "320px", md: "350px" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "250px", sm: "300px", md: "350px" },
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Right Scroll Button */}
          <IconButton
            onClick={scrollRight}
            disabled={startIndex + visibleItems >= projects.length}
            sx={{
              position: "absolute",
              right: { xs: 5, sm: 10 },
              background: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { background: "black" },
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Page7N;

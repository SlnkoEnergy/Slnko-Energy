import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/1N.png";
import img2 from "../assets/2N.png";
import img3 from "../assets/3N.png";
import img4 from "../assets/4N.png";
import img5 from "../assets/5N.png";
import img6 from "../assets/6N.png";
import img7 from "../assets/7N.png";

const projects = [img1, img2, img3, img4, img5, img6, img7];

const Page7N = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Box
        sx={{
          background: "#ffde5b",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 4 },
          overflow: "hidden",
        }}
      >
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

        {/* Image Slider */}
        <Box
          sx={{
            position: "relative",
            width: "85vw",
            height: { xs: "250px", sm: "300px", md: "350px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "10px",
                  boxShadow: "-15px -30px 30px rgba(0, 0, 0, 0.4)",
                }}
              >
                <img
                  src={projects[currentIndex]}
                  alt={`Project ${currentIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Bullet Indicators */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          {projects.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: currentIndex === index ? "#1D2D5C" : "gray",
                margin: "0 5px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Page7N;

import React, { useState, useEffect, useRef } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Importing images
import img1 from "../../assets/11.png";
import img2 from "../../assets/12.png";
import img3 from "../../assets/13.png";
import img4 from "../../assets/14.png";
import img5 from "../../assets/15.png";
import img6 from "../../assets/16.png";
import img7 from "../../assets/17.png";

const projects = [img1, img2, img3, img4, img5, img6, img7];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Page7 = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [inView, setInView] = useState(false); // State to track if the page is in view
  const pageRef = useRef(null); // Ref to target the page section

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 600) {
        setVisibleItems(1);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the page is in view
          if (entry.isIntersecting) {
            setInView(true); // Set the animation to be visible when the page is in view
          } else {
            setInView(false); // Reset the animation if the page is out of view
          }
        });
      },
      {
        threshold: 0.5, // 50% of the page should be visible to trigger the animation
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current); // Start observing the page ref
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current); // Stop observing when the component unmounts
      }
    };
  }, []);

  const scrollLeft = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const scrollRight = () =>
    setStartIndex((prev) => Math.min(prev + 1, projects.length - visibleItems));

  return (
    <div ref={pageRef}>
      <Box
        sx={{
          background: "#ffde5b",
          height: "100vh",
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

          {/* Animated Card Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Trigger animation only when in view
            style={{
              display: "flex",
              gap: "24px",
              width: "85vw",
              justifyContent: "center",
              flexWrap: "nowrap",
              overflow: "hidden",
            }}
          >
            {projects
              .slice(startIndex, startIndex + visibleItems)
              .map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: visibleItems === 1 ? "90vw" : "100%",
                    maxWidth: "350px",
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
          </motion.div>

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
    </div>
  );
};

export default Page7;

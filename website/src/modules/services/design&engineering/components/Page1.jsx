import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import img1 from "../../../../assets/Service_1.png";
import Navbar from "../../../../Components/Navbar";

const goals1 = [
  "Minimise execution and operations complexity",
  "Meet the desired project timeline",
  "Maximise the Power Generation",
];

const goals2 = ["Minimise the Project Cost", "Attain desired durability"];

const circlePositions = [
  { text: goals1[0] },
  { text: goals1[1] },
  { text: goals1[2] },
  { text: goals2[0] },
  { text: goals2[1] },
];

const CircleCard = ({ text }) => (
  <Box
    sx={{
      position: "relative",
      width: { xs: 180, sm: 220, md: 280 },
      height: { xs: 180, sm: 220, md: 280 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 280 280"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle
        cx="140"
        cy="140"
        r="130"
        fill="rgba(255, 255, 255, 0.85)"
        stroke="#ccc"
        strokeWidth="1"
      />
    </svg>

    <Box
      sx={{
        position: "absolute",
        width: "80%",
        height: "100%",
        top: 0,
        left: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 1,
        textAlign: "center",
        fontWeight: "bold",
        color: "#0d47a1",
        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
      }}
    >
      {text}
    </Box>
  </Box>
);

const MotionCircleCard = ({ text, index, isHovered }) => {
  const hoverPositions = [
    { x: -300, y: -50 },
    { x: 0, y: -50 },
    { x: 300, y: -50 },
    { x: -150, y: 180 },
    { x: 150, y: 180 },
  ];

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={isHovered ? hoverPositions[index] : { x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: "0%",
        left: "42%",
        transform: "translate(-50%, 0%)",
      }}
    >
      <CircleCard text={text} />
    </motion.div>
  );
};

const Page1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mt: { xs: 2, md: 2 },
          px: {xs:0, md:2},
          textAlign: "center",
          color: "#0d47a1",
        }}
      >
        <Typography
          fontSize={{ xs: "2.5rem", sm: "3.1rem", md: "3.2rem", lg: "3.5rem" }}
          fontWeight="bold"
        >
          Design & Engineering
        </Typography>

        <Typography
          fontSize={{ xs: "1.2rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem" }}
          fontWeight={"bold"}
          mt={2}
        >
          Innovative design and engineering for a sustainable future
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.1rem" }}
          maxWidth="1300px"
          mx="auto"
          mt={3}
          sx={{ color: "#0d47a1" }}
          fontWeight={500}
          textAlign={"center"}
        >
          Designing of a solar power plant is one of the most critical stages of
          the project which requires a lot of technical expertise. Requires
          expert engineering skills in analyzing the topography of the site,
          selecting technology, and configuring the system. Our dedicated team
          of industry experts, equipped with the latest technical tools and
          software, provides customized design and engineering services to help
          clients achieve their goals.
        </Typography>

        {/* Circles Section */}
        {isSmallScreen ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              mt: 6,
              mb: 8,
            }}
          >
            {circlePositions.map((circle, idx) => (
              <CircleCard key={idx} text={circle.text} />
            ))}
          </Box>
        ) : (
          <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
              position: "relative",
              width: "100%",
              height: 800,
              mt: 12,
            }}
          >
            {circlePositions.map((circle, idx) => (
              <MotionCircleCard
                key={idx}
                text={circle.text}
                index={idx}
                isHovered={isHovered}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Page1;

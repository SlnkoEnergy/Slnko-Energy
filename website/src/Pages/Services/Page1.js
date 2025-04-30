import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import img1 from "../../assets/Service_1.png";
import Navbar from "../../Components/Navbar";
const goals1 = [
  "Minimise execution and operations complexity",
  "Meet the desired project timeline",
  "Maximise the Power Generation",
];

const goals2 = ["Minimise the Project Cost", "Attain desired durability"];

const CircleCard = ({ text }) => (
    <Box
      sx={{
        position: "relative",
        width: { xs: 180, sm: 220, md: 280 },
        height: { xs: 180, sm: 220, md: 280 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* SVG Circle Background */}
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
  
      {/* Text Overlay */}
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
  

const Page1 = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mt:{xs:2, md:2},
          px: 2,
          textAlign: "center",
          color: "#0d47a1",
        }}
      >
        {/* Title */}
        <Typography fontSize={{xs:'2.5rem', sm:'3.1rem', md:'3.2rem', lg:"3.5rem"}} fontWeight="bold">
          Design & Engineering
        </Typography>

        {/* Subtitle */}
        <Typography fontSize={{xs:'1.2rem', sm:'1.3rem', md:'1.4rem', lg:"1.5rem"}} fontWeight={'bold'} mt={2}>
          Innovative design and engineering for a sustainable future
        </Typography>

        {/* Description */}
        <Typography
          fontSize={{xs:'1rem', sm:'1.1rem', md:"1.1rem"}}
          maxWidth="1300px"
          mx="auto"
          mt={3}
          sx={{ color: "#0d47a1" }}
          fontWeight={100}
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

        {/* SVG Circle Goals */}
        {/* First Row – 3 circles */}
        <Grid container spacing={3} justifyContent="center" mt={12}>
          {goals1.map((goal, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={idx}
              display="flex"
              justifyContent="center"
            >
              <CircleCard text={goal} />
            </Grid>
          ))}
        </Grid>

        {/* Second Row – 2 circles */}
        <Grid container spacing={3} justifyContent="center" mt={2}>
          {goals2.map((goal, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={idx}
              display="flex"
              justifyContent="center"
            >
              <CircleCard text={goal} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Page1;

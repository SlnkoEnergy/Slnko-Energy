import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const features = [
  {
    title: "Service with Perspective",
    description:
      "We listen to our clients to ensure that the project meets all aspects such as execution, durability, and operations thereby creating higher value of money.",
  },
  {
    title: "State of the art Engineering",
    description:
      "Equipped with the latest software, technology, and advanced algorithms, we are the pioneer in delivering error-free optimized engineering solutions.",
  },
  {
    title: "Hassle Free Procurement",
    description:
      "With our streamlined and transparent procurement processes, we deliver quality and cost-effective sourcing further ensuring minimum time involvement of our client.",
  },
  {
    title: "Quality Assured",
    description:
      "We don’t believe in assignment, we believe in partnership. Our services include an unwavering attention to quality assurance at every step of the process.",
  },
  {
    title: "Unwavering Support",
    description:
      "As a “Partner to Project” we stay with our clients right from Pre-Bid through Planning, Engineering, Procurement, Execution and Handover.",
  },
  {
    title: "Highly Skilled Team",
    description:
      "We are team of young, energetic and experienced professionals who constantly challenge ourselves to deliver best solutions.",
  },
  {
    title: "Minimized Project Cost",
    description:
      "Our solutions are designed to maximize Return on Investment (ROI) by minimizing project costs while maintaining uncompromising quality.",
  },
  {
    title: "Sustainable Approach",
    description:
      "Through our holistic approach, we prioritize sustainability in all our energy solutions to build a cleaner, greener future.",
  },
];

const Page2 = () => {
  return (
    <Box sx={{ bgcolor: "#ffde59", py: 8, px: 2, height: "100%", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
      <Box textAlign="center" mb={6}>
        <Typography
          fontSize={{
            xs: "2rem",
            sm: "2.1rem",
            md: "2.2rem",
            lg: "2.3rem",
            xl: "2.4rem",
          }}
          fontFamily={"Poppins"}
          fontWeight="bold"
          color="#1d3f79"
        >
          Why SLnko
        </Typography>
        <Typography
          letterSpacing={1}
          fontFamily={"Poppins"}
          fontSize={{
            xs: "0.9rem",
            sm: "1.12rem",
            md: "1.4rem",
            lg: "1.7rem",
            xl: "1.7rem",
          }}
          mt={1}
          fontWeight="bold"
          color="#1d3f79"
        >
          We Don't Believe in Assignment, We Believe in Partnership
        </Typography>
        <Typography
          letterSpacing={1}
          fontSize={{ xs: "0.7rem", sm: "0.85rem", md: "1rem", lg: "1.1rem" }}
          fontWeight={"100"}
          color="#1d3f79"
          fontFamily={"Poppins"}
          maxWidth={{ xs: "md", sm: "600px", md: "710px", lg: "md" }}
          mx="auto"
          mt={1}
        >
          We at SLnko work as one team, bringing the creativity, right
          technology and expertise together to help our clients discover new
          horizons.
        </Typography>
      </Box>

      {/* CARD CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          maxWidth: "1300px",
          mx: "auto",
        }}
      >
        {features.map((feature, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: "100%", sm: "40%", md: "26%", lg: "22%", xl: "23%" }, // 4 cards per row at md+
              minHeight: 150,
            }}
          >
           <Box sx={{ position: "relative", display: "inline-block" }}>
  {/* Shadow */}
  <Box
    sx={{
      position: "absolute",
      top: 1,
      left: 0,
      width: "100%",
      height: "100%",
      bgcolor: "#000",
      transform: "rotate(-11deg)",
      borderRadius: 2,
      zIndex: 0,
      filter: "blur(5px)",
      opacity: 0.3,
    }}
  />

  {/* Card */}
  <Card
    sx={{
      position: "relative",
      bgcolor: "#0c1f4a",
      color: "#fff",
      height: { xs: "auto", sm: "240px" },
      width:{sm:'100%', md:'100%', lg:'240px'},
      borderRadius:0,
      zIndex: 1,
    }}
  >
    <CardContent>
      <Typography
        fontSize={{ xs: "1rem", sm: "1.1rem" }}
        fontFamily={"sans-serif"}
        fontWeight="bold"
        color="#ffde59"
        gutterBottom
      >
        {feature.title}
      </Typography>
      <Typography
        fontSize={{ xs: "0.9rem", sm: "0.9rem" }}
        mt={2}
        fontFamily={"sans-serif"}
        fontWeight={400}
      >
        {feature.description}
      </Typography>
    </CardContent>
  </Card>
</Box>






          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Page2;

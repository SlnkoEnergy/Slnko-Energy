import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const features = [
  {
    title: "Developing a Strategy",
    description:
      "At SLnko, we emphasize Detailed Strategic Work to minimize costs and maximize efficiency. We work in close collaboration with our clients which enables us to tailor our strategies that meet their specific requirements.",
  },
  {
    title: "Vendors Selection",
    description:
      "We at SLnko conduct thorough research and due diligence of vendors basis our internal parameters of quality, reliability and sustainability which allow us to procure quality materials/services at the most competitive prices.",
  },
  {
    title: "Technical Compliance",
    description:
      "Our technical team ensures that all technical parameters and specifications have been taken care before proceeding further with manufacturing/fabrication.",
  },
  {
    title: "Fund Management",
    description:
      "Fund Management is the crucial part of any project and therefore we at SLnko work to enable fund elasticity to our clients. Our strategic planning ensures that only relevant material/vendors reach the site as required at specific point of time.",
  },
  {
    title: "Pre-Dispatch Inspection",
    description:
      "To make sure that the manufactured material is as per approved design/technical parameters, we conduct pre dispatch inspection of the material to mitigate any waste of resources and maintain necessary standards of the product.",
  },
  {
    title: "Logistics and Shipping",
    description:
      "We at SLnko coordinate with logistics and transportation partners to ensure timely and cost-effective product delivery. As part of the SCM, we closely monitor the process to guarantee client satisfaction.",
  },
];

const Scm_Overview = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffde59",
        py: 8,
        px: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          fontWeight="400"
          color="#1d3f79"
        >
          Overview
        </Typography>
        <Typography
          letterSpacing={1}
          fontSize={{ xs: "0.7rem", sm: "0.85rem", md: "1rem", lg: "1.1rem" }}
          fontWeight={"500"}
          color="#1d3f79"
          fontFamily={"Poppins"}
          maxWidth={{ xs: "md", sm: "600px", md: "710px", lg: "70%" }}
          mx="auto"
          mt={1}
        >
          By effectively managing the supply chain, we significantly lower the
          project costs and deliver products faster and more efficiently. Our
          commitment to SCM ensures that our clients receive high-quality
          products and services that meet their needs and exceed their
          expectations. We are constantly striving to improve our SCM processes
          to ensure that we are delivering the best possible value to our
          clients.
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
                  height: { xs: "auto", sm: "260px" },
                  width: { sm: "100%", md: "100%", lg: "240px" },
                  borderRadius: 0,
                  zIndex: 1,
                }}
              >
                <CardContent>
                  <Typography
                    fontSize={{ xs: "1rem", sm: "1.1rem" }}
                    fontFamily={"sans-serif"}
                    fontWeight="bold"
                    color="#ffde59"
                    textAlign={"center"}
                    gutterBottom
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    fontSize={{ xs: "0.9rem", sm: "0.9rem" }}
                    mt={2}
                    fontFamily={"sans-serif"}
                    fontWeight={400}
                    textAlign={"center"}
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

export default Scm_Overview;

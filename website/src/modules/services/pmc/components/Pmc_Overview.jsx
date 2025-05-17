import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const features = [
  {
    title: "Project Planning",
    description:
      "We assist in developing comprehensive project plans, including defining project objectives, determining the optimal solar technology, estimating project costs, conducting feasibility studies, and identifying potential risks and challenges.",
  },
  {
    title: "Project Design & Engineering",
    description:
      "We provide technical expertise system design and engineering including selecting the appropriate solar panels, inverters, mounting structures, and other components based on site-specific conditions, energy requirements, and regulatory compliance.",
  },
  {
    title: "Project Coordination",
    description:
      "Execution of the project, including project scheduling, resource allocation, procurement, subcontractor management, and quality control. We also ensure that the project is executed in accordance with the approved project plan.",
  },
  {
    title: "Quality Assurance and Control",
    description:
      "We establish quality assurance and control processes to ensure that projects meet the specified quality standards. This includes conducting inspections, tests, and audits, and implementing corrective actions as needed.",
  },
  {
    title: "Health, Safety, Environmental",
    description:
      "We ensure that projects comply with health, safety, and environmental regulations and best practices. This includes developing HSE policies, procedures, and plans, conducting safety audits, and implementing environmental management measures.",
  },
  {
    title: "Project Documentation",
    description:
      "We maintain project documentation, prepare progress reports, and provide regular updates to clients and other stakeholders on the status of the projects.",
  },
  {
    title: "Project Closure",
    description:
      "We conduct project reviews, evaluate project outcomes, and prepare project closure reports to assess project success and identify lessons learned for future projects.",
  },
];

const Pmc_Overview = () => {
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
          We stand out from the competition with cutting-edge technology.
          Regular updates to our systems keep us ahead of the game, giving our
          clients top-notch service. Our state-of-the-art tools optimize project
          management, saving time and money for clients. We excel at project
          management with customized support for clients at every stage. After
          recognizing the uniqueness of each project and work closely with
          clients to tailor our services accordingly. Our team of experts
          ensures precise management from planning to completion. Successful
          project management requires communication, which is why we keep
          clients updated at every step. Our team offers frequent progress
          reports and is always available to address any questions or concerns.
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
                  height: { xs: "auto", sm: "280px" },
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
                    gutterBottom
                    textAlign={"center"}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    fontSize={{ xs: "0.9rem", sm: "0.9rem" }}
                    mt={1}
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

export default Pmc_Overview;

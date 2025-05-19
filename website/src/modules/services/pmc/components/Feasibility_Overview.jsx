import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const StyledCard = ({
  title,
  description,
  outerBg = "#324b61",
  innerBg = "#3d4f5f",
}) => {
  return (
    <Box
      sx={{
        bgcolor: outerBg,
        borderRadius: "30px",
        width: 280,
        height: { xs: 220, sm: 270, md: 280, lg: 280 },
        textAlign: "center",
        transform: `rotate(0deg) scale(1.05)`,
        transition: "all 0.4s ease",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
        p: { xs: "15px 0 0 0", sm: "20px 0 0 0" },
        my: 2, // <-- add margin between cards in simple mode
        mx: "auto", // <-- center the cards in simple mode
      }}
    >
      <Box>
        <Typography
          letterSpacing={1}
          fontSize={"1.2rem"}
          fontWeight="bold"
          color="white"
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: innerBg,
          borderRadius: { xs: "30px", sm: "40px" },
          px: { xs: 1, sm: 2 },
          py: 3,
          height: "80%",
          mt: 2,
        }}
      >
        <Typography
          textAlign="center"
          fontSize={{ xs: "0.7rem", sm: "0.75rem", md: "0.75rem" }}
          letterSpacing={0.5}
          color="white"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const Feasibility_Overview = () => {
  const cardData = [
    {
      title: "Survey",
      description:
        "We conduct site survey to evaluate the site's physical characteristics, environmental factors, and potential hazards, including the size of the area, topography, soil conditions, and accessibility of land.",
      outerBg: "#3c444a",
      innerBg: "#43505a",
    },
    {
      title: "Study",
      description:
        "Our technical experts deeply study and analyze the data collected during site survey to design a project that will meet the project’s goals and requirements while minimizing environmental impact and maximizing economic benefits. The study includes but not limited to design & engineering, financial analysis, environmental & social impact assessment, regulatory & permitting requirements and risk assessment.",
      outerBg: "#32442f",
      innerBg: "#3c5638",
    },
    {
      title: "Report",
      description:
        "Based on the detailed study carried out, our team prepares a comprehensive Detailed project Report under the guidance of individual subject matter experts. This report presents the findings and recommendations of study which enable our clients to take right decisions.",
      outerBg: "#2e232e",
      innerBg: "#533d52",
    },
  ];

  return (
    <>
      <Grid
        gap={2}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={{ xs: "1350px", sm: "1430px", md: "650px" }}
        height={"100%"}
        backgroundColor={"#3e3336"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "1.6rem", sm: "1.8rem", md: "1.9rem", lg: "2rem" }}
            color="white"
          >
            Overview
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "1rem", sm: "1.05rem", md: "1.1rem" }}
            color="white"
            maxWidth={{ xs: "95%", sm: "90%", md: "80%", lg: "70%" }}
          >
            A thorough and comprehensive feasibility study is a critical step in
            assessing the viability and success of a solar power plant project,
            and it helps in making informed decisions and planning for a
            successful project implementation. Our team performs a comprehensive
            inspection and survey of the site to identify and mitigate any
            potential risks that could arise during the implementation of the
            project.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 8, sm: 8, md: 2 },
          }}
        >
          {cardData.map((card, index) => (
            <StyledCard
              key={index}
              title={card.title}
              description={card.description}
              outerBg={card.outerBg}
              innerBg={card.innerBg}
              rotation={card.rotation}
            />
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default Feasibility_Overview;

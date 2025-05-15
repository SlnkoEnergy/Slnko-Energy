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
        height: { xs: 220, sm: 240, md: 240, lg: 240 },
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

const Page6 = () => {
  const cardData = [
    {
      title: "Survey",
      description:
        "We review and verify project plans and designs to ensure compliance with industry standards, best practices, and regulatory requirements. This helps ensuring that solar projects are developed with optimal design, efficiency, and sustainability.",
      outerBg: "#3c444a",
      innerBg: "#43505a",
    },
    {
      title: "Study",
      description:
        "We provide quality assurance and quality control (QA/QC) assessments for solar projects, including site inspections, performance testing, and monitoring. This helps ensuring that solar projects are implemented according to industry standards, best practices, and specifications, and that they meet expected performance and safety criteria.",
      outerBg: "#32442f",
      innerBg: "#3c5638",
    },
    {
      title: "Report",
      description:
        "We conduct operational audits of existing solar projects to assess their performance, efficiency, and compliance with operational standards. This helps identifying areas for improvement, optimize operations, and ensure that solar projects continue to perform at their best throughout their operational lifespan.",
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
        minHeight={{ xs: "1380px", sm: "1330px", md: "620px" }}
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
          <Typography textAlign={"center"} fontSize={{xs:'1.6rem', sm:"1.8rem",md:'1.9rem',lg:"2rem"}} color="white">
            Overview
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={{xs:"1rem", sm:'1.05rem', md:"1.1rem"}}
            color="white"
            maxWidth={{ xs: "95%", sm: "90%", md: "80%", lg: "70%" }}
          >
            Advisory and Auditing services play a critical role in the solar energy sector by providing expertise, guidance, and verification to ensure the successful development, implementation, and operation of solar projects. These services can help investors, developers, and stakeholders make informed decisions, manage risks, and ensure compliance with regulatory requirements, industry standards, and best practices.
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

export default Page6;

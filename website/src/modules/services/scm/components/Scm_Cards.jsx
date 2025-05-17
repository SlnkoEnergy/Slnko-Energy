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
        height: { xs: 140, sm: 200, md: 190, lg: 220 },
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

const Scm_Cards = () => {
  const cardData = [
    {
      title: "Market Reach",
      description:
        "Large numbers of clients and continuous project pipeline gives us an advantage to maintain regular flow of orders in the market which helps us in being updated with price trends and new developments. Continuous pipelines allow us to deliver a competitive pricing, superior quality and reliable service to our clients which is difficult to be matched.",
      outerBg: "#3c444a",
      innerBg: "#43505a",
    },
    {
      title: "Rich Experties",
      description:
        "With expertise in optimizing logistics, managing vendor relationships, fostering collaboration and communication, and embracing a continuous improvement mindset, we add incredible value through reducing costs, improving delivery times, and increasing customer satisfaction.",
      outerBg: "#32442f",
      innerBg: "#3c5638",
    },
    {
      title: "Tailored Strategy",
      description:
        "Supply Chain Management process requires a lot of strategized tailoring to meet deliverables on time and within the budget. We enable our customers to customize our vendor management services as per their needs to make deliverables successful.",
      outerBg: "#2e232e",
      innerBg: "#533d52",
    },
  ];

  return (
    <>
      <Grid
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={{ xs: "800px", sm: "1000px", md: "500px" }}
        height={"100%"}
        backgroundColor={"#3e3336"}
      >
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

export default Scm_Cards;

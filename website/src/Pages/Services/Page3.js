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
        height: { xs: 140, sm: 180, md: 200 },
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
          fontSize={{ xs: "0.7rem", sm: "0.9rem" }}
          letterSpacing={0.5}
          color="white"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const Page3 = () => {
  const cardData = [
    {
      title: "How to Bid?",
      description:
        "After going through your tender/customer requirement, we understand and analyze technical and financial parameters defined in the RFP. We manage the technical documentations required for bidding.",
      outerBg: "#3c444a",
      innerBg: "#43505a",
    },
    {
      title: "How much to Bid?",
      description:
        "Our highly skilled team prepares a comprehensive and accurate Bill of Material, Machinery and Resources required in the project. This helps in ensuring the accuracy of the project cost and increase the chances to win the project.",
      outerBg: "#32442f",
      innerBg: "#3c5638",
    },
    {
      title: "Queries & Support",
      description:
        "Our team keeps an eye on the tender filled by our clients. We provide all the supports required during bid evaluation/ Reverse Auction (RA) to ensure a smooth closure.",
      outerBg: "#2e232e",
      innerBg: "#533d52",
    },
  ];

  return (
    <>
      <Grid width={"100%"} display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={"50vh"}  backgroundColor={"#3e3336"}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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

export default Page3;

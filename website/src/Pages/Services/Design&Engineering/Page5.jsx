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
        height: { xs: 140, sm: 200, md: 190, lg:200 },
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
          fontSize={{ xs: "0.7rem", sm: "0.75rem", md:'0.75rem' }}
          letterSpacing={0.5}
          color="white"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const Page5 = () => {
  const cardData = [
    {
      title: "Detailed Engineering",
      description:
        "Our engineering experts ensure that project is completely designed in terms of Civil, Mechanical and Electrical aspects.",
      outerBg: "#3c444a",
      innerBg: "#43505a",
    },
    {
      title: "Budget Calculation",
      description:
        "Our procurement department in close association with our engineering experts prepares a comprehensive and accurate Bill of Material, Machinery, Resources, & Statuary Requirements in the Project along with their backed-up costing. This helps in ensuring increased commercial viability of the project.",
      outerBg: "#32442f",
      innerBg: "#3c5638",
    },
    {
      title: "Construction Support",
      description:
        "We work in tandem with the project team of our clients. We ensure that the ground team gets constant support in terms of engineering throughout the project execution phase whenever required. Through this we ensure that project is installed as per the design finalized during detailed engineering phase.",
      outerBg: "#2e232e",
      innerBg: "#533d52",
    },
  ];

 return (
     <>
       <Grid width={"100%"} display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={{xs:'800px',sm:'1000px',md:"500px"}} height={'100%'}  backgroundColor={"#3e3336"}>
         <Box
           sx={{
             width: "100%",
             height: "100%",
             display: "flex",
             flexDirection: {xs:"column", md:'row'},
             justifyContent: "center",
             alignItems: "center",
             gap: { xs: 8, sm: 8, md:2 },
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

export default Page5;

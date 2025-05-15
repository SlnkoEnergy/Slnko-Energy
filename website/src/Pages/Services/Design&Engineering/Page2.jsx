import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const stepsLeft = [
  "Review of RFQ/RFP documents of client and its details",
  "Study, analyze and suggest on technical requirements of the Bid Document",
  "Data collection from client/ Site",
  "Preliminary concept and design",
  "BOQ Estimation",
];

const stepsRight = [
  "Identification of sources of materials",
  "Estimation of the project cost",
  "Preparation of Project Schedule",
  "Preparation of Bid Documents",
  "Assistance during bid submission and auctions",
];

const StepCard = ({ text }) => (
  <Box display="flex" alignItems="center" mb={2}>
    <Box
      sx={{
        width: 10,
        height: 10,
        border: "2px solid #0d47a1",
        borderRadius: "50%",
        mr: 2,
      }}
    />
    <Paper
      elevation={0}
      sx={{
        px: 2,
        py: 1.5,
        border: "1px solid #0d47a1",
        borderRadius: "20px",
        color: "#1d3f79",
        fontWeight: 500,
        width:'440px',
        height:'40px',
        fontSize:{xs:'0.80rem',sm:'1.05rem'},
        fontFamily:'poppins'
      }}
    >
      {text}
    </Paper>
  </Box>
);

const Page2 = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center", color: "#1d3f79" }}>
      <Typography
        fontSize={'2.5rem'}
        fontWeight="bold"
        gutterBottom
        letterSpacing={1}
      >
        Pre Bid Engineering
      </Typography>

      <Typography
        
        maxWidth="1100px"
        mx="auto"
        fontSize={{ xs: "0.95rem", sm: "1.1rem" }}
        letterSpacing={1}
      >
        Pre-Bid Engineering requires a lot of expertise. For a bidder (EPCs and Developers),
        precise estimation of cost and quantity in the stipulated time is the most important
        for bidding. It helps the bidder not only in winning the bid but also to execute the
        project within initial estimates. Slnko specializes in Pre-Bid engineering for small
        as well as utility-scale solar photovoltaic projects. We have delivered a number of
        successful pre-bid engineering assignments which speaks about our proven experience
        in this specialized service.
      </Typography>

      <Typography
        fontSize={'1.5rem'}
        fontWeight="bold"
        mt={6}
        mb={4}
        letterSpacing={1}
      >
        Pre-bid engineering involves following major steps
      </Typography>

      <Grid gap={{xs:0, lg:10}} container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          {stepsLeft.map((step, idx) => (
            <StepCard key={idx} text={step} />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {stepsRight.map((step, idx) => (
            <StepCard key={idx} text={step} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page2;

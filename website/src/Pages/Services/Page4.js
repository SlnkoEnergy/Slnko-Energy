import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const stepsLeft = [
  "DC Side Designing",
  "AC Side Designing",
  "Electrical Designing",
  "Communication System Designing",
];

const stepsRight = [
  "Civil & Structural Designing",
  "Infrastructure Designing",
  "Transmission Line Designing",
  "Substation Designing",
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
        width: "440px",
        height: "40px",
        fontSize: "1.05rem",
        fontFamily: "poppins",
      }}
    >
      {text}
    </Paper>
  </Box>
);

const Page4 = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, textAlign: "center", color: "#1d3f79" }}>
      <Typography
        fontSize={"2.5rem"}
        fontWeight="bold"
        gutterBottom
        letterSpacing={1}
      >
        Detailed Engineering
      </Typography>

      <Typography
        maxWidth="1100px"
        mx="auto"
        fontSize={{ xs: "0.95rem", sm: "1.1rem" }}
        letterSpacing={1}
      >
        During the detailed engineering phase, the design is refined to a level
        where technical input for procurement and construction can be defined.
        SLnko seamlessly integrates with the engineering department of EPC
        companies and developers.
      </Typography>

      <Typography
        fontSize={"1.5rem"}
        fontWeight="bold"
        mt={6}
        mb={4}
        letterSpacing={1}
      >
        Providing comprehensive engineering solutions for
      </Typography>

      <Grid
        gap={{ xs: 0, lg: 10 }}
        container
        spacing={4}
        justifyContent="center"
      >
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

export default Page4;

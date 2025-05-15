import { Grid, Typography } from "@mui/material";
import React from "react";

const Page3 = () => {
  return (
    <>
      <Grid
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={4}
      >
        <Grid
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ xs: "95%", sm: "90%", md: "85%", lg: "70%" }}
          gap={1}
          mt={4}
        >
          <Typography
            textAlign={"center"}
            fontSize={{
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.3rem",
              lg: "2.5rem",
            }}
            color="#1d3f79"
            fontWeight={"500"}
          >
            Feasibility Study
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={{
              xs: "1.1rem",
              sm: "1.2rem",
              md: "1.4rem",
              lg: "1.5rem",
            }}
            color="#1d3f79"
            fontWeight={"500"}
          >
            Discover renewable energy possibilities with our feasibility study services.
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "0.8rem", sm: "0.9rem", md: "1rem" }}
            color="#1d3f79"
            fontWeight={"400"}
          >
           You can assume full accountability and a comprehensive report with our team of proficient and experienced professionals.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Page3;

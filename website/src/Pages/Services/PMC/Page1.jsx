import { Grid, Typography } from "@mui/material";
import React from "react";

const Page1 = () => {
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
            fontWeight={"550"}
          >
            Project Management Consultancy
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
            "Expertly Delivered: Your Project, Our Priority"
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "0.8rem", sm: "0.9rem", md: "1rem" }}
            color="#1d3f79"
            fontWeight={"400"}
          >
            We bring specialized skills, best practices, and experiences, which
            help our clients to ensure that the project is planned, executed,
            and controlled effectively. Our goal is to provide end-to-end
            project management solutions that enable our clients to successfully
            deliver solar energy projects, maximize their return on investment,
            and contribute to a sustainable and clean energy future.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;

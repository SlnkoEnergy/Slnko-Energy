import { Grid, Typography } from "@mui/material";

const Advisory_Main = () => {
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
            Advisory & Auditing
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
            Maximizing business potential with expert Advisory and Auditing
            services
          </Typography>
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "0.8rem", sm: "0.9rem", md: "1rem" }}
            color="#1d3f79"
            fontWeight={"400"}
          >
            Our expert Advisory and Auditing services help investors,
            developers, and stakeholders make informed decisions, manage risks,
            and ensure compliance with regulatory requirements, industry
            standards, and best practices.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Advisory_Main;

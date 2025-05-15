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
          <Typography textAlign={'center'} fontSize={{xs:'1.8rem',sm:'2.2rem',md:"2.3rem", lg:'2.5rem'}} color="#1d3f79" fontWeight={"550"}>
            Supply Chain Management
          </Typography>
          <Typography textAlign={'center'} fontSize={{xs:'1.1rem', sm:'1.2rem',md:'1.4rem', lg:"1.5rem"}} color="#1d3f79" fontWeight={"500"}>
            Optimizing supply chains and maximizing vendor performance.
          </Typography>
          <Typography textAlign={'center'} fontSize={{xs:'0.8rem', sm:'0.9rem', md:'1rem'}} color="#1d3f79" fontWeight={"400"}>
            Supply Chain is the backbone of every project. With our expertise in
            SCM & Procurement along with strong market relationships, we have
            built in a large pool of trusted vendors to ensure right quality,
            right price & right service at right time enabling us to deliver the
            projects in scheduled timeline.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;

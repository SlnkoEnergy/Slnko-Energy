import { Box, Grid } from "@mui/material";
import img1 from "../../../../assets/Service_2.png";
const Scm_Benefits = () => {
  return (
    <>
      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          component={"img"}
          src={img1}
          alt="services"
          width={{ xs: "300px", sm: "600px", md: "920px", lg: "1200px" }}
          height={{ xs: "200px", sm: "400px", md: "667px", lg: "800px" }}
        ></Box>
      </Grid>
    </>
  );
};

export default Scm_Benefits;

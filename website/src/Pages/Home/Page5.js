import React from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Img1 from "../../assets/PAGE_5.png"; // Replace with your actual image path

const Page5 = () => {
  const theme = useTheme();
  const isBelow1350 = useMediaQuery(theme.breakpoints.down(1350));

  return (
    <Grid
      container
      sx={{
        minHeight: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 10 },
        flexDirection: isBelow1350 ? "column" : "row", // Stack content when below 1350px
        textAlign: isBelow1350 ? "center" : "left",
      }}
    >
      {/* Image Section */}
      <Grid
        item
        xs={12}
        md={isBelow1350 ? 12 : 6}
        display="flex"
        justifyContent="center"
      >
        <Box
          component="img"
          src={Img1}
          alt="Slnko Solar"
          sx={{
            width: { xs: "100%", sm: "90%", md: "95%" }, 
            maxWidth: { xs: "350px", sm: "500px", md: "650px" },
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </Grid>

      {/* Text Section */}
      <Grid
        item
        xs={12}
        md={isBelow1350 ? 12 : 6}
        sx={{
          textAlign: isBelow1350 ? "center" : "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isBelow1350 ? "center" : "flex-start",
          px: { xs: 2, sm: 4, md: 5 },
          maxWidth: { xs: "100%", md: "550px" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#1E293B"
          sx={{ fontSize: { xs: "2rem", sm: "2.6rem", md: "3.3rem" } }}
        >
          A little about SLNKO
        </Typography>
        <Typography
          mt={2}
          color="#475569"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.3rem" },
            textAlign: "justify",
            maxWidth: isBelow1350 ? "90%" : "100%", // Adjust width for better readability
          }}
        >
          At Slnko Energy, we are redefining the solar energy landscape with our
          end-to-end Engineering, Procurement, and Construction (EPC) solutions
          under the Kusum Yojana Scheme. Our team ensures every project meets
          the highest standards of quality, efficiency, and sustainability.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page5;

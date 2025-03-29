import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/4.png";
import img1 from "../assets/location.png";
import img2 from "../assets/call.png";
import img3 from "../assets/mail.png";
const Footer = () => {
  return (
    <>
      <Grid
        container
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        
        sx={{
          background: "linear-gradient(to top right, #00c4cc, #0a1a44)",
        }}
      >
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={1}>
            <img width={"18%"} alt="logo" src={logo} />
          </Box>

          <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          gap={2}
          >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={1}
          >
            <img width={"2%"} alt="logo" src={img1} />
            <Typography color="white">
              2nd Floor, B58B, Block B, Sector 60, Noida, Uttar Pradesh 201301
            </Typography>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={1}
          >
            <img width={"2%"} alt="logo" src={img2} />
            <Typography color="white">+91-6202528672</Typography>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={1}
          >
            <img width={"2%"} alt="logo" src={img3} />
            <Typography color="white">info@slnkoenergy.com</Typography>
          </Box>
          </Box>
        </Grid>

        <Grid></Grid>

        <Grid></Grid>
      </Grid>
    </>
  );
};

export default Footer;

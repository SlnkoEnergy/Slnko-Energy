import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import video from "../assets/Untitled design.mp4";
import kusum from "../assets/Kusum (1).png";
import arrow from "../assets/arrow.png";
import Calculator from "../assets/Calculator.png";
import whatsapp from "../assets/whatsapp.1.png";
const Page1 = () => {
  return (
    <>
      <Grid
        container
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          typeof="mp4"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
          Oops Something Went Wrong.
        </video>
        <Navbar />

        <Grid
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Box
            component="img"
            src={kusum}
            alt="kusum"
            sx={{ width: "300px", height: "auto", display: "block" }}
          />
          <Grid
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              fontSize={"1.5rem"}
              color="black"
              maxWidth={"700px"}
              fontWeight={"600"}
              letterSpacing={1}
              textAlign={"center"}
            >
              Empowering{" "}
              <span style={{ color: "#1750a0" }}>Farmers, Businesses</span> and{" "}
              <span style={{ color: "#1750a0" }}>Communities</span> with Clean
              Energy
            </Typography>

            <Typography
              color="#1750a0"
              fontSize={"1.1rem"}
              letterSpacing={1}
              fontWeight={"100"}
            >
              One-stop platform providing Solar EPC
            </Typography>
            <Typography
              color="#1750a0"
              fontSize={"1.1rem"}
              letterSpacing={1}
              fontWeight={"100"}
            >
              Join the solar revolution with SLNKO ENERGY
            </Typography>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"absolute"}
          pl={4}
          pr={4}
          left={"0%"}
          top={"81%"}
        >
          
            <Box
            component={'img'}
            width={'60px'}
            src={Calculator}
            >

            </Box>
         
          
          

            <Box component={"img"} width={"60px"} src={whatsapp}></Box>
          
        </Grid>

        <Grid
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"absolute"}
          pl={4}
          pr={4}
          left={"0%"}
          top={"90%"}
        >
          <Button
            sx={{
              backgroundColor: "#ffd945",
              color: "#1d3f79",
              fontSize: "0.9rem",
              fontWeight: "900",
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: "20px",
            }}
          >
            Calculate cost for 1 MW
          </Button>
          <Button
            sx={{
              backgroundColor: "#ffd945",
              color: "#1d3f79",
              fontSize: "0.9rem",
              fontWeight: "900",
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: "20px",
              gap:1
            }}
          >
            Get a FREE Consultation{" "}
            <Box component={"img"} width={"20px"} src={arrow}></Box>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;

import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import video from "../../assets/Untitled design.mp4";
import kusum from "../../assets/Kusum (1).webp";
import arrow from "../../assets/arrow.png";
import Calculator from "../../assets/Calculator.png";
import chatbot from "../../assets/chatbot-logo1.png";
import whatsapp from "../../assets/whatsapp.1.png";
// import { Link } from "react-router-dom";  <-- remove this if not navigating
import ChatbotBox from "../Home/Chatbot/Chatbot"; // Import your chatbot component

const Page1 = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Grid
        container
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // p={2}s
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background video */}
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

        {/* Main content */}
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
            sx={{
              width: {
                xs: "200px",
                sm: "240px",
                md: "260px",
                lg: "280px",
                xl: "300px",
              },
              height: "auto",
              display: "block",
            }}
            fetchPriority="high"
            decoding="async"
          />
          <Grid
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.4rem",
                xl: "1.5rem",
              }}
              color="black"
              maxWidth={{ sm: "600px", md: "700px" }}
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
              fontSize={{
                xs: "0.8rem",
                sm: "0.9rem",
                md: "1rem",
                lg: "1rem",
                xl: "1.1rem",
              }}
              letterSpacing={1}
              fontWeight={"500"}
              textAlign={"center"}
            >
              One-stop platform providing Solar EPC
            </Typography>
            <Typography
              color="#1750a0"
              fontSize={{
                xs: "0.8rem",
                sm: "0.9rem",
                md: "1rem",
                lg: "1rem",
                xl: "1.1rem",
              }}
              letterSpacing={1}
              fontWeight={"500"}
              textAlign={"center"}
            >
              Join the solar revolution with SLNKO ENERGY
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom icon row */}
        <Grid
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"absolute"}
          pl={4}
          pr={4}
          left={"0%"}
          top={{ xs: "85%", sm: "84%", md: "83%", lg: "82%", xl: "81%" }}
        >
          <Box
            alt="calculator"
            component={"img"}
            sx={{ cursor: "pointer" }}
            width={{
              xs: "30px",
              sm: "35px",
              md: "40px",
              lg: "50px",
              xl: "60px",
            }}
            src={Calculator}
          />

          <Grid
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            {!chatOpen && (
              <Box
                alt="chatbot"
                component="img"
                onClick={() => setChatOpen(true)}
                width={{
                  xs: "30px",
                  sm: "35px",
                  md: "40px",
                  lg: "50px",
                  xl: "60px",
                }}
                src={chatbot}
                sx={{ cursor: "pointer" }}
              />
            )}
          </Grid>
        </Grid>

        {/* Chatbot Box conditionally rendered */}
        {chatOpen && <ChatbotBox onClose={() => setChatOpen(false)} />}

        {/* Button Row */}
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
              fontSize: {
                xs: "0.5rem",
                sm: "0.65rem",
                md: "0.7rem",
                lg: "0.8rem",
                xl: "0.9rem",
              },
              fontWeight: "900",
              paddingLeft: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
              paddingRight: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
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
              fontSize: {
                xs: "0.5rem",
                sm: "0.65rem",
                md: "0.7rem",
                lg: "0.8rem",
                xl: "0.9rem",
              },
              fontWeight: "900",
              paddingLeft: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
              paddingRight: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
              paddingTop: 1,
              paddingBottom: 1,
              borderRadius: "20px",
              gap: { xs: 0.5, sm: 1 },
            }}
          >
            Get a FREE Consultation{" "}
            <Box
              alt="arrow"
              component={"img"}
              width={{
                xs: "12px",
                sm: "13px",
                md: "14px",
                lg: "16px",
                xl: "20px",
              }}
              src={arrow}
            ></Box>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;

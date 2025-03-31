import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../assets/4.png";
import img1 from "../assets/location.png";
import img2 from "../assets/call.png";
import img3 from "../assets/mail.png";
import img4 from "../assets/insta.png";
import img5 from "../assets/linkedin (1).png";
import img6 from "../assets/fb.png";
import img7 from "../assets/yt.png";
const Footer = () => {
  return (
    <Grid
      container
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={10}
      sx={{
        background: "linear-gradient(to top right, #00c4cc, #0a1a44)",
      }}
    >
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* Left Section */}
        <Grid item display="flex" flexDirection="column" width="30%" gap={4}>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
          >
            <img width="60%" alt="logo" src={logo} />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            gap={2}
          >
            <Box display="flex" flexDirection="row" gap={1} alignItems="center">
              <img width="5%" alt="location" src={img1} />
              <Typography maxWidth={"340px"} color="white">
                2nd Floor, B58B, Block B, Sector 60, Noida, Uttar Pradesh 201301
              </Typography>
            </Box>

            <Box display="flex" flexDirection="row" gap={1} alignItems="center">
              <img width="5%" alt="call" src={img2} />
              <Typography color="white">+91-6202528672</Typography>
            </Box>

            <Box display="flex" flexDirection="row" gap={1} alignItems="center">
              <img width="5%" alt="mail" src={img3} />
              <Typography color="white">info@slnkoenergy.com</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item display="flex" flexDirection="row" gap={10}>
          {/* First Row */}
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            {/* Information */}
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography color="white" fontSize="2rem" gutterBottom>
                Information
              </Typography>
              <List>
                {[
                  "About",
                  "Solutions we provide",
                  "Achievements",
                  "Service we provide",
                  "Our Clients",
                  "Testimonials",
                ].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            {/* Our Presences */}
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography color="white" fontSize="2rem" gutterBottom>
                Our Presences
              </Typography>
              <List>
                {["Madhya Pradesh", "Rajasthan", "Uttar Pradesh"].map(
                  (text) => (
                    <ListItem key={text} disablePadding>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          color: "white",
                          fontSize: "1.2rem",
                        }}
                      />
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Grid>

          {/* Second Row */}
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            {/* Media */}
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography color="white" fontSize="2rem" gutterBottom>
                Media
              </Typography>
              <List>
                {["Projects Delivered", "Blogs", "News"].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Group Companies */}
            <Box
              marginBottom={"40px"}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Typography color="white" fontSize="2rem" gutterBottom>
                Group Companies
              </Typography>
              <List>
                {["SLnko Infra", "SLnko Foundation"].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        marginBottom={'30px'}
      >
        <Box
        width={'100%'}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography color="#f4efe5" fontSize="1.2rem">
            Follow Us On
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <img width={"3%"} alt="img1" src={img4} />
            <img width={"3%"} alt="img1" src={img5} />
            <img width={"3%"} alt="img1" src={img6} />
            <img width={"3%"} alt="img1" src={img7} />
          </Box>
        </Box>

        <Box
        
        width={'100%'}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        >
          <Typography color="#f4efe5" fontSize="1rem">
            © 2025 All rights reserved. Slnko Energy Pvt. Ltd.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

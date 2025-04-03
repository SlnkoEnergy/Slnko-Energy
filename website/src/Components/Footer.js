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
      minHeight="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
      gap={10}
      sx={{
        background: "linear-gradient(to top right, #00c4cc, #0a1a44)",
      }}
    >
      <Grid
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ xs: 8, sm: 8, md: 6, lg: 4 }}
      >
        {/* Left Section */}
        <Grid
          item
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", sm: "30%" }}
          gap={4}
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "80%", md: "80%", lg: "60%" },
              }}
              alt="logo"
              src={logo}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            gap={2}
          >
            <Box display="flex" flexDirection="row" gap={1} alignItems="center">
              <Box
                component="img"
                sx={{
                  width: { xs: "5%", sm: "8%", md: "8%", lg: "6%" },
                }}
                alt="location"
                src={img1}
              />
              <Typography
                fontSize={{ xs: "1rem", sm: "0.8rem", md: "1rem" }}
                maxWidth={"340px"}
                color="white"
              >
                2nd Floor, B58B, Block B, Sector 60, Noida, Uttar Pradesh 201301
              </Typography>
            </Box>

            <Box display="flex" flexDirection="row" gap={1} alignItems="center">
              <Box
                component="img"
                sx={{
                  width: { xs: "5%", sm: "8%", md: "8%", lg: "6%" },
                }}
                alt="call"
                src={img2}
              />
              <Typography
                fontSize={{ xs: "1rem", sm: "0.8rem", md: "1rem" }}
                color="white"
              >
                +91-6202528672
              </Typography>
            </Box>

            <Box display="flex" flexDirection="row" gap={1} alignItems="center">
              <Box
                component="img"
                sx={{
                  width: { xs: "5%", sm: "8%", md: "8%", lg: "6%" },
                }}
                alt="mail"
                src={img3}
              />
              <Typography
                fontSize={{ xs: "1rem", sm: "0.8rem", md: "1rem" }}
                color="white"
              >
                info@slnkoenergy.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          width={{ xs: "100%", sm: "50%", md: "50%", lg: "40%" }}
          display="flex"
          flexDirection="row"
          justifyContent={"space-between"}
          gap={{ xs: 2 }}
        >
          {/* First Row */}
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            {/* Information */}
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography
                color="white"
                fontSize={{
                  xs: "1.2rem",
                  sm: "1rem",
                  md: "1.3rem",
                  lg: "1.5rem",
                }}
                gutterBottom
              >
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
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.7rem",
                          md: "0.8rem",
                          lg: "1rem",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            {/* Our Presences */}
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography
                color="white"
                fontSize={{
                  xs: "1.2rem",
                  sm: "1rem",
                  md: "1.3rem",
                  lg: "1.5rem",
                }}
                gutterBottom
              >
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
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.7rem",
                            md: "0.8rem",
                            lg: "1rem",
                          },
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
              <Typography
                color="white"
                fontSize={{
                  xs: "1.2rem",
                  sm: "1rem",
                  md: "1.3rem",
                  lg: "1.5rem",
                }}
                gutterBottom
              >
                Media
              </Typography>
              <List>
                {["Projects Delivered", "Blogs", "News"].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        color: "white",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.7rem",
                          md: "0.8rem",
                          lg: "1rem",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Typography
                color="white"
                fontSize={{
                  xs: "1.2rem",
                  sm: "1rem",
                  md: "1.3rem",
                  lg: "1.5rem",
                }}
                gutterBottom
              >
                Career
              </Typography>
            </Box>

            {/* Group Companies */}
            <Box
              marginBottom={{ xs: "30px", sm: "25px", md: "25px", lg: "28px" }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Typography
                color="white"
                fontSize={{
                  xs: "1.2rem",
                  sm: "1rem",
                  md: "1.3rem",
                  lg: "1.5rem",
                }}
                gutterBottom
              >
                Group Companies
              </Typography>
              <List>
                {["SLnko Infra", "SLnko Foundation"].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        color: "white",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.7rem",
                          md: "0.8rem",
                          lg: "1rem",
                        },
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
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "flex-start" }}
        alignItems={{ xs: "center" }}
        marginBottom={"30px"}
        gap={{ xs: 4 }}
      >
        <Box
          width={"60%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Typography
              color="#f4efe5"
              fontSize={{ md: "1.1rem", lg: "1.2rem" }}
            >
              Follow Us On
            </Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "10%", sm: "8%", md: "6%", lg: "4%" },
              }}
              alt="img1"
              src={img4}
            />
            <Box
              component="img"
              sx={{
                width: { xs: "10%", sm: "8%", md: "6%", lg: "4%" },
              }}
              alt="img1"
              src={img5}
            />
            <Box
              component="img"
              sx={{
                width: { xs: "10%", sm: "8%", md: "6%", lg: "4%" },
              }}
              alt="img1"
              src={img6}
            />
            <Box
              component="img"
              sx={{
                width: { xs: "10%", sm: "8%", md: "6%", lg: "4%" },
              }}
              alt="img1"
              src={img7}
            />
          </Box>
        </Box>

        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={{ xs: "center", sm: "flex-start" }}
          alignItems={{ xs: "center", sm: "flex-end" }}
        >
          <Typography
            color="#f4efe5"
            fontSize={{ xs: "0.8rem", sm: "0.8rem", md: "1rem" }}
          >
            © 2025 All rights reserved. Slnko Energy Pvt. Ltd.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
// developing this website//

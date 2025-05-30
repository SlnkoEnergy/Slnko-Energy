import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import logo from "../assets/1.png";
import img1 from "../assets/2.png";
import img2 from "../assets/3.png";
import { Link } from "react-router-dom";
import { Typography, useMediaQuery } from "@mui/material";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Kusum Yojana", path: "/pm-kusum-yojana" },
  { label: "Careers", path: "/careers" },
  { label: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMdScreen = useMediaQuery("(max-width:1200px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mr={{lg:6,xl:12}}
      >
        <Box 
        component={'img'}
        alt="logo"
        src={logo}
        width={{xs:'120px',sm:'140px', md:'150px'}}
        height={{xs:'60px',sm:'70px',md:'75px'}}
        />
      </Grid>

      {isMdScreen ? (
        <>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 200,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  
                }}
              >
                {navItems.map(({ label, path }, index) => (
                  <Link
                    key={index}
                    to={path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="h6"
                      color="black"
                      fontSize={"1rem"}
                      sx={{
                        cursor: "pointer",
                        transition: "color 0.4s",
                        "&:hover": { color: "#214b7b" },
                      }}
                    >
                      {label}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  marginTop: "auto",
                }}
              >
                <img width={"100px"} height={"70px"} alt="infra" src={img1} />
                <img width={"100px"} height={"70px"} alt="foundation" src={img2} />
              </Box>
            </Box>
          </Drawer>
        </>
      ) : (
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            gap: "30px",
          }}
        >
          {navItems.map(({ label, path }, index) => (
            <Link key={index} to={path} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="black"
                sx={{
                  cursor: "pointer",
                  transition: "color 0.4s",
                  "&:hover": { color: "#214b7b" },
                }}
              >
                {label}
              </Typography>
            </Link>
          ))}
        </Grid>
      )}

      {!isMdScreen && (
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <img width={"110px"} height={"100px"} alt="infra" src={img1} />
          <img width={"110px"} height={"100px"} alt="foundation" src={img2} />
        </Grid>
      )}
    </Grid>
  );
};

export default Navbar;

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const StyledContactCard = ({
  title,
  content,
  icon,
  outerBg,
  innerBg,
  isEmail = false,
  isPhone = false,
  isLocation = false,
  link = "",
}) => (
  <Box
    sx={{
      bgcolor: outerBg,
      borderRadius: "30px",
      width: 280,
      height: { xs: 140, sm: 200, md: 190, lg: 200 },
      textAlign: "center",
      transform: `rotate(0deg) scale(1.05)`,
      transition: "all 0.4s ease",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
      p: { xs: "15px 0 0 0", sm: "20px 0 0 0" },
      my: 2,
      mx: "auto",
    }}
  >
    <Box>
      <Typography
        letterSpacing={1}
        fontSize={"1.2rem"}
        fontWeight="bold"
        color="white"
      >
        {title}
      </Typography>
    </Box>
    <Box
      sx={{
        bgcolor: innerBg,
        borderRadius: { xs: "30px", sm: "40px" },
        px: { xs: 1, sm: 2 },
        py: 3,
        height: "80%",
        mt: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box sx={{ fontSize: 30, color: "white" }}>{icon}</Box>
      {(isEmail || isPhone || isLocation) ? (
        <Typography
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          textAlign="center"
          fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
          letterSpacing={0.5}
          color="white"
          sx={{
            textDecoration: "underline",
            wordBreak: "break-word",
            whiteSpace: isLocation ? "pre-line" : "normal",
          }}
        >
          {content}
        </Typography>
      ) : (
        <Typography
          textAlign="center"
          fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
          letterSpacing={0.5}
          color="white"
          whiteSpace="pre-line"
        >
          {content}
        </Typography>
      )}
    </Box>
  </Box>
);

const ContactMode = () => {
  const cardData = [
    {
      title: "Phone",
      content: "+91 6202528672",
      icon: <FaPhoneAlt />,
      outerBg: "#2e3741",
      innerBg: "#3f4d5a",
      isPhone: true,
      link: "tel:+916202528672",
    },
    {
      title: "Address",
      content: `Slnko Energy Pvt. Ltd.\n2nd Floor, B58B, Block B,\nSector 60, Noida, Uttar Pradesh 201301`,
      icon: <HiLocationMarker />,
      outerBg: "#32442f",
      innerBg: "#3c5638",
      isLocation: true,
      link: "https://maps.app.goo.gl/8vNyApxbTnGkXnbw7",
    },
    {
      title: "Mail",
      content: "info@slnkoenergy.com",
      icon: <MdEmail />,
      outerBg: "#3f2d2d",
      innerBg: "#5c4040",
      isEmail: true,
      link: "https://mail.google.com/mail/?view=cm&to=info@slnkoenergy.com",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f8f8", py: 8, px: 2 }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight="bold" color="#1e293b">
          Reach Out for Reliable Solar Solutions <br /> and Expert Guidance
        </Typography>
        <Typography
          variant="body1"
          maxWidth="800px"
          mx="auto"
          mt={2}
          color="#475569"
        >
          At Slnko Energy, our expert team delivers end-to-end services for
          ground-mounted systems and solar park installations. From system
          design and engineering to procurement, construction, and
          commissioning — we offer a one-stop solution for all your solar power
          project needs.
          <br />
          Get in touch today and let us help you power your land with the sun.
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        {cardData.map((card, index) => (
          <Grid item key={index}>
            <StyledContactCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactMode;

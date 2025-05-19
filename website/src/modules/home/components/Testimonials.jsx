import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

import { FaQuoteLeft } from "react-icons/fa";
import Img1 from "../../../assets/client_logo/1.png";
import Img2 from "../../../assets/client_logo/2.png";
import Img3 from "../../../assets/client_logo/3.png";
import Img4 from "../../../assets/client_logo/4.png";
import Img5 from "../../../assets/client_logo/5.png";
import Img6 from "../../../assets/client_logo/6.png";
import Img7 from "../../../assets/client_logo/7.png";
import Img8 from "../../../assets/client_logo/8.png";
import Img9 from "../../../assets/client_logo/9.png";
import Img10 from "../../../assets/client_logo/10.png";
import Img11 from "../../../assets/client_logo/11.png";
import Img12 from "../../../assets/client_logo/12.png";
import Img13 from "../../../assets/client_logo/13.png";
import Img14 from "../../../assets/client_logo/14.png";
import Img15 from "../../../assets/client_logo/15.png";
import Img16 from "../../../assets/client_logo/16.png";
import Img17 from "../../../assets/client_logo/17.png";
import Img18 from "../../../assets/client_logo/18.png";
import Img19 from "../../../assets/client_logo/19.png";
import Img20 from "../../../assets/client_logo/20.png";
import Img21 from "../../../assets/client_logo/21.png";
import Img22 from "../../../assets/client_logo/22.png";
import Img23 from "../../../assets/client_logo/23.png";
import Img24 from "../../../assets/client_logo/24.png";
import Img25 from "../../../assets/client_logo/25.png";
import Img26 from "../../../assets/client_logo/26.png";
import Img27 from "../../../assets/client_logo/27.png";
import Img28 from "../../../assets/client_logo/28.png";
import Img29 from "../../../assets/client_logo/29.png";

const clients = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
  Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
  Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29,
];

const testimonials = [
  {
    name: "Ingrid Correa",
    avatar: "avatar1.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Hilford Press",
    avatar: "avatar2.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    name: "Daichi Hamada",
    avatar: "avatar3.jpg",
    quote:
      "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
];


function Testimonials() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {/* Our Clients Section */}
      <Box sx={{ backgroundColor: "#fff", py: 6, textAlign: "center", overflow: "hidden" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            color: "#1d4ed8",
            fontWeight: "bold",
            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.5rem"
            }
          }}
        >
          Our Clients
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 4, md: 6 },
              animation: "scroll-left 10s linear infinite",
              minWidth: "100%",
            }}
          >
            {[...clients, ...clients].map((logo, index) => (
              <Box key={index} sx={{ flex: "0 0 auto" }}>
                <img
                  src={logo}
                  alt={`client-${index}`}
                  style={{
                    height: isXs ? "60px" : isMd ? "90px" : "130px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          <style>
            {`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}
          </style>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          background: "linear-gradient(to bottom right, #00c4cc, #0a1a44)",
          color: "white",
          py: 8,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem"
            }
          }}
        >
          Testimonials
        </Typography>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              animation: "scroll-left 10s linear infinite",
              gap: { xs: 2, sm: 3, md: 4 },
              minWidth: "100%",
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: isXs ? 220 : 280,
                  maxWidth: 320,
                  px: 3,
                  py: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "0 0 auto",
                }}
              >
                <FaQuoteLeft
                  size={24}
                  style={{ marginBottom: 16, color: "#4dd0e1" }}
                />
                <Typography sx={{ mb: 3, color: "#b2ebf2", fontSize: "0.95rem" }}>
                  {item.quote}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    src={`/images/testimonials/${item.avatar}`}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#80deea", fontSize: "0.9rem" }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <style>
            {`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}
          </style>
        </Box>
      </Box>

      {/* Footer Line */}
      <Box sx={{ backgroundColor: "#004d40", height: 1 }} />
    </Box>
  );
}

export default Testimonials;

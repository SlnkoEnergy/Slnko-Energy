import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assests/publication.jpg",
  "/assests/certificate1.jpg",
  "/assests/iso.jpg",
  "/assests/startup.jpg",
  "/approval-letter.jpg"
];

const Page5 = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: "80%", mx: "auto", mt: 5 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Certificates
      </Typography>
      <Slider {...settings}>
        {images.map((img, i) => (
          <Box
            key={i}
            className="slide-card"
            sx={{
              px: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={img} alt={`Certificate ${i + 1}`} className="carousel-image" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Page5;

import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../CSS/file.css"; // Make sure this CSS file is imported

const images = [
  "/assests/publication.jpg",
  "/assests/certificate1.jpg",
  "/assests/iso.jpg",
  "/assests/startup.jpg",
  "/assests/approval-letter.jpg",
];

const Page5 = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: true,
    beforeChange: (oldIndex, newIndex) => {
      setCenterIndex(newIndex);
    },
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
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography mb={8} mt={5} variant="h4" fontWeight="bold" gutterBottom>
          Certificates
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "90%", md: "55%" },
          mx: "auto",
          mt: 5,
          mb: 10,
        }}
      >
        <Slider {...settings}>
          {images.map((img, i) => {
            let className = "carousel-image";

            if (i === centerIndex) {
              className += " center";
            } else if (
              i === (centerIndex - 1 + images.length) % images.length
            ) {
              className += " left";
            } else if (
              i === (centerIndex + 1) % images.length
            ) {
              className += " right";
            }

            return (
              <Box
                key={i}
                className="slide-card"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={img} alt={`Certificate ${i + 1}`} className={className} />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Page5;

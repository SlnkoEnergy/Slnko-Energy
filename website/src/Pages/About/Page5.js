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
    arrows: false,
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
    <Box sx={{   }}display="flex" flexDirection={'column'} justifyContent="center" alignItems="center">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography mb={8} mt={5} variant="h4" fontWeight="bold" gutterBottom>
          Certificates
        </Typography>
      </Box>
      <Box
  sx={{
    
    maxWidth: { sm: "70%", md: "900px", lg:'1000px' }, // you can adjust 800px or any value
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
                  ml:{sm:'0px',md:'10px',lg:'25px'},
                  mr:{sm:'0px', md:'0px'}
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

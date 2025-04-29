import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const StyledCard = ({
  title,
  description,
  outerBg = "#324b61",
  innerBg = "#3d4f5f",
  rotation = "0deg",
  top = "0px",
  left = "0px",
  hoveredTop = "0px",
  hoveredLeft = "0px",
  zIndex = 1,
  hovered = false,
  simple = false,   // <-- NEW
}) => {
  return (
    <Box
      sx={{
        position: simple ? "static" : "absolute",
        top: simple ? "auto" : (hovered ? hoveredTop : top),
        left: simple ? "auto" : (hovered ? hoveredLeft : left),
        zIndex: zIndex,
        bgcolor: outerBg,
        borderRadius: "30px",
        width: 280,
        height: {xs:140, sm:180, md:200},
        textAlign: "center",
        transform: simple
          ? "none"
          : (hovered ? `rotate(0deg) scale(1.05)` : `rotate(${rotation}deg)`),
        transition: "all 0.4s ease",
        boxShadow: hovered
          ? "0px 10px 25px rgba(0,0,0,0.5)"
          : "0px 5px 15px rgba(0,0,0,0.3)",
        p: { xs: '15px 0 0 0', sm: '20px 0 0 0' },
        my: simple ? 2 : 0,   // <-- add margin between cards in simple mode
        mx: "auto",           // <-- center the cards in simple mode
      }}
    >
      <Box>
        <Typography
          letterSpacing={1}
          fontSize={'1.2rem'}
          fontWeight="bold"
          color="white"
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: innerBg,
          borderRadius: { xs: '30px', sm: '40px' },
          px: { xs: 1, sm: 2 },
          py: 3,
          height: '80%',
          mt: 2,
        }}
      >
        <Typography
          textAlign="center"
          fontSize={{ xs: '0.7rem', sm: '0.9rem' }}
          letterSpacing={0.5}
          color="white"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const Page3 = () => {
  const [hovered, setHovered] = useState(false);
  const isDesktop = useMediaQuery('(min-width:900px)'); // <-- important

  const cardData = [
    {
      title: "Analysis",
      description: "Our team assesses project needs site conditions and client goals identifying opportunities and challenges to customize solutions and set a strong Adopt foundation.",
      outerBg: "#3c444a",
      innerBg: "#43505a",
      rotation: -16,
      top: "60px",
      left: "30px",
      hoveredLeft: '-70px',
      hoveredTop: '-60px',
      zIndex: 2,
    },
    {
      title: "Develop",
      description: "Team collaborates on innovative, efficient, and sustainable solutions drawing expertise to exceed client's expectations.",
      outerBg: "#32442f",
      innerBg: "#3c5638",
      rotation: 0,
      top: "-60px",
      left: "250px",
      hoveredLeft: '250px',
      hoveredTop: '-60px',
      zIndex: 3,
    },
    {
      title: "Optimize",
      description: "We constantly improve designs and strategies for peak efficiency and value, using rigorous quality control and cutting-edge tools to boost performance and maximize client ROI.",
      outerBg: "#3e3336",
      innerBg: "#533f42",
      rotation: -32,
      top: "180px",
      left: "140px",
      hoveredLeft: '80px',
      hoveredTop: '260px',
      zIndex: 4,
    },
    {
      title: "Present",
      description: "Provide clients with refined designs and plans, maintaining clear communication and stakeholder confidence, while offering continuous support throughout construction and commissioning.",
      outerBg: "#033c47",
      innerBg: "#055968",
      rotation: 15,
      top: "160px",
      left: "380px",
      hoveredLeft: '400px',
      hoveredTop: '260px',
      zIndex: 6,
    },
    {
      title: "TAT",
      description: "Emphasizes prompt execution, focusing on efficiency and quality. Our project management team tracks progress, allocates resources, and addresses challenges for swift, seamless delivery.",
      outerBg: "#4e3d0e",
      innerBg: "#715611",
      rotation: 34,
      top: "40px",
      left: "480px",
      hoveredLeft: '570px',
      hoveredTop: '-60px',
      zIndex: 1,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#2b2728",
        color: "#fff",
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minHeight: "600px",
      }}
    >
      <Box mb={{xs: '0px', md:'80px'}}>
        <Typography
          fontSize={{ xs: '2.1rem', sm: '2.2rem', md: '2.3rem', lg: '2.5rem' }}
          align="center"
          fontWeight="bold"
          color="#ffde59"
          gutterBottom
        >
          Our Process
        </Typography>
        <Typography
          variant="body1"
          align="center"
          fontSize={{ xs: '0.8rem', sm: '1rem', md: "1rem", lg: '1.1rem' }}
          fontWeight={100}
          textAlign="center"
          sx={{ maxWidth: { xs: '95%', lg: "80%" }, mx: "auto", mb: 6, letterSpacing: 0.5 }}
        >
          Our commitment to excellence is reflected in our unique ADOPT methodology, ensuring we consistently deliver exceptional results for our clients.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          position: isDesktop ? "relative" : "static",
          width: isDesktop ? "800px" : "100%",
          height: isDesktop ? "700px" : "auto",
          display: "flex",
          flexDirection: isDesktop ? "initial" : "column",
          alignItems: "center",
          gap:isDesktop ? 0 : 6
        }}
        onMouseEnter={() => isDesktop && setHovered(true)}
        onMouseLeave={() => isDesktop && setHovered(false)}
      >
        {cardData.map((card, index) => (
          <StyledCard
            key={index}
            title={card.title}
            description={card.description}
            outerBg={card.outerBg}
            innerBg={card.innerBg}
            rotation={card.rotation}
            hoveredTop={card.hoveredTop}
            hoveredLeft={card.hoveredLeft}
            top={card.top}
            left={card.left}
            zIndex={card.zIndex}
            hovered={hovered}
            simple={!isDesktop} // <-- important
          />
        ))}
      </Box>
    </Box>
  );
};

export default Page3;

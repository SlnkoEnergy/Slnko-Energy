import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// StyledCard with rotation and hover effects
const StyledCard = ({ title, description, outerBg = "#324b61", innerBg = "#3d4f5f", rotation = 0 }) => {
  return (
    <Box
      sx={{
        bgcolor: outerBg,
        borderRadius: "30px",
        width: 280,
        mx: "auto",
        textAlign: "center",
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
        "&:hover": {
          transform: "rotate(0deg) scale(1.05)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.5)",
        },
        p: { xs: '15px 0 0 0', sm: '20px 0 0 0' },
      }}
    >
      <Box>
        <Typography letterSpacing={1} fontSize={'1.2rem'} fontWeight="bold" color="white">
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
        <Typography textAlign={'center'} fontSize={{ xs: '0.7rem', sm: '0.9rem' }} letterSpacing={0.5} color="white">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const cardData = [
  {
    title: "Analysis",
    description:
      "Our team assesses project needs site conditions and client goals identifying opportunities and challenges to customize solutions and set a strong Adopt foundation.",
    outerBg: "#3c444a",
    innerBg: "#43505a",
    rotation: -5,
  },
  {
    title: "Develop",
    description:
      "Team collaborates on innovative, efficient, and sustainable solutions drawing expertise to exceed client's expectations.",
    outerBg: "#32442f",
    innerBg: "#3c5638",
    rotation: 5,
  },
  {
    title: "Optimize",
    description:
      "We constantly improve designs and strategies for peak efficiency and value, using rigorous quality control and cutting-edge tools to boost performance and maximize client ROI.",
    outerBg: "#3e3336",
    innerBg: "#533f42",
    rotation: -3,
  },
  {
    title: "Present",
    description:
      "Provide clients with refined designs and plans, maintaining clear communication and stakeholder confidence, while offering continuous support throughout construction and commissioning.",
    outerBg: "#033c47",
    innerBg: "#055968",
    rotation: 3,
  },
  {
    title: "TAT",
    description:
      "Emphasizes prompt execution, focusing on efficiency and quality. Our project management team tracks progress, allocates resources, and addresses challenges for swift, seamless delivery.",
    outerBg: "#4e3d0e",
    innerBg: "#715611",
    rotation: 0,
  },
];

const Page3 = () => {
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
      }}
    >
      <Box>
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
          textAlign={'center'}
          sx={{ maxWidth: { xs: '95%', lg: "80%" }, mx: "auto", mb: 6, letterSpacing: 0.5 }}
        >
          Our commitment to excellence is reflected in our unique ADOPT
          methodology, which ensures that we consistently deliver exceptional
          results for our clients. ADOPT stands for Analysis, Develop, Optimize,
          and Present, while T represents our commitment to efficiency in
          Turnaround Time.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: { xs: "95%", sm: "80%", md: "70%" },
          position: "relative",
        }}
      >
        {cardData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
            sx={{
              mt: index % 2 === 0 ? 0 : 8,
            }}
          >
            <StyledCard
              title={card.title}
              description={card.description}
              outerBg={card.outerBg}
              innerBg={card.innerBg}
              rotation={card.rotation}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Page3;

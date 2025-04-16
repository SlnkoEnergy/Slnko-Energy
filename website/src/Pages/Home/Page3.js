import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import img1 from "../../assets/SLNKO.png";
import img2 from "../../assets/Logo (3)/1.png";
import img3 from "../../assets/Logo (3)/2.png";
import img4 from "../../assets/Logo (3)/3.png";
import img5 from "../../assets/Logo (3)/4.png";
import img6 from "../../assets/Logo (3)/5.png";
const stats = [
  { value: "6+GW", label: "Project Completed" },
  { value: "350+", label: "Happy Clients" },
  { value: "220+", label: "Kusum Projects" },
  { value: "1.5+GW", label: "Government Projects" },
  { value: "4.5+GW", label: "Private Projects" },
];

const data = ["Ensure Quality", "Ensure Sustainability", "Ensure Support"];

const Page3 = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isSmall = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:900px)");

  const size = isSmall ? 8 : isMedium ? 15 : 25;

  const ref = useRef(null);
  const isInView = useInView(ref,  { triggerOnce: true, threshold: 0.2 });

  return (
    <Grid
      ref={ref}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#ffffff",
        padding: 2,
      }}
    >
      <Grid
        item
        xs={12}
        display={{xs:'none',md:"flex"}}
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        <motion.img
          alt="slnko"
          style={{ width: "80%" }}
          src={img1}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </Grid>

      <Grid
  item
  display={{ xs: 'flex', md: 'none' }}
  flexDirection={'column'}
  justifyContent={'center'}
  alignItems={'center'}
  gap={1}
  ref={ref}
>
  {[img2, img3, img4, img5, img6].map((imgSrc, idx) => (
    <Box
      key={idx}
      width={{ xs: '30%', sm: '25%' }}
      component={motion.img}
      alt={`supremely-${idx}`}
      src={imgSrc}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
    />
  ))}
</Grid>

      {!isMobile && (
        <Grid
          item
          sx={{
            width: "100%",
            maxWidth: "100vw",
            minWidth: "100%",
            overflow: "hidden",
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.svg
            viewBox="-50 50 1300 250"
            width="100%"
            height="auto"
            preserveAspectRatio="xMidYMid meet"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {stats.map((stat, index) => {
              const totalWidth = 850;
              const circleSpacing = totalWidth / stats.length;
              const xPosition = circleSpacing * index + 250;
              const yPosition = 155;

              return (
                <motion.g
                  key={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                >
                  <circle
                    cx={xPosition}
                    cy={yPosition}
                    r={100}
                    stroke="black"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  <text
                    x={xPosition}
                    y={yPosition - 5}
                    fontSize="2rem"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="black"
                  >
                    {stat.value}
                  </text>
                  <text
                    x={xPosition}
                    y={yPosition + 10}
                    fontSize="1.3rem"
                    textAnchor="middle"
                    fill="#1d3f79"
                  >
                    <tspan x={xPosition} dy="1.2em">
                      {stat.label.split(" ")[0]}
                    </tspan>
                    <tspan x={xPosition} dy="1.2em">
                      {stat.label.split(" ").slice(1).join(" ")}
                    </tspan>
                  </text>
                </motion.g>
              );
            })}
          </motion.svg>
        </Grid>
      )}

      {isMobile && (
        <motion.svg
          width="100%"
          height="800"
          viewBox="0 0 100 700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, index) => {
            const xPosition = 50;
            const yPosition = index * 120 + 80;

            return (
              <motion.g
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <circle
                  cx={xPosition}
                  cy={yPosition}
                  r="70"
                  stroke="black"
                  strokeWidth="2"
                  fill="transparent"
                />
                <text
                  x={xPosition}
                  y={yPosition - 10}
                  fontSize="1.5rem"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="black"
                >
                  {stat.value}
                </text>
                <text
                  x={xPosition}
                  y={yPosition - 5}
                  fontSize="1.2rem"
                  textAnchor="middle"
                  fill="#1d3f79"
                >
                  <tspan x={xPosition} dy="1.2em">
                    {stat.label.split(" ")[0]}
                  </tspan>
                  <tspan x={xPosition} dy="1.2em">
                    {stat.label.split(" ").slice(1).join(" ")}
                  </tspan>
                </text>
              </motion.g>
            );
          })}
        </motion.svg>
      )}

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 6, lg: 8, xl: 16 }}
        sx={{ mt: 4 }}
      >
        {data.map((text, index) => (
          <React.Fragment key={index}>
            {/* Animated Text */}
            <Grid item>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <Typography
                  variant="h4"
                  fontSize={{
                    xs: "0.7rem",
                    sm: "1.1rem",
                    md: "1.5rem",
                    lg: "2rem",
                  }}
                  sx={{ fontWeight: "500" }}
                >
                  {text}
                </Typography>
              </motion.div>
            </Grid>

            {/* Animated Dot (Except Last Item) */}
            {index < data.length - 1 && (
              <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                <motion.svg
                  width={size}
                  height={size}
                  viewBox="0 0 30 30"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2 + 0.2,
                  }}
                >
                  <circle cx="15" cy="15" r="15" fill="#d3d3d3" />
                </motion.svg>
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default Page3;

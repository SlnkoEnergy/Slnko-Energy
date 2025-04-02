import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import img1 from "../assets/SLNKO.png";

const stats = [
  { value: "6+GW", label: "Project Completed" },
  { value: "350+", label: "Happy Clients" },
  { value: "220+", label: "Kusum Projects" },
  { value: "1.5+GW", label: "Government Projects" },
  { value: "4.5+GW", label: "Private Projects" },
];
const data = ["Ensure Quality", "Ensure Sustainability", "Ensure Support"];
const Page3 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Check if it's mobile view

  return (
    <Grid
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
      {/* Image Section */}
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" mt={4}>
        <img alt="slnko" style={{ width: "80%" }} src={img1} />
      </Grid>

      {/* SVG Section (Now Fully Responsive) */}
      <Grid
        item
        sx={{
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          viewBox={isMobile ? "0 0 800 300" : "-50 50 1300 250"} // Adjust viewBox for mobile
          width={isMobile ? "90%" : "100%"} // Make it bigger on mobile
          height="auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {stats.map((stat, index) => {
            const totalWidth = isMobile ? 600 : 850; // Adjust width based on device
            const circleSpacing = totalWidth / stats.length;
            const xPosition = circleSpacing * index + (isMobile ? 150 : 250);
            const yPosition = isMobile ? 120 : 155; // Adjust Y-position for better spacing

            return (
              <g key={index}>
                {/* Circle */}
                <circle
                  cx={xPosition}
                  cy={yPosition}
                  r={isMobile ? 70 : 100} // Reduce circle size on mobile
                  stroke="black"
                  strokeWidth="2"
                  fill="transparent"
                />

                {/* Text Value */}
                <text x={xPosition} y={yPosition - 5} fontSize={isMobile ? "1.5rem" : "2rem"} fontWeight="bold" textAnchor="middle" fill="black">
                  {stat.value}
                </text>

                {/* Text Label */}
                <text x={xPosition} y={yPosition + 10} fontSize={isMobile ? "1rem" : "1.3rem"} textAnchor="middle" fill="#1d3f79">
                  <tspan x={xPosition} dy="1.2em">{stat.label.split(" ")[0]}</tspan>
                  <tspan x={xPosition} dy="1.2em">{stat.label.split(" ").slice(1).join(" ")}</tspan>
                </text>
              </g>
            );
          })}
        </svg>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" spacing={{md:12,lg:8, xl:16}} sx={{ mt: 4 }}>
      {data.map((text, index) => (
        <React.Fragment key={index}>
          {/* Text */}
          <Grid item>
            <Typography variant="h4" fontSize={{xs:'1.2rem',sm:'1.4rem',md:'1.8rem',lg:'2rem'}} sx={{ fontWeight: "500" }}>
              {text}
            </Typography>
          </Grid>

          {/* Dot (Except Last Item) */}
          {index < data.length - 1 && (
            <Grid item>
              <svg width="30" height="30">
                <circle cx="15" cy="15" r="15" fill="#d3d3d3" />
              </svg>
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
    </Grid>
  );
};

export default Page3;

import { Box, Typography, Card, CardContent } from "@mui/material";

const cultureData = [
  {
    title: "Time Flexibility",
    description:
      "SLnko Energy recognizes the commitment and responsibility of all team members toward their work. To accommodate everyone's schedule, we offer flexible working hours, which creates a positive workplace culture and fosters a better relationship between the employee and the organization.",
    image: "https://via.placeholder.com/300x150?text=Collaboration",
  },
  {
    title: "Work-Life compatibility",
    description:
      "SlnkoEnergy recognizes the pressures and strains of today's fast-paced, competitive world, and understands the toll it can take on mental health. To promote a more focused, productive, healthier, and happier workforce, we operate on a Monday-to-Friday work schedule, with two days set aside for relaxation.",
    image: "https://via.placeholder.com/300x150?text=Innovation",
  },
  {
    title: "Getaway for Recreation",
    description:
      "Every year, SLnko Energy arranges a leisurely excursion for its staff to escape the routine work and provide a chance for their minds to relax in a peaceful environment. It's a moment for team members to connect through shared interests and engage in conversations about other areas of life that ignite their passion.",
    image: "https://via.placeholder.com/300x150?text=Diversity",
  },
];

const Page4 = () => {
  return (
    <Box sx={{ px: 3, py: 8, textAlign: "center", backgroundColor: "#fff" }}>
      <Typography
        fontSize={"1.8rem"}
        fontWeight="400"
        color="#1d3f79"
        gutterBottom
      >
       Work-Life
      </Typography>
      <Typography
        variant="h6"
        maxWidth={{md:'80%',lg:"70%"}}
        mx="auto"
        color="#1d3f79"
        mb={6}
      >
    "Employee mental health is important to us"
        
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // ⬅️ responsive layout
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        {cultureData.map((item) => (
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1d3f79"
              gutterBottom
            >
              {item.title}
            </Typography>
            <Card
              key={item.title}
              elevation={2}
              sx={{
                width: "100%" ,
                height:'220px',
                maxWidth: 360,
                textAlign: "center",
              }}
            >
              <CardContent>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
                <Typography variant="body2" color="#1d3f79">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Page4;

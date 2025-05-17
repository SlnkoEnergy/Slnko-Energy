import { Box, Typography, Card, CardContent } from "@mui/material";

const cultureData = [
  {
    title: "New Hire Referral Bonus",
    description:
      "In today's competitive hiring landscape, identifying talented individuals has become increasingly difficult. As a token of appreciation, we provide referral bonuses to employees who help in the growth of our organisation by recommending top-notch candidates to our office.",
    image: "https://via.placeholder.com/300x150?text=Collaboration",
  },
  {
    title: "Career Achievement",
    description:
      "At our company, we commemorate significant career milestones, recognize the long-term dedication, and generously reward the exceptional accomplishments of our employees.",
    image: "https://via.placeholder.com/300x150?text=Innovation",
  },
  {
    title: "Bi-annual Performance Evaluation",
    description:
      "Conducting a semi-annual performance review helps us establish objectives and verify that we have achieved our prior goals, which fosters a sense of accomplishment among everyone on the team.",
    image: "https://via.placeholder.com/300x150?text=Diversity",
  },
];

const Page5 = () => {
  return (
    <Box sx={{ px: 3, py: 8, textAlign: "center", backgroundColor: "#fff" }}>
      <Typography
        fontSize={"1.8rem"}
        fontWeight="400"
        color="#1d3f79"
        gutterBottom
      >
       Support
      </Typography>
      <Typography
        variant="h6"
        maxWidth={{md:'80%',lg:"70%"}}
        mx="auto"
        color="#1d3f79"
        mb={6}
      >
    "We grow together, we support together"
        
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
                height:'240px',
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

export default Page5;

import { Box, Typography, Card, CardContent } from "@mui/material";

const cultureData = [
  {
    title: "Wellness Initiatives",
    description:
      "We organize regular health and wellness initiatives to promote healthy lifestyles and prevent illness among our employees. Our initiatives include fitness classes, healthy eating workshops, and mental health support sessions, which are designed to help our employees maintain a healthy work-life balance.",
    image: "https://via.placeholder.com/300x150?text=Collaboration",
  },
  {
    title: "Mental Health Support",
    description:
      "We understand that mental health is just as important as physical health, and we provide our employees with access to mental health resources and support services. We offer confidential counseling services, mental health education programs, and stress management resources to help our employees manage stress, anxiety, and other mental health issues.",
    image: "https://via.placeholder.com/300x150?text=Innovation",
  },
  {
    title: "Safety Training",
    description:
      "We provide regular health and safety training to our employees to ensure that they have the knowledge and skills to prevent accidents and injuries in the workplace. We train our employees on proper lifting techniques, hazardous materials handling, and other safety protocols to minimize the risk of workplace injuries.",
    image: "https://via.placeholder.com/300x150?text=Diversity",
  },
];

const Health = () => {
  return (
    <Box sx={{ px: 3, py: 8, textAlign: "center", backgroundColor: "#fff" }}>
      <Typography
        fontSize={"1.8rem"}
        fontWeight="400"
        color="#1d3f79"
        gutterBottom
      >
        Health
      </Typography>
      <Typography
        variant="h6"
        maxWidth={{ md: "80%", lg: "70%" }}
        mx="auto"
        color="#1d3f79"
        mb={6}
      >
        "Employee health is important to us"
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
                width: "100%",
                height: "380px",
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

export default Health;

import { Box, Typography, Card, CardContent } from "@mui/material";

const cultureData = [
  {
    title: "Collaboration",
    description:
      "We believe that great ideas and solutions come from working together. We encourage collaboration across all departments and teams, and we value open communication and constructive feedback.",
    image: "https://via.placeholder.com/300x150?text=Collaboration",
  },
  {
    title: "Innovation",
    description:
      "We are committed to finding new and creative ways to solve problems and create sustainable energy solutions. We encourage experimentation and are not afraid to take risks.",
    image: "https://via.placeholder.com/300x150?text=Innovation",
  },
  {
    title: "Diversity",
    description:
      "We believe that a diverse and inclusive workplace is essential to our success as a company. We welcome and respect people of all backgrounds, cultures, and experiences.",
    image: "https://via.placeholder.com/300x150?text=Diversity",
  },
];

const CompanyCultureSection = () => {
  return (
    <Box sx={{ px: 3, py: 8, textAlign: "center", backgroundColor: "#fff" }}>
      <Typography
        fontSize={"1.8rem"}
        fontWeight="400"
        color="#1d3f79"
        gutterBottom
      >
        Company Culture
      </Typography>
      <Typography
        variant="body1"
        maxWidth={{md:'80%',lg:"70%"}}
        mx="auto"
        color="#1d3f79"
        mb={6}
      >
        Our culture is one of teamwork, innovation, and sustainability. We are
        dedicated to creating a work environment that is inclusive, supportive,
        and challenging. We believe that our employees are our greatest asset,
        and we are committed to providing them with the tools and resources they
        need to succeed in their roles. Join us in building a cleaner, more
        sustainable future for all!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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

export default CompanyCultureSection;

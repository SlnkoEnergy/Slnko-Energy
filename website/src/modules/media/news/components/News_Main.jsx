import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import img1 from "../../../../assets/news-1.webp";
import img2 from "../../../../assets/news-1.jpg";

const newsData = [
  {
    title: 'BPCL Invites Bids to Hire a Contractor for a 14 MW Solar Project in Madhya Pradesh',
    description:
      'Bharat Petroleum Corporation (BPCL) is hiring a contractor to set up a 14 MW grid-connected solar power project on a turnkey basis at its Bina Refinery in Madhya Pradesh. The project must be commissioned within 180 days of the work order. The contractor must provide comprehensive operation and maintenance for three years......',
    image:img1,
  },
  {
    title: 'Bharat Petroleum Invites Bids for a 6 MW Solar Project at Its Kochi Refinery',
    description:
      'Bharat Petroleum Corporation (BPCL) has invited bids for the engineering, supply, installation, testing, and commissioning of a 6 MW solar power project at its refinery in Kochi, Kerala. The successful bidder will also have to take care of the project’s operation and maintenance (O&M) for five years....',
    image: img2,
  },
];

const News_Main = () => {
  return (
    <Box sx={{ px: 3, py: 5 }}>
      <Typography
        variant="h4"
        sx={{color:'#1d3f79', fontWeight: 'bold', textAlign: 'center', mb: 4, textDecoration: 'underline' }}
      >
        News
      </Typography>

      <Grid container spacing={8}>
        {newsData.map((news, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <CardMedia
                component="img"
                sx={{ width: { xs: '100%', md: 300 }, height: 'auto' }}
                image={news.image}
                alt="solar news"
              />
              <CardContent>
                <Typography fontSize={'1.5rem'} color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                  {news.title}
                </Typography>
                <Typography fontSize={'1.3rem'}>{news.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News_Main;

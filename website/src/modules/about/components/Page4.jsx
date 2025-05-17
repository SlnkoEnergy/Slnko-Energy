import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Img1 from '../../../assets/client_logo/1.png';
import Img2 from '../../../assets/client_logo/2.png';
import Img3 from '../../../assets/client_logo/3.png';
import Img4 from '../../../assets/client_logo/4.png';
import Img5 from '../../../assets/client_logo/5.png';
import Img6 from '../../../assets/client_logo/6.png';
import Img7 from '../../../assets/client_logo/7.png';
import Img8 from '../../../assets/client_logo/8.png';
import Img9 from '../../../assets/client_logo/11.png';
import Img12 from '../../../assets/client_logo/12.png';
import Img13 from '../../../assets/client_logo/13.png';
import Img14 from '../../../assets/client_logo/14.png';
import Img15 from '../../../assets/client_logo/15.png';
import Img16 from '../../../assets/client_logo/16.png';
import Img17 from '../../../assets/client_logo/17.png';
import Img18 from '../../../assets/client_logo/18.png';
import Img19 from '../../../assets/client_logo/19.png';
import Img20 from '../../../assets/client_logo/20.png';
import Img21 from '../../../assets/client_logo/21.png';
import Img22 from '../../../assets/client_logo/22.png';
import Img23 from '../../../assets/client_logo/23.png';
import Img24 from '../../../assets/client_logo/24.png';
import Img25 from '../../../assets/client_logo/25.png';
import Img26 from '../../../assets/client_logo/26.png';
import Img27 from '../../../assets/client_logo/27.png';
import Img28 from '../../../assets/client_logo/28.png';
import Img29 from '../../../assets/client_logo/29.png';

const clientLogos = [
  { src: Img1 }, { src: Img2 }, { src: Img3 }, { src: Img4 }, { src: Img5 },
  { src: Img6 }, { src: Img7 }, { src: Img8 }, { src: Img9 }, 
   { src: Img12 }, { src: Img13 }, { src: Img14 }, { src: Img15 },
  { src: Img16 }, { src: Img17 }, { src: Img18 }, { src: Img19 }, { src: Img20 },
  { src: Img21 }, { src: Img22 }, { src: Img23 }, { src: Img24 }, { src: Img25 },
  {src: Img26 },
  {src: Img27 },
  {src: Img28 },
  {src: Img29 },

];

const Page4 = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Clients
      </Typography>

      {/* Bordered container */}
      <Box
        sx={{
          border: '1px solid black',
          borderRadius: 4,
          p: 4,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {clientLogos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Box
                component="img"
                src={logo.src}
                alt={`Client Logo ${index + 1}`}
                sx={{
                  width: '100%',
                  maxHeight: 80,
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Page4;

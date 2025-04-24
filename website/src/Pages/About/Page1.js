import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import Img1 from '../../assets/About_P1.png'; // Make sure this path is correct

const Page1 = () => {
  const theme = useTheme();

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: 6,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          alignItems: 'center'
        }}
      >
        {/* Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              fontSize: '2rem',
              color: theme.palette.primary.main
            }}
          >
            Overview
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph 
            sx={{
              fontSize: '1rem',
              lineHeight: 1.7,
              textAlign: 'left'
            }}
          >
            Slnko is a one-stop platform providing end to end solutions to Solar Developers, EPCs & Installers. 
            Incorporated in 2018 as an engineering company, we have expanded the horizon of our services to 
            SCM (Supply Chain Management), EPCM (Engineering, Procurement, Construction, Management) & PM 
            (Project Management). Our services can be availed at any stage from the Pre-Bid & early planning 
            phase up to construction, installation and commissioning of Solar Projects of any capacity.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{
              fontSize: '1rem',
              lineHeight: 1.7,
              textAlign: 'left'
            }}
          >
            We are a team of young, energetic and experienced professionals constantly challenging ourselves to 
            deliver best services. We strive for opportunity in each dimension of a project. Our holistic 
            approach ensures that project is optimized for design & cost along with other aspects such as 
            execution, durability and operations thereby creating higher value of money.
          </Typography>
        </Box>

        {/* Image */}
        <Box 
          sx={{ 
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            maxWidth: { xs: '100%', md: '50%' }
          }}
        >
          <Box
            component="img"
            src={Img1}
            alt="Solar energy solutions by Slnko"
            loading="lazy"
            sx={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: 2,
             
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Page1;
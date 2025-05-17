import { Box, Typography, Container, useTheme } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AboutP1 from '../../../assets/About_P1.png';

const Overview = () => {
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
              fontSize: {xs:'1.5rem',sm:'1.6rem',md:'1.7rem',lg: '2rem'},
              color: theme.palette.primary.main
            }}
          >
            Overview
          </Typography>
          
          <Typography 
            fontSize={'1.1rem'}
            letterSpacing={1}
            textAlign={'justify'}
            paragraph 
            sx={{
              fontSize: {xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'},
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
            <b>SLnko</b> is a one-stop platform providing end to end solutions to Solar Developers, EPCs & Installers. 
            Incorporated in 2018 as an engineering company, we have expanded the horizon of our services to 
            <b> SCM </b>(Supply Chain Management), <b> EPCM </b>(Engineering, Procurement, Construction, Management) &<b> PM</b> 
            (Project Management). Our services can be availed at any stage from the Pre-Bid & early planning 
            phase up to construction, installation and commissioning of Solar Projects of any capacity.
          </Typography>
          
          <Typography 
            letterSpacing={1}
            textAlign={'justify'}
            paragraph 
            sx={{
              fontSize: {xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'},
              lineHeight: 1.7,
              textAlign: 'justify'
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
            
            display: 'flex',
            justifyContent: 'center',
            maxWidth: { xs: '100%', md: '50%' }
          }}
        >
         

<LazyLoadImage
  alt="Solar energy solutions by Slnko"
  src={AboutP1}
  effect="blur"
  style={{
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '16px',
    objectFit: 'cover'
  }}
/>

        </Box>
      </Box>
    </Container>
  );
};

export default Overview;

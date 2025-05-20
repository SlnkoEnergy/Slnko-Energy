import React from 'react';
import { Box } from '@mui/material';

const ContactLocation = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '450px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 3,
        mt: 2,
        mb: 1, // 👈 adds space below the map
      }}
    >
      <iframe
        title="SLnko Energy Pvt. Ltd. Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9471356573713!2d77.36105607617695!3d28.60136268549413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef75648c5d01%3A0x7169d8d8cf6a176c!2sSLnko%20Energy%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1747734149024!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default ContactLocation;

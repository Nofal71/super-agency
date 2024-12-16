import { Box, Typography } from '@mui/material';
import { Stack, styled } from '@mui/system';
import React from 'react';

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  backgroundColor: '#f9f9f9',
  padding: '5px',
  gap: '20px',
  '& a': {
    textDecoration: 'none',
    color: 'black',
  },
  '& ul': {
    listStyle: 'none',
    padding: 0,
  },
  '& li': {
    marginBottom: '10px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '900',
    color: '#333',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '2fr repeat(4, 1fr)',
    padding: '50px',
  },
}));

const Footer = () => {
  return (
    <FooterBox>
      <Stack direction="column" spacing={3}>
        <Typography variant="h4">Super Agency</Typography>
        <Typography variant="body1" color="grey">
          Leverage agile frameworks to provide a robust synopsis for high-level overviews.
        </Typography>
        <Typography variant="body1" color="grey">
          © Copyright Super Agency. All rights reserved. <br /> Design by TemplateFlip.
        </Typography>
      </Stack>

      <Box>
        <Typography variant="h6" fontWeight="100" gutterBottom>
          Services
        </Typography>
        <ul>
          <li>Design</li>
          <li>Development</li>
          <li>Branding</li>
          <li>Marketing</li>
        </ul>
      </Box>

      <Box>
        <Typography variant="h6" fontWeight="100" gutterBottom>
          Products
        </Typography>
        <ul>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Team</li>
          <li>Pricing</li>
        </ul>
      </Box>

      <Box>
        <Typography variant="h6" fontWeight="100" gutterBottom>
          About
        </Typography>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </Box>

      <Box>
        <Typography variant="h6" fontWeight="100" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2">568, Hill Road</Typography>
        <Typography variant="body2">New York, NY 50032</Typography>
        <Typography variant="body2">United States</Typography>
        <Typography variant="body2" mt={2}>
          Phone: +0718-111-0011
        </Typography>
        <Typography variant="body2">Email: super@company.com</Typography>
      </Box>
    </FooterBox>
  );
};

export default Footer;

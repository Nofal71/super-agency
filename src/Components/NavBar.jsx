import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

const pages = ['Home', 'About', 'Services', 'Team', 'Portfolio', 'Contact'];

function NavBar() {
  const [background, setBackground] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setBackground('white');
      } else {
        setBackground('#f9f9f9');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 'none',
        px: { xs: '3px', md: '200px' },
        backgroundColor: background,
        borderBottom: background === 'white' ? 'none' : '1px solid #e0e0e0',
        transform: background === "white" ? "scaleY(1)" : "scaleY(0.85)",
        transformOrigin: "center top", 
        transition: 'background-color .7s ease, border-bottom .7s ease, transform .7s ease',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontFamily: 'sans-serif',
            color: '#000',
            textDecoration: 'none',
          }}
        >
          Super Agency
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                sx={{
                  color: '#000',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  '&:hover': { color: '#ffa500' },
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFD700',
                color: '#000',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '20px',
                px: '20px',
                py: '8px',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#FFC000',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

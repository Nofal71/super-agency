import React, { useEffect, useState } from 'react';
import Header from './Sections/Header/Header';
import Work from './Sections/Work/Work';
import { CssBaseline, Fab } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';

const App = () => {

  const [display, setDisplay] = useState('none')

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setDisplay('none');
      } else {
        setDisplay('block');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])


  return (
    <>
      <CssBaseline />
      <Header />
      <Work />

      <Fab
        color="secondary"
        size='small'
        sx={(theme) => ({
          display: display,
          position: 'sticky',
          bottom: theme.spacing(2),
          left: theme.spacing(159),
          background: '#343a40'
        })}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

        }}
      >
        <NorthIcon sx={{ height: '15px' }} />
      </Fab>
    </>
  );
}

export default App;

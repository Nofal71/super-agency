import React, { useEffect, useState } from 'react';
import Header from './Sections/Header/Header';
import Work from './Sections/Body/Work';
import { CssBaseline, Fab } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import { ScrollProvider } from './Context/NavigationRefs';
import Footer from './Sections/Footer/Footer';

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
    <ScrollProvider>
      <CssBaseline />
      <Header />
      <Work />
      <Footer />

      <Fab
        color="secondary"
        size='small'
        sx={() => ({
          display: display,
          position: 'fixed',
          bottom: 10,
          left: '95%',
          background: '#343a40',
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
    </ScrollProvider>
  );
}

export default App;

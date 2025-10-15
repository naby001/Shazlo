import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, keyframes } from '@mui/material';
import closetImage from '../assets/philosophy.png'; // Replace with actual image

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Philosophy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: isMobile ? 3 : 8,
        py: isMobile ? 6 : 12,
        gap: isMobile ? 6 : 12,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #f9f9f9 100%)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
        margin: isMobile ? 3 : 6,
        overflow: 'hidden',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          zIndex: 0,
        }
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: 'center',
          maxWidth: 600,
          mx: isMobile ? 'auto' : 0,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 300,
            fontSize: isMobile ? '17px' : '30px',
              fontStyle: 'italic',
            mb: 3,
            lineHeight: 1.2,
            fontFamily: "'Poppins', sans-serif",
            // background: 'linear-gradient(to right, #2c3e50, #4ca1af)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'black',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Shazlo is a dream born in the rooms of four undergraduate students from Ahmedabad and Kolkata who had a core mission- revolutionising how India shops.<br></br><br></br>

Shazlo serves as a gamified fashion discovery platform, where you swipe to style, share and shine. Moving beyond traditional e-commerce, Shazlo aims to create shared experiences and add an element of joy while buying your favourite piece of clothing.
<br></br><br></br>
From local artisans to modern designers, Shazlo brings it all to a single platform, highlighting the beauty of Made in India!
        </Typography>

       
      </Box>

      {/* Image Section */}
      <Box
        component="img"
        src={closetImage}
        alt="Closet Feature"
        sx={{
          flex: 1,
          width: isMobile ? '100%' : '500px',
          maxWidth: 500,
          height: 'auto',
          borderRadius: '20px',
          mx: isMobile ? 'auto' : 0,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          transform: 'perspective(1000px) rotateY(5deg)',
          transition: 'all 0.5s ease',
          animation: `${pulse} 8s ease-in-out infinite`,
          '&:hover': {
            transform: 'perspective(1000px) rotateY(0deg)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
          },
          position: 'relative',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Philosophy;
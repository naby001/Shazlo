import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, keyframes } from '@mui/material';
import closetImage from '../assets/closet.jpg'; // Replace with actual image

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

const Closet = () => {
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
          textAlign: isMobile ? 'center' : 'right',
          maxWidth: 600,
          mx: isMobile ? 'auto' : 0,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          // variant="h2"
          sx={{
            // fontWeight: 800,
            fontSize: isMobile ? '2rem' : '3.5rem',
            mb: 3,
            lineHeight: 1.2,
            // fontFamily: "'Poppins', sans-serif",
            // background: 'linear-gradient(to right, #2c3e50, #4ca1af)',
          
            color: 'black',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Your Digital Closet Awaits
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            textAlign: isMobile ? 'center' : 'right',
          }}
        >
          {[
            {
              text: 'Build your dream closet',
              gradient: 'linear-gradient(to right, #ff6ec4, #7873f5)',
              icon: '👗'
            },
            {
              text: 'Save your favorite fits',
              gradient: 'linear-gradient(to right, #00c6ff, #0072ff)',
              icon: '❤️'
            },
            {
              text: 'Collaborate with friends',
              gradient: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
              icon: '👯'
            },
            {
              text: 'Share looks anytime, anywhere',
              gradient: 'linear-gradient(to right, #f7971e, #ffd200)',
              icon: '🌎'
            }
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row-reverse',
                alignItems: 'center',
                gap: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateX(-5px)',
                }
              }}
            >
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  animation: `${float} 3s ease-in-out infinite ${index * 0.2}s`,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  background: item.gradient,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
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

export default Closet;
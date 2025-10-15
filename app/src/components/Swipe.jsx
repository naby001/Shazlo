import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, keyframes } from '@mui/material';
import swipeImage from '../assets/swipe.png'; // Replace with actual image

// Animation for swipe arrows
const swipeAnimation = keyframes`
  0% { transform: translateX(0); opacity: 0.7; }
  50% { transform: translateX(10px); opacity: 1; }
  100% { transform: translateX(0); opacity: 0.7; }
`;

const Style = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: isMobile ? 3 : 8,
        py: isMobile ? 6 : 12,
        gap: isMobile ? 6 : 12,
        background: 'linear-gradient(to bottom, #f9f9f9, #ffffff)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
        margin: isMobile ? 3 : 6,
        overflow: 'hidden',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #ff4d4d, #9055ff, #4d79ff)',
        }
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
          maxWidth: 600,
          mx: isMobile ? 'auto' : 0,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: isMobile ? '2rem' : '3.5rem',
            mb: 3,
            color: '#1e1e1e',
            lineHeight: 1.2,
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(to right, #333, #555)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Swipe to Style
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#555',
            lineHeight: 1.7,
            mb: 4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Discover fashion effortlessly with our intuitive swipe interface.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            textAlign: 'left',
          }}
        >
          {[
            { 
              text: 'Swipe right on clothes you love', 
              color: '#9055ff',
              icon: '→'
            },
            { 
              text: 'Swipe left on clothes you donot like', 
              color: '#ff4d4d',
              icon: '←'
            },
            { 
              text: 'Swipe up to add to cart', 
              color: '#4CAF50',
              icon: '↑'
            },
            { 
              text: 'Swipe down to add to closet', 
              color: '#FF9800',
              icon: '↓'
            },

          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateX(5px)',
                }
              }}
            >
              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `${item.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  animation: `${swipeAnimation} 2s infinite ${index * 0.3}s`,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#444',
                  flex: 1,
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
        src={swipeImage}
        alt="Swipe Feature"
        sx={{
          flex: 1,
          width: isMobile ? '100%' : '500px',
          maxWidth: 500,
          height: 'auto',
          borderRadius: '20px',
          mx: isMobile ? 'auto' : 0,
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
          transform: 'perspective(1000px) rotateY(-5deg)',
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'perspective(1000px) rotateY(0deg)',
          },
          position: 'relative',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Style;
import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, keyframes } from '@mui/material';
import operationsImg from '../assets/pranav.jpg';
import tech1Img from '../assets/maurya.png';
import tech2Img from '../assets/nabyendu_1.jpg';
import marketingImg from '../assets/darsh.jpg';

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

const Team = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const teamMembers = [
    { img: operationsImg, name: 'Pranav', role: 'The Operations Guy' },
    { img: tech1Img, name: 'Maurya', role: 'The Tech Guy' },
    { img: tech2Img, name: 'Nabyendu', role: 'The Tech Guy' },
    { img: marketingImg, name: 'Darsh', role: 'The Marketing Guy' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: isMobile ? 3 : 8,
        py: isMobile ? 6 : 12,
        gap: isMobile ? 6 : 8,
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
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? 4 : 6,
          width: '100%',
          maxWidth: '1000px',
          zIndex: 2,
        }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '16px',
              p: 3,
            }}
          >
            <Box
              component="img"
              src={member.img}
              alt={member.role}
              sx={{
                width: 150,
                height: 250,
                borderRadius: 25,
                objectFit: 'cover',
                mb: 2,
                animation: `${pulse} 3s ease-in-out infinite`,
              }}
            />
            <Typography
              sx={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#111',
                fontFamily:'Gerbata'
              }}
            >
              {member.name}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: '#333',
                mt: 0.5,
                fontFamily:'Gerbata'
              }}
            >
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Team;

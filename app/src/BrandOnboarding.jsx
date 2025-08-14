import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Button, TextField, Typography, Paper, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from './assets/3.png';
import { useNavigate } from 'react-router-dom';
import { setLogin } from './state';
import { useDispatch } from 'react-redux';

const fields = [
  { name: 'poc_name', label: 'Your Name', type: 'text' },
  { name: 'email', label: 'Email Address', type: 'email' },
  { name: 'phone', label: 'Phone Number', type: 'tel' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'brand_name', label: 'Brand Name', type: 'text' },
];

// Styled Components
const GradientBackground = styled(Box)`
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
  }
`;

const GlassCard = styled(Paper)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px 40px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-1px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    &.Mui-focused {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    }
    
    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(255, 255, 255, 0.2);
      border-width: 1px;
    }
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(255, 255, 255, 0.4);
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: rgba(255, 255, 255, 0.8);
      border-width: 2px;
    }
  }
  
  .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    
    &.Mui-focused {
      color: rgba(255, 255, 255, 0.9);
    }
  }
  
  .MuiOutlinedInput-input {
    color: rgba(255, 255, 255, 0.95);
    font-weight: 500;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const GradientButton = styled(Button)`
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  color: #000000;
  border: none;
  border-radius: 16px;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 16px;
  text-transform: none;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 25px rgba(255, 255, 255, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%);
    transform: translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(255, 255, 255, 0.15),
      0 6px 20px rgba(0, 0, 0, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
    transform: none;
    box-shadow: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ProgressBar = styled(LinearProgress)`
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  
  .MuiLinearProgress-bar {
    background: linear-gradient(90deg, #ffffff, #f0f0f0);
    border-radius: 3px;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const BrandOnboarding = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    poc_name: '',
    email: '',
    phone: '',
    password: '',
    brand_name: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentField = fields[step];

  const handleChange = (e) => {
    setFormData({ ...formData, [currentField.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < fields.length - 1) setStep(step + 1);
  };

  const handleSubmit = async () => {
    const payload = new FormData();
    Object.entries(formData).forEach(([key, val]) => payload.append(key, val));
    
    const response = await fetch("http://192.168.31.12:8000/v1/seller-signup/", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    
    const returneddata = await response.json();
    console.log(returneddata);
    dispatch(setLogin({ user: returneddata.brand }));
    navigate('/seller');
  };

  const progress = ((step + 1) / fields.length) * 100;

  return (
    <GradientBackground
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {/* Minimal Floating Elements */}
      <FloatingElement
        style={{ top: '15%', left: '8%' }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingElement
        style={{ top: '70%', right: '12%' }}
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <GlassCard elevation={0} sx={{ width: { xs: 380, sm: 480 }, mx: 2 }}>
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            style={{ textAlign: 'center', marginBottom: 40 }}
          >
            <img 
              src={logo} 
              alt="Brand Logo" 
              style={{ 
                width: 100, 
                height: 'auto',
                // filter: 'brightness(1.2) drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
              }} 
            />
          </motion.div>

          {/* Progress Bar */}
          <Box sx={{ mb: 5 }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: 'left' }}
            >
              <ProgressBar variant="determinate" value={progress} />
            </motion.div>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'rgba(255,255,255,0.6)', 
                mt: 1.5, 
                display: 'block',
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '0.75rem'
              }}
            >
              Step {step + 1} of {fields.length}
            </Typography>
          </Box>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: 'white',
                  fontWeight: 800,
                  textAlign: 'center',
                  mb: 1,
                  fontSize: { xs: '1.75rem', sm: '2.125rem' },
                  background: 'linear-gradient(135deg, #ffffff, #e0e0e0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em'
                }}
              >
                {step === 0 && "Welcome! Let's get started"}
                {step === 1 && "How can we reach you?"}
                {step === 2 && "Your contact number"}
                {step === 3 && "Secure your account"}
                {step === 4 && "What's your brand called?"}
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  textAlign: 'center',
                  mb: 5,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                {step === 0 && "What should we call you?"}
                {step === 1 && "We'll use this to send you important updates"}
                {step === 2 && "For quick communication and support"}
                {step === 3 && "Choose a strong password to protect your data"}
                {step === 4 && "The name that represents your business"}
              </Typography>
            </motion.div>
          </AnimatePresence>

          {/* Form Field */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Box sx={{ position: 'relative', mb: 5 }}>
                <motion.div
                  style={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '18px',
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'grayscale(1) brightness(1.2)'
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {currentField.icon}
                </motion.div>
                
                <StyledTextField
                  fullWidth
                  label={currentField.label}
                  type={currentField.type}
                  value={formData[currentField.name]}
                  onChange={handleChange}
                  sx={{ 
                    '& .MuiOutlinedInput-input': { 
                      pl: 6 
                    }
                  }}
                />
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {step < fields.length - 1 ? (
              <GradientButton 
                variant="contained" 
                fullWidth 
                onClick={handleNext}
                disabled={!formData[currentField.name]}
              >
                Continue →
              </GradientButton>
            ) : (
              <GradientButton 
                variant="contained" 
                fullWidth 
                onClick={handleSubmit}
                disabled={!formData[currentField.name]}
              >
                Launch Your Brand 🚀
              </GradientButton>
            )}
          </motion.div>

          {/* Footer */}
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              mt: 4,
              display: 'block',
              fontWeight: 400,
              fontSize: '0.75rem'
            }}
          >
            {step < fields.length - 1 
              ? "Press Enter to continue or click the button above"
              : "Ready to transform your business? Let's go!"
            }
          </Typography>
        </GlassCard>
      </motion.div>
    </GradientBackground>
  );
};

export default BrandOnboarding;
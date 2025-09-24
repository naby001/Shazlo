import React, { useEffect, useRef, useState } from "react";
import { Box, useTheme, useMediaQuery, Typography, Collapse } from "@mui/material";
import mainlogo from "./assets/w.png";
import mobilelogo from "./assets/w.png";
import ss1 from "./assets/ss1.jpg";
import ss2 from "./assets/ss2.jpg";
import ss3 from "./assets/ss3.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import background from './assets/background_waitlist_new.png';

const LandingDesk = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef(null);
    const [showInput, setShowInput] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [ss2, ss1, ss3];

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && showInput && containerRef.current && !containerRef.current.contains(event.target)) {
                setShowInput(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showInput, isMobile]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Box sx={{ width: "100%", overflowX: "hidden", backgroundColor: "white", cursor:'default' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: isMobile ? 4 : 8,
                    px: isMobile ? 2 : 6,
                    py: isMobile ? 4 : 0
                }}
            >
                {/* Left Column - Logo and Screenshots */}
                <Box
                    sx={{
                        flex: isMobile ? "none" : 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: isMobile ? 2 : 1,
                        width: isMobile ? "100%" : "auto"
                    }}
                >
                    {/* Logo */}
                    <Box
                        component="img"
                        src={isMobile ? mobilelogo : mainlogo}
                        alt="main logo"
                        sx={{
                            width: isMobile ? "90%" : isTablet ? "80%" : "100%",
                            maxWidth: isMobile ? 350 : 600,
                            mb: isMobile ? 1 : 2,
                            mt:-25
                        }}
                    />

                    {/* Screenshots Side by Side (3D Tilted Inwards) */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            gap: isMobile ? 3 : 6,
                            mt:-28
                        }}
                    >
                        {/* Left Image */}
                        <Box
                            component="img"
                            src={ss1}
                            alt="screenshot 1"
                            sx={{
                                width: isMobile ? 120 : isTablet ? 180 : 220,
                                height: isMobile ? 240 : isTablet ? 340 : 420,
                                borderRadius: "14px",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                                transform: "perspective(1200px) rotateY(30deg) rotateX(15deg)",
                                transition: "transform 0.4s ease",
                                "&:hover": {
                                    transform: "perspective(1200px) rotateY(40deg) rotateX(8deg) scale(1.05)",
                                },
                            }}
                        />

                        {/* Right Image */}
                        <Box
                            component="img"
                            src={ss3}
                            alt="screenshot 2"
                            sx={{
                                width: isMobile ? 120 : isTablet ? 180 : 220,
                                height: isMobile ? 240 : isTablet ? 340 : 420,
                                borderRadius: "14px",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                                transform: "perspective(1200px) rotateY(-30deg) rotateX(15deg)",
                                transition: "transform 0.4s ease",
                                "&:hover": {
                                    transform: "perspective(1200px) rotateY(-15deg) rotateX(8deg) scale(1.05)",
                                },
                            }}
                        />
                    </Box>
                </Box>

                {/* Right Column - Join Waitlist */}
                <Box
                    sx={{
                        flex: isMobile ? "none" : 1,
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-start",
                        alignItems: "center",
                        width: isMobile ? "100%" : "auto",
                        pl: isMobile ? 0 : 4
                    }}
                >
                    <Box
                        ref={containerRef}
                        sx={{
                            px: isMobile ? 3 : 6,
                            py: isMobile ? 3 : 5,
                            backdropFilter: "blur(20px)",
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: isMobile ? 2 : 3,
                            width: isMobile ? "90%" : "100%",
                            maxWidth: isMobile ? "none" : 450,
                            border: "1px solid rgba(255,255,255,0.2)"
                        }}
                    >
                        <Typography 
                            sx={{ 
                                fontSize: isMobile ? 80 : isTablet ? 24 : 28, 
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 600,
                                mb: 1,
                                fontFamily: "Bad Script"
                            }}
                        >
                            Before it's everywhere, it's yours
                        </Typography>
                        
                        <Typography 
                            sx={{ 
                                fontSize: isMobile ? 14 : 16, 
                                color: 'rgba(255,255,255,0.8)',
                                textAlign: 'center',
                                mb: 2,
                                maxWidth: 300,
                                fontFamily: "Bad Script"
                            }}
                        >
                            Join the waitlist to be the first to experience the future
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 2,
                                width: "100%"
                            }}
                        >
                            <Collapse in={isMobile ? showInput : true} timeout={500} sx={{ width: "100%" }}>
                                <Box
                                    component="input"
                                    placeholder="Enter your email"
                                    sx={{
                                        width: "100%",
                                        px: 3,
                                        py: 2,
                                        background: "rgba(0, 0, 0, 0.4)",
                                        border: "1px solid rgba(255,255,255,0.3)",
                                        borderRadius: "12px",
                                        fontSize: isMobile ? "1rem" : "1.1rem",
                                        color: "white",
                                        outline: "none",
                                        transition: "all 0.3s ease",
                                        "&:focus": {
                                            border: "1px solid rgba(255,255,255,0.6)",
                                            background: "rgba(0, 0, 0, 0.6)"
                                        },
                                        "::placeholder": {
                                            color: "rgba(255, 255, 255, 0.6)",
                                        }
                                    }}
                                />
                            </Collapse>

                            <Box
                                component="button"
                                onClick={() => {
                                    if (isMobile) setShowInput(true);
                                }}
                                sx={{
                                    width: "100%",
                                    px: 3,
                                    py: 2,
                                    borderRadius: "12px",
                                    background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
                                    color: "black",
                                    fontWeight: 900,
                                    fontSize: isMobile ? "1rem" : "1.1rem",
                                    cursor: "pointer",
                                    border: "none",
                                    boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
                                    transition: "all 0.3s ease-in-out",
                                    ":hover": {
                                        boxShadow: "0 12px 35px rgba(255,255,255,0.4)",
                                        transform: "translateY(-2px)",
                                        background: "linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%)"
                                    },
                                     fontFamily: "Doto",
                                    
                                }}
                            >
                                Join Waitlist
                            </Box>

                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'row', 
                                gap: 2, 
                                mt: 1,
                                justifyContent: 'center'
                            }}>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                >
                                    <InstagramIcon sx={{ color: 'white', fontSize: isMobile ? 32 : 40 }} />
                                </Box>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                >
                                    <LinkedInIcon sx={{ color: 'white', fontSize: isMobile ? 32 : 40 }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LandingDesk;
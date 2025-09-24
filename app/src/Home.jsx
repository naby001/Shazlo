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
const Landing = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
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

    const getCardPosition = (index) => {
        const totalCards = images.length;
        const relativeIndex = (index - currentIndex + totalCards) % totalCards;
        if (relativeIndex === 0) {
            return { transform: "translateX(0px) rotate(0deg)", zIndex: 3, scale: 1, opacity: 1 };
        } else if (relativeIndex === 1) {
            return { transform: "translateX(60px) rotate(12deg)", zIndex: 2, scale: 0.9, opacity: 0.7 };
        } else {
            return { transform: "translateX(-60px) rotate(-12deg)", zIndex: 1, scale: 0.9, opacity: 0.7 };
        }
    };

    return (
        <Box sx={{ width: "100%", overflowX: "hidden", backgroundColor: "white" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: isMobile ? 100 : 700,
                    height: "100vh",
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4
                }}
            >

                {/* Logo */}
                <Box
                    component="img"
                    src={isMobile ? mobilelogo : mainlogo}
                    alt="main logo"
                    sx={{
                        width: isMobile ? "130%" : isTablet ? "70%" : "60%",
                        maxWidth: 750,
                        mt: isMobile ? -40 : 10,
                        mb: -28
                    }}
                />
                {/* Screenshots Side by Side (3D Tilted Inwards) */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end", // align at bottom
                        gap: 6,
                        mt: isMobile?10:-10,
                    }}
                >
                    {/* Left Image */}
                    <Box
                        component="img"
                        src={ss1}
                        alt="screenshot 1"
                        sx={{
                            width: isMobile ? 160 : isTablet ? 200 : 240,
                            height: isMobile ? 320 : isTablet ? 380 : 450,
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
                            width: isMobile ? 160 : isTablet ? 200 : 240,
                            height: isMobile ? 320 : isTablet ? 380 : 450,
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

                {/* Join Waitlist */}
                <Box
                    ref={containerRef}
                    sx={{
                        mt: isMobile ? -5 : 0,
                        px: isMobile ? 2 : 4,
                        py: 2,
                        backdropFilter: !isMobile && "blur(20px)",
                        background: !isMobile && "rgba(255, 255, 255, 0.1)",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        width: isMobile ? "90%" : "auto"
                    }}
                >
                    {!isMobile && (
                        <Typography sx={{ fontSize: 24, color: 'white' }}>
                            Before it's everywhere, it's yours.
                        </Typography>
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
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
                                    px: 2,
                                    py: 1.5,
                                    background: "rgba(0, 0, 0, 0.55)",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    borderRadius: "12px",
                                    fontSize: "1rem",
                                    color: "white",
                                    "::placeholder": {
                                        color: "rgba(134, 131, 131, 0.8)",
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
                                px: 3,
                                py: 1.5,
                                borderRadius: "12px",
                                background: "white",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "1rem",
                                cursor: "pointer",
                                boxShadow: "0 0 5px white",
                                transition: "all 0.3s ease-in-out",
                                ":hover": {
                                    boxShadow: "0 0 8px white",
                                    transform: "scale(1.01)",
                                },
                                fontSize:20,
                                  fontFamily: "Plus Jakarta Sans",
                            }}
                        >
                            Join Waitlist
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                            <InstagramIcon sx={{ color: 'white', fontSize: 40 }} />
                            <LinkedInIcon sx={{ color: 'white', fontSize: 40 }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Landing;

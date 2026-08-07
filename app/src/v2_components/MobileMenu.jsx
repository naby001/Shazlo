import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";

const menuItems = [
  { label: "About", id: "about" },
  { label: "How It Works", id: "how" },
  { label: "Features", id: "features" },
  { label: "Team", id: "team" },
  { label: "Partner", id: "partner" },
  { label: "Investors", id: "investors" },
  { label: "Contact", id: "footer" },
];

export default function MobileMenu({ open, onClose }) {

  const [selected, setSelected] = useState(null);

  const handleNavigate = (id) => {

    const element =
      id === "footer"
        ? document.querySelector("footer")
        : document.getElementById(id);

    setTimeout(() => {

      onClose();

      setTimeout(() => {

        element?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setSelected(null);

      }, 350);

    }, 1000);

  };

  return (

    <AnimatePresence>

      {open && (

        <>

          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .35 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.45)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 1298,
            }}
          />

          {/* Menu */}

          <motion.div
            initial={{
              y: "-110%",
              opacity: 0,
              scale: .98,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: "-110%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 18,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1299,
            }}
          >

            <Box
              component={motion.div}
              layout
              sx={{
                position: "relative",

                pt: 10,
                pb: 7,

                background: `
linear-gradient(
180deg,
#f7d56a 0%,
#f9df8f 18%,
#fbeab6 40%,
rgba(255,248,232,.92) 60%,
rgba(255,248,232,.55) 80%,
rgba(255,248,232,0) 100%
)
`,

                overflow: "hidden",
              }}
            >

              {/* Decorative S */}

              <Typography
                sx={{
                  position: "absolute",
                  top: "48%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",

                  fontSize: "16rem",
                  fontWeight: 700,

                  color: "rgba(255,255,255,.28)",

                  fontFamily: "'Bodoni Moda', serif",

                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                S
              </Typography>

              {/* Navigation */}

              <Box
                component={motion.div}
                layout
                display="flex"
                flexDirection="column"
                alignItems="stretch"
                gap={1}
                position="relative"
                zIndex={2}
              >
                                {menuItems.map((item, index) => {

                  const active = selected === item.id;

                  return (

                   <motion.div
  layout
  animate={{
    x: active ? -35 : selected ? 35 : 0,
    opacity: selected && !active ? 0.45 : 1,
    scale: active ? 1.12 : 1,
  }}
  transition={{
    type: "spring",
    stiffness: 55,
    damping: 18,
    mass: 1,
  }}
>

                      <Button
  fullWidth
  disableRipple
  disableFocusRipple
  disableTouchRipple
  onClick={() => {
    if (selected) return;

    setSelected(item.id);
    handleNavigate(item.id);
  }}
  sx={{
    justifyContent: active ? "flex-start" : "center",

    pl: active ? 5 : 0,
    py: active ? 2 : 1,

    borderRadius: 0,

    textTransform: "none",

    fontFamily: "'Bodoni Moda', serif",

    fontSize: {
      xs: active ? "3.2rem" : "1.6rem",
      md: active ? "4.5rem" : "2rem",
    },

    fontWeight: active ? 700 : 400,

    color: active ? "#1b1b1b" : "#383838",

    letterSpacing: active ? ".02em" : "0",

    

    "&:hover": {
      backgroundColor: "transparent",
      color: "#c88b00",
    },

    "&:active": {
      backgroundColor: "transparent",
    },

    "&.Mui-focusVisible": {
      backgroundColor: "transparent",
    },

    "&:focus": {
      outline: "none",
    },
  }}
>
  {item.label}
</Button>

                    </motion.div>

                  );

                })}

              </Box>

            </Box>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );

}
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Paper,
  createTheme
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "./assets/3a.png";
export default function FAQDeleteAccount() {
    const theme = createTheme({
  typography: {
    fontFamily: "Gerbata"
  }
});
    const faqs = [
  {
    question: "How do I delete my account?",
    content: "DELETE_ACCOUNT"
  },
  {
    question: "What do I get in the beta launch?",
    answer:
      "During the beta, you can swipe through curated products and help Shazlo learn your personal style. As you interact, your feed becomes more refined. You can open product cards to visit brand websites and shop directly. You’ll also earn Shazlo Coins as rewards, which can be redeemed after launch. Additionally, you can create, share, and collaborate on closets."
  },
  {
    question: "What will I get after the final launch?",
    answer:
      "After the final launch, you’ll be able to buy products directly within the app using the shopping bag. Shazlo Coins earned during the beta and beyond can be redeemed against your order value."
  }
];


function FAQItem({ question, children }) {
  return (
    <Accordion
      elevation={0}
      sx={{
        bgcolor: "transparent",
        border: "none",
        "&:before": { display: "none" },
        mb: 3
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#eeba2b" }} />}
        sx={{ px: 0 }}
      >
        <Typography
          sx={{
            fontFamily: "serif",
            fontSize: "1.4rem",
            color: "#eeba2b"
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ px: 0, pt: 2 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "black",
        // backgroundImage:
        //   "linear-gradient(rgba(191,164,74,0.92), rgba(191,164,74,0.92))",
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 12 }
      }}
    >
      <Box maxWidth={1100} mx="auto">
        {/* LOGO */}
        <Box
          sx={{
            mb: 6,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            component="img"
            src={logo} // <-- replace with your logo path
            alt="Shazlo"
            sx={{
              height: 100,
              objectFit: "contain"
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "serif",
            fontSize: { xs: "2.4rem", md: "3.2rem" },
            lineHeight: 1.1,
            mb: 6,
            color: "white",
            textAlign: "center"
          }}
        >
          Frequently asked questions
        </Typography>
          {faqs.map((faq, index) => (
  <FAQItem key={index} question={faq.question}>
    {faq.content === "DELETE_ACCOUNT" ? (
       <Stack spacing={4}>
              <Typography
                sx={{
                  fontFamily: "serif",
                  fontSize: "1.1rem",
                  color: "white",
                  maxWidth: 700
                }}
              >
                You can delete your Shazlo account at any time from within the
                app. Once deleted, your personal information is permanently
                removed.
              </Typography>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                    mb: 1,
                    color: "white"
                  }}
                >
                  Steps
                </Typography>

                <ol
                  style={{
                    paddingLeft: 18,
                    margin: 0,
                    fontFamily: "serif",
                    fontSize: "1.05rem",
                    color: "white"
                  }}
                >
                  <li>Open the app and log in</li>
                  <li>Go to Profile at Top-Right Corner</li>
                  <li>Scroll down and select “Delete Account”</li>
                  <li>Confirm deletion</li>
                </ol>
              </Box>

              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    height: 260,
                    bgcolor: "rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "serif",
                    color: "white"
                  }}
                >
                   <Box
    component="img"
    src={"./delete-ss-1.jpg"}
    alt="Settings screen"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }}
  />
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    height: 260,
                    bgcolor: "rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "serif",
                    color: "white"
                  }}
                >
                   <Box
    component="img"
    src={"./delete-ss-2.jpg"}
    alt="Settings screen"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }}
  />
                </Paper>
              </Stack>

              <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      color:'white',
                      mb: 1
                    }}
                  >
                    What will be deleted
                  </Typography>

                  <ul
                    style={{
                      paddingLeft: 18,
                      margin: 0,
                      fontFamily: "serif",
                      fontSize: "1rem",
                      color:'white'
                    }}
                  >
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Profile data</li>
                    <li>User preferences</li>
                  </ul>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      mb: 1,
                      color:'white'
                    }}
                  >
                    What may be retained
                  </Typography>

                  <ul
                    style={{
                      paddingLeft: 18,
                      margin: 0,
                      fontFamily: "serif",
                      fontSize: "1rem",
                      color:'white'
                    }}
                  >
                    <li>Anonymized usage events</li>
                    <li>Aggregated analytics</li>
                    {/* <li>Non-identifiable data only</li> */}
                  </ul>
                </Box>
              </Stack>

              <Typography
                sx={{
                  fontFamily: "serif",
                  fontSize: "0.95rem",
                  color: "white",
                  maxWidth: 700
                }}
              >
                If you cannot access your account, email us at{" "}
                <b>contact@shazlo.store</b> to request deletion.
              </Typography>
            </Stack>
    ) : (
      <Typography
        sx={{
          fontFamily: "serif",
          fontSize: "1.05rem",
          color: "white",
          maxWidth: 700
        }}
      >
        {faq.answer}
      </Typography>
    )}
  </FAQItem>
))}
       
        
      </Box>
    </Box>
  );
}

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Divider,
  Paper,
  IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../assets/3a.png";

export default function FAQWithFooter() {
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
  return (
    <Box
      sx={{
        backgroundColor: "#eeba2b",
        py: { xs: 8, md: 12 },
        px: 2
      }}
    >
      {/* FAQ CARD */}
      <Box
        sx={{
          maxWidth: 420,
          mx: "auto",
          backgroundColor: "#f7f2ea",
          borderRadius: "28px",
          px: 3,
          py: 4,
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: "serif",
            fontSize: 28,
            textAlign: "center",
            mb: 3,
            color: "#121212"
          }}
        >
          Frequently asked
          <br />
          questions
        </Typography>

        {/* FAQ LIST */}
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              "&:before": { display: "none" },
              mb: 1.5
            }}
          >
            <AccordionSummary
              expandIcon={
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: "#2f3a2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <AddIcon sx={{ color: "#fff", fontSize: 18 }} />
                </Box>
              }
              sx={{ px: 0 }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontFamily: "serif",
                  color: "#121212"
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            {faq.content === "DELETE_ACCOUNT" && (
       <Stack spacing={4}>
              <Typography
                sx={{
                 fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6
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
                    //  fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6
                  }}
                >
                  Steps
                </Typography>

                <ol
                  style={{
                    paddingLeft: 18,
                    margin: 0,
                     fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6
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
                       fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6,
                      mb: 1
                    }}
                  >
                    What will be deleted
                  </Typography>

                  <ul
                    style={{
                      paddingLeft: 18,
                      margin: 0,
                      fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6
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
                    //    fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6
                    }}
                  >
                    What may be retained
                  </Typography>

                  <ul
                    style={{
                      paddingLeft: 18,
                      margin: 0,
                      fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6
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
                 fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6,
                  maxWidth: 700
                }}
              >
                If you cannot access your account, email us at{" "}
                <b>connect@shazlo.store</b> to request deletion.
              </Typography>
            </Stack>)}
            <AccordionDetails sx={{ px: 0 }}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#4a4a4a",
                  lineHeight: 1.6
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
         <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  <Box
    component="img"
    src={logo}
    alt="Shazlo"
    sx={{
      height: 60,
      objectFit: "contain",
      opacity: 0.95,
    }}
  />
  </Box> 
      </Box>

      {/* FOOTER */}
      <Box
  sx={{
    mt: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
  }}
>
 

  {/* SOCIAL ICONS */}
  <Stack direction="row" spacing={3}>
    {[
      {
        Icon: InstagramIcon,
        url: "https://www.instagram.com/shazlo.store?igsh=bTZ0bXM3NTdjOTN6",
      },
      {
        Icon: LinkedInIcon,
        url: "https://linkedin.com/company/shazlo",
      },
      {
        Icon: FacebookIcon,
        url: "https://www.facebook.com/shazlo.store",
      },
    ].map(({ Icon, url }, i) => (
      <Box
        key={i}
        sx={{
          backgroundColor: "#f7f2ea",
          borderRadius: "50%",
          boxShadow: "2px 2px 0px rgba(0,0,0,0.25)",
        }}
      >
        <IconButton
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#121212",
            "&:hover": {
              color: "#ff4d7a",
            },
          }}
        >
          <Icon />
        </IconButton>
      </Box>
    ))}
  </Stack>

  {/* LINKS */}
  <Stack direction="row" spacing={3}>
    <Typography sx={{ fontSize: 12, color: "#3b3b3b" }}>
      Privacy Policy
    </Typography>
    <Typography sx={{ fontSize: 12, color: "#3b3b3b" }}>
      Terms and conditions
    </Typography>
  </Stack>

  <Divider sx={{ width: 200, opacity: 0.3 }} />

  {/* COPYRIGHT */}
  <Typography sx={{ fontSize: 11, color: "#3b3b3b" }}>
    © 2025, Shazlo
  </Typography>
</Box>
    </Box>
  );
}

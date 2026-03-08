import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How do I upload products?",
    answer:
      "Go to the Products section and use the Add Product form, or use Catalog Upload for bulk uploads.",
  },
  {
    question: "How to manage orders?",
    answer:
      "View and manage orders in the Orders section. You can update status and track shipments.",
  },
  {
    question: "How to update store settings?",
    answer:
      "Navigate to Store Setting to update your store information, preferences, and notifications.",
  },
  {
    question: "How to view analytics?",
    answer:
      "Check the Analytics dashboard for sales trends, customer data, and performance metrics.",
  },
];

export default function HelpSupport() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Help & Support
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2}>
            Contact Support
          </Typography>
          <Typography mb={2}>
            Need more help? Contact our support team.
          </Typography>
          <Button variant="contained" color="primary">
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

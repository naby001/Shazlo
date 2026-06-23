import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Button } from "@mui/material";

export default function DownloadButton({ onClick }) {
  return (
    <Button
      variant="contained"
      startIcon={<DownloadRoundedIcon />}
      onClick={onClick}
      sx={{
        px: 3,
        py: 1.25,
        borderRadius: "14px",
        textTransform: "none",
        fontSize: "0.95rem",
        fontWeight: 600,
        letterSpacing: ".4px",

        bgcolor: "#102B4C",
        color: "#E5B94E",

        border: "1px solid rgba(229,185,78,.45)",

        boxShadow:
          "0 10px 30px rgba(16,43,76,.28), inset 0 1px 0 rgba(255,255,255,.08)",

        transition: "all .25s ease",

        "&:hover": {
          bgcolor: "#16375f",
          transform: "translateY(-2px)",
          boxShadow:
            "0 16px 40px rgba(16,43,76,.38), inset 0 1px 0 rgba(255,255,255,.12)",
        },

        "&:active": {
          transform: "translateY(0px) scale(.98)",
        },

        "& .MuiButton-startIcon": {
          color: "#E5B94E",
        },
      }}
    >
      Download the App
    </Button>
  );
}
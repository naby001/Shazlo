
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Button,
  Box,
  Fade,
} from "@mui/material";

export default function PriceFilterDialog({
  open,
  onClose,
  onApply,
  onClear,
}) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    if (!open) return;

    setMinPrice("");
    setMaxPrice("");
  }, [open]);

  const handleClear = () => {
    setMinPrice("");
    setMaxPrice("");

    if (onClear) onClear();
  };

  const handleApply = () => {
    onApply?.({
      minPrice:
        minPrice === ""
          ? null
          : Number(minPrice),
      maxPrice:
        maxPrice === ""
          ? null
          : Number(maxPrice),
    });

    onClose?.();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={300}
      PaperProps={{
        sx: {
          width: 450,
          maxWidth: "92vw",
          borderRadius: "22px",
          background: "#fff",
          boxShadow:
            "0 30px 70px rgba(0,0,0,.25)",
        },
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 700,
            color: "#000",
            mb: 3,
            textAlign: "center",
          }}
        >
          Price Range
        </Typography>

        <Typography
          sx={{
            color: "#666",
            textAlign: "center",
            mb: 4,
            fontSize: 15,
          }}
        >
          Leave either field empty if you
          only want a minimum or maximum
          price.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 5,
          }}
        >
          <TextField
            label="From"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              )
            }
            fullWidth
            inputProps={{
              inputMode: "numeric",
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",

                "& fieldset": {
                  borderColor: "#ddd",
                },

                "&:hover fieldset": {
                  borderColor: "#000",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#000",
                },
              },
            }}
          />

          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 600,
              color: "#000",
            }}
          >
            —
          </Typography>

          <TextField
            label="To"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              )
            }
            fullWidth
            inputProps={{
              inputMode: "numeric",
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",

                "& fieldset": {
                  borderColor: "#ddd",
                },

                "&:hover fieldset": {
                  borderColor: "#000",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#000",
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={handleClear}
            sx={{
              borderRadius: "14px",
              borderColor: "#000",
              color: "#000",
              py: 1.4,
              fontWeight: 600,

              "&:hover": {
                bgcolor: "#000",
                color: "#fff",
                borderColor: "#000",
              },
            }}
          >
            Clear
          </Button>

          <Button
            fullWidth
            variant="contained"
            onClick={handleApply}
            sx={{
              bgcolor: "#000",
              borderRadius: "14px",
              py: 1.4,
              fontWeight: 600,

              "&:hover": {
                bgcolor: "#111",
              },
            }}
          >
            Apply
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}


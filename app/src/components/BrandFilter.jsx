
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Fade,
} from "@mui/material";

export default function BrandFilterDialog({
  open,
  onClose,
  onApply,
  onClear,
  brandList = [],
}) {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  const filteredBrands = brandList.filter((brand) =>
    brand.toLowerCase().includes(search.toLowerCase())
  );

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const clearSelection = () => {
    setSelectedBrands([]);
    setSearch("");
    onClear?.();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={300}
      PaperProps={{
        sx: {
          width: 420,
          maxWidth: "92vw",
          borderRadius: "22px",
          background: "#fff",
          overflow: "hidden",
          boxShadow:
            "0 30px 80px rgba(0,0,0,.28)",
        },
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#000",
            mb: 3,
            letterSpacing: ".5px",
          }}
        >
          Select Brands
        </Typography>

        <TextField
          fullWidth
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search brands..."
          variant="outlined"
          sx={{
            mb: 3,

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

        <Box
          sx={{
            maxHeight: 280,
            overflowY: "auto",
            pr: 1,

            "&::-webkit-scrollbar": {
              width: 6,
            },

            "&::-webkit-scrollbar-thumb": {
              background: "#bbb",
              borderRadius: 20,
            },
          }}
        >
          {filteredBrands.map((brand) => (
            <Box
              key={brand}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 0.8,
                borderRadius: 2,
                transition: ".25s",

                "&:hover": {
                  bgcolor: "#f6f6f6",
                },
              }}
            >
              <FormControlLabel
                sx={{
                  width: "100%",
                  m: 0,
                }}
                control={
                  <Checkbox
                    checked={selectedBrands.includes(
                      brand
                    )}
                    onChange={() =>
                      toggleBrand(brand)
                    }
                    sx={{
                      color: "#000",

                      "&.Mui-checked": {
                        color: "#000",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                    }}
                  >
                    {brand === "MnS"
                      ? "Marks & Spencer"
                      : brand}
                  </Typography>
                }
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={clearSelection}
            sx={{
              borderColor: "#000",
              color: "#000",
              borderRadius: "14px",
              py: 1.2,
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
            onClick={() => {
              onApply?.(selectedBrands);
              onClose?.();
            }}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              borderRadius: "14px",
              py: 1.2,
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


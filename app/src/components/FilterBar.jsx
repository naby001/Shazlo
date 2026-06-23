import { useState } from "react";
import {
    Box,
    Chip,
    Avatar,
    Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import BrandFilterDialog from "./BrandFilter";
import PriceFilterDialog from "./PriceFilter";

const MotionAvatar = motion(Avatar);

export default function FilterBar({ filters, setFilters }) {
    const brands = [
        'Zara', 'MnS', 'Bulbul Fashions', 'Bijoi', 'Bonkers Corner', 'Souled Store', 'Chimpanzee'
    ];

    // const [gender, setGender] = useState("men");
    const [activeFilter, setActiveFilter] = useState("");

    const [brandOpen, setBrandOpen] =
        useState(false);
    const [priceOpen, setPriceOpen] =
        useState(false);
    const filters_display = [
        "Brand",
        "Price",
        "Product",
        "Color",
        "Location",
    ];

    const handleFilterClick = (filter) => {
        if (filter === "Brand")
            setBrandOpen(true)
        if (filter === "Price")
            setPriceOpen(true)


        // Replace this later with opening dialogs
        // setActiveFilter(filter);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                paddingTop: 3,
                // paddingBottom:-10,
                px: 1,
                mb: 2,
            }}
        >
            {/* Gender Toggle */}

            <MotionAvatar
                whileTap={{ scale: 0.9 }}
                animate={{
                    rotateY: filters.gender === "men" ? 0 : 180,
                }}
                transition={{
                    duration: 0.45,
                }}
                src={
                    filters.gender === "men"
                        ? "/men.jpg"
                        : "/women.jpg"
                }
                onClick={() => {
                    const nextGender =
                        filters.gender === "men" ? "women" : "men";

                    // setGender(nextGender);

                    setFilters(prev => ({
                        ...prev,
                        gender: nextGender,
                    }));
                }}
                sx={{
                    width: 40,
                    height: 40,
                    cursor: "pointer",
                    flexShrink: 0,
                }}
            />

            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    mx: 2,
                }}
            />

            {/* Horizontal Filters */}

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    overflowX: "auto",
                    flex: 1,
                    py: 0.5,

                    scrollbarWidth: "none",

                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            >
                {filters_display.map((filter) => (
                    <Chip
                        key={filter}
                        label={filter}
                        clickable
                        onClick={() =>
                            handleFilterClick(filter)
                        }
                        color={
                            activeFilter === filter
                                ? "primary"
                                : "default"
                        }
                        sx={{
                            flexShrink: 0,
                            borderRadius: "12px",
                            px: 1,
                            fontWeight: 500,
                            bgcolor:
                                activeFilter === filter
                                    ? "#000"
                                    : "#e5e5e5",
                            color:
                                activeFilter === filter
                                    ? "#fff"
                                    : "#000",

                            "&:hover": {
                                bgcolor:
                                    activeFilter === filter
                                        ? "#111"
                                        : "#d8d8d8",
                            },
                        }}
                    />
                ))}
                <BrandFilterDialog
                    open={brandOpen}
                    onClose={() => setBrandOpen(false)}
                    brandList={brands}
                    onApply={(selectedBrands) => {

                        setFilters(prev => ({
                            ...prev,
                            brands: selectedBrands,
                        }));

                    }}
                />
                <PriceFilterDialog
                    open={priceOpen}
                    onClose={() => setPriceOpen(false)}
                    onClear={() => console.log("clear")}
                    onApply={({ minPrice, maxPrice }) => {
                        setFilters(prev => ({
                            ...prev,
                            minPrice,
                            maxPrice,
                        }));
                    }}
                />
            </Box>
        </Box>
    );
}
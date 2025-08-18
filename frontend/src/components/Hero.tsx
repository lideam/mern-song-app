import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 6,
        background: "linear-gradient(to right, #000, #1DB954)",
        color: "white",
      }}
    >
      <Box maxWidth="lg" sx={{ display: "flex", gap: 6, alignItems: "center" }}>
        <Box flex={1}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Manage Your <span style={{ color: "#1DB954" }}>Music</span> 🎶
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
            Add, edit, and explore your favorite songs with powerful stats and
            filters — all in one place.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#1DB954",
              color: "#000",
              "&:hover": { backgroundColor: "#1ed760" },
            }}
            onClick={() => {
              const el = document.getElementById("songs");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Started
          </Button>
        </Box>

        <Box flex={1}>
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            alt="Music"
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

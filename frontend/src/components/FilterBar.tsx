import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setFilterGenre, setSearchQuery } from "../features/songs/SongSlice";
import { TextField, Chip, Stack, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterBar: React.FC = () => {
  const dispatch = useDispatch();
  const { list, filterGenre, searchQuery } = useSelector(
    (state: RootState) => state.songs
  );

  const genres = Array.from(
    new Set(list.map((s) => s.genre.trim().toLowerCase()))
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "900px",
        mt: 6,
        textAlign: "center",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search songs, artists, or albums..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#1DB954" }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "30px",
            bgcolor: "#222",
            color: "white",
            "& fieldset": { border: "none" },
          },
        }}
        sx={{
          input: { color: "white" },
        }}
      />

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        flexWrap="wrap"
        mt={3}
      >
        <Chip
          label="All"
          onClick={() => dispatch(setFilterGenre(""))}
          color={filterGenre === "" ? "success" : "default"}
          sx={{
            bgcolor: filterGenre === "" ? "#1DB954" : "#333",
            color: "white",
          }}
        />
        {genres.map((genre) => (
          <Chip
            key={genre}
            label={genre.charAt(0).toUpperCase() + genre.slice(1)}
            onClick={() => dispatch(setFilterGenre(genre))}
            sx={{
              bgcolor: filterGenre === genre ? "#1DB954" : "#333",
              color: "white",
              "&:hover": { bgcolor: "#1DB954aa" },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FilterBar;

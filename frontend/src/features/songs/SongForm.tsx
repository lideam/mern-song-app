import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addSong, updateSong } from "./SongSlice";
import {
  TextField,
  Button,
  Paper,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { Song, NewSong } from "../../types/song";

interface SongFormProps {
  editId?: string;
  onFinish: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ editId, onFinish }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.songs);

  const [form, setForm] = useState<NewSong>({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  useEffect(() => {
    if (editId) {
      const song = list.find((s) => s._id === editId);
      if (song) {
        const { _id, ...rest } = song;
        setForm(rest);
      }
    }
  }, [editId, list]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editId) {
      dispatch(updateSong({ ...form, _id: editId } as Song));
    } else {
      dispatch(addSong(form));
    }
    setForm({ title: "", artist: "", album: "", genre: "" });
    onFinish();
  };

  return (
    <Box
      id="addsong"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        py: 8,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 5,
          borderRadius: 4,
          backgroundColor: "#181818",
          color: "white",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          align="center"
          sx={{ color: "#1DB954" }}
        >
          {editId ? "✏️ Edit Song" : "➕ Add New Song"}
        </Typography>

        <Stack spacing={3} sx={{ mt: 2 }}>
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#333" },
                "&:hover fieldset": { borderColor: "#1DB954" },
                "&.Mui-focused fieldset": { borderColor: "#1DB954" },
              },
            }}
          />
          <TextField
            label="Artist"
            name="artist"
            value={form.artist}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#333" },
                "&:hover fieldset": { borderColor: "#1DB954" },
                "&.Mui-focused fieldset": { borderColor: "#1DB954" },
              },
            }}
          />
          <TextField
            label="Album"
            name="album"
            value={form.album}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#333" },
                "&:hover fieldset": { borderColor: "#1DB954" },
                "&.Mui-focused fieldset": { borderColor: "#1DB954" },
              },
            }}
          />
          <TextField
            label="Genre"
            name="genre"
            value={form.genre}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#333" },
                "&:hover fieldset": { borderColor: "#1DB954" },
                "&.Mui-focused fieldset": { borderColor: "#1DB954" },
              },
            }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#1DB954",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1ed760" },
            }}
          >
            {editId ? "Update Song" : "Add Song"}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SongForm;

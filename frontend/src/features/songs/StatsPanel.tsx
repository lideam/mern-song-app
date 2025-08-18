import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { fetchStats } from "./SongSlice";
import {
  Paper,
  Typography,
  Stack,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StatsPanel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stats, loading, error } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <Box
      id="stats"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        py: 8,
        px: 2,
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
          maxWidth: 900,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          align="center"
          sx={{ fontFamily: "'Orbitron', sans-serif", mb: 4 }}
        >
          📊 Music Stats
        </Typography>

        {loading && <Typography align="center">Loading stats...</Typography>}
        {error && (
          <Typography align="center" color="error">
            {error}
          </Typography>
        )}

        {stats && (
          <Stack spacing={5}>
            {/* Main counts in flex */}
            <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
              {[
                { label: "Songs", value: stats.totalSongs },
                { label: "Artists", value: stats.totalArtists },
                { label: "Albums", value: stats.totalAlbums },
                { label: "Genres", value: stats.totalGenres },
              ].map((item) => (
                <Card
                  key={item.label}
                  sx={{
                    flex: "1 1 200px",
                    bgcolor: "#222",
                    borderRadius: 3,
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      sx={{
                        color: "#1DB954",
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textTransform: "uppercase",
                        fontFamily: "'Rajdhani', sans-serif",
                        letterSpacing: 1,
                        mt: 1,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
              <Card
                sx={{
                  flex: "1 1 250px",
                  bgcolor: "#222",
                  borderRadius: 3,
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                    🎶 Top Genre
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#1DB954", mt: 1 }}
                  >
                    {stats.topGenre || "N/A"}
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: "1 1 250px",
                  bgcolor: "#222",
                  borderRadius: 3,
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                    👤 Top Artist
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#1DB954", mt: 1 }}
                  >
                    {stats.topArtist || "N/A"}
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  flex: "1 1 250px",
                  bgcolor: "#222",
                  borderRadius: 3,
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                    📈 Avg Songs per Artist
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#1DB954", mt: 1 }}
                  >
                    {stats.avgSongsPerArtist || "0"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box sx={{ height: 300, mt: 4 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                align="center"
                gutterBottom
                sx={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Songs by Genre
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.songsByGenre}>
                  <XAxis dataKey="_id" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#1DB954" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Stack>
        )}
      </Paper>
    </Box>
  );
};

export default StatsPanel;

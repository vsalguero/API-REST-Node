import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  Button,
  CardContent,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { requireAuth} from "../helpers/verifyauth";
import Swal from 'sweetalert2';

const MovieForm = () => {
  const [movie, setmovie] = useState({
    title: "",
    author: "",
    publish_year: "",
    genre: "",
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const params = useParams();

  const loadMovie = async (id) => {
    const result = await fetch(`http://localhost:4000/movies/${id}`);
    const data = await result.json();
    setmovie({
      name: data.name,
      summary: data.summary,
      genre: data.genre,
      director: data.director,
      date_release: data.date_release,
    });
    setEditing(true);
    console.log(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    //if not login redirect to login page
    requireAuth(navigate);
    if (params.id) {
      loadMovie(params.id);
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      //update the data
      await fetch(`http://localhost:4000/movies/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      });
      Swal.fire(
        'Correcto!',
        'Película modificada!',
        'success'
      );
      setLoading(false);
      navigate("/movies/list");
    } else {
      //create a new movie
      const res = await fetch(`http://localhost:4000/movies`, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
      });
      Swal.fire(
        'Correcto!',
        'Película registrada exitosamente!',
        'success'
      );
      setLoading(false);
      navigate("/movies/list");
    }
  };

  const handleChange = (e) =>
    setmovie({ ...movie, [e.target.name]: e.target.value });

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#fff",
            padding: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>{editing ? "Edit Movie" : "Create Movie"}</Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                label="Title of the movie"
                name="name"
                value={movie.name}
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: "1rem 0",
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                name="summary"
                label="Summary"
                value={movie.summary}
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: "1rem 0",
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                name="genre"
                label="Genre"
                value={movie.genre}
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: "1rem 0",
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                name="director"
                label="Director"
                value={movie.director}
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: "1rem 0",
                }}
              />
              
              <Button
                variant="contained"
                type="submit"
                disabled={!movie.title || !movie.author}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MovieForm;

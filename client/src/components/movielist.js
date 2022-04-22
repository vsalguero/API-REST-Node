import { useEffect, useState } from "react";
import { Typography, Card, Grid, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { requireAuth } from "../helpers/verifyauth";
import Swal from 'sweetalert2';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const loadMovies = async () => {
    const response = await fetch(`http://localhost:4000/movies`);
    const data = await response.json();
    console.log(data);
    setMovies(data);
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:4000/movie/${id}`, {
            method: "DELETE",
          });
          setMovies(movies.filter((movie) => movie.id !== id));
          Swal.fire(
            'Deleted!',
            'Libro eliminado.',
            'success'
          );
        }
      });
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    //if not login redirect to login page
    requireAuth(navigate);
    loadMovies();
  }, []);

  return (
    <>
      <h1>Movie List</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {movies.map((movie) => (
          <Grid item xs={4} key={movie.id}>
            <Card
              style={{
                marginBottom: "1rem",
                backgroundColor: "#f9f9f9",
              }}
            >
              <CardContent>
                <Typography>Título: {movie.title}</Typography>
                <Typography>Summary: {movie.summary}</Typography>
                <Typography>Año de publicación: {movie.release_date   }</Typography>
                <Typography>Director: {movie.director}</Typography>
                <Typography>Año de lanzamiento: {movie.release_date}</Typography>
                <br />
                <Button
                  variant="contained"
                  style={{ marginRight: "1rem" }}
                  color="inherit"
                  onClick={() => {
                    navigate(`/movie/${movie.id}/edit`);
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    handleDelete(movie.id);
                  }}
                >
                  Eliminar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MovieList;

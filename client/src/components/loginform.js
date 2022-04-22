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
import { Link, useNavigate } from "react-router-dom";
import { verifyAuth } from "../helpers/verifyauth.js";
import Swal from 'sweetalert2';

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    //if is login redirect to home page
    verifyAuth(navigate);

  }); 
  
  //Login request
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(login),
    }).then((response) => {
      if (response.status === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no registrado!'
        })
        throw new Error("Unauthorized");
      }else if (response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Contraseña incorrecta!'
        })
        throw new Error("Unauthorized");
      }else if (response.status === 200){
        return response.json();
      }      
    })
    .then(data => {
      //login successfully!
      //create session with the token
      sessionStorage.setItem("jwtToken", data.token);
      navigate("books/list");
    })
      .catch((err) => {
        console.log();
      });
    setLoading(false);
  };

  const handleChange = (e) =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={6}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#fff",
            padding: "1rem",
          }}
        >
          
          <CardContent>
          <Typography><h2>Login</h2></Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: "1rem 0",
                }}
              />
              <TextField
                variant="outlined"
                name="password"
                label="Contraseña"
                type="password"
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: "1rem 0",
                }}
              />

              <Button
                variant="contained"
                type="submit"
                disabled={!login.email || !login.password}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Entrar"
                )}
              </Button>
              <br />
              <br />
              <Link style={{ color: "blue" }} to="/users/new">
                Registrarse
              </Link>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginForm;

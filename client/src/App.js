import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import MovieForm from "./components/movieform";
import MovieList from "./components/movielist";
import UserForm from "./components/userform";
import UserList from "./components/userlist";
import Menu from "./components/navbar";
import LoginForm from "./components/loginform";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/movies/new" element={<MovieForm />} />
          <Route path="/movies/list" element={<MovieList />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/movies/:id/edit" element={<MovieForm />} />
          <Route path="/users/:id/edit" element={<UserForm />} />
          <Route path="/users/list" element={<UserList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

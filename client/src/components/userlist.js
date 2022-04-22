import { useEffect, useState } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { requireAuth} from "../helpers/verifyauth";
const UserList = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const loadUsers = async () => {
    const response = await fetch(`/users`);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/users/${id}`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //if not login redirect to login page
    requireAuth(navigate);
    loadUsers();
  }, []);

  return (
    <>
      <h1>User List</h1>
      {users.map((user) => (
        <Card
          key={user.id}
          style={{
            marginBottom: "1rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <CardContent>
            <Typography>Nombre: {user.name}</Typography>
            <Typography>Edad: {user.age}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Password: ******</Typography>
            <br />
            <Button
              variant="contained"
              style={{ marginRight: "1rem" }}
              color="inherit"
              onClick={() => {
                navigate(`/users/${user.id}/edit`);
              }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                handleDelete(user.id);
              }}
            >
              Eliminar
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default UserList;

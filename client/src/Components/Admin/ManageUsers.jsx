import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/get-users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Typography variant="h3">Manage Users here</Typography>
        <Button variant="contained" color="primary">
          Add user
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-5/6">
          <TableContainer
            component={Paper}
            style={{
              borderColor: "black",
              border: "2px solid black",
              borderCollapse: "collapse",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ border: "1px solid black" }}>
                    Name
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Mail
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Gender
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Age
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Edit
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.name}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ border: "1px solid black" }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      {user.email}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      {user.gender}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      {user.age}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      <IconButton color="primary" aria-label="edit user">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      <IconButton color="secondary" aria-label="delete user">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;

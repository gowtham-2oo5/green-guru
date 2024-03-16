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
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/get-schemes")
      .then((response) => response.json())
      .then((data) => {
        setSchemes(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    console.log(schemes);
  }, [schemes]);
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
        <Typography variant="h3">Manage Schemes here</Typography>
        <Button variant="contained" color="primary">
          Add Scheme
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schemes.map((scheme) => (
              <TableRow key={scheme.title}>
                <TableCell component="th" scope="row">
                  {scheme.title}
                </TableCell>
                <TableCell>{scheme.category}</TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="edit scheme">
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton color="secondary" aria-label="delete scheme">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageUsers;

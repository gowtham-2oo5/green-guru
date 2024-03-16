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
const ManageSchemes = () => {
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
                    Title
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Category
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
                {schemes.map((scheme) => (
                  <TableRow key={scheme.title}>
                    <TableCell
                      style={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      {scheme.title}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      {scheme.category}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      <IconButton color="primary" aria-label="edit scheme">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      <IconButton color="secondary" aria-label="delete scheme">
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

export default ManageSchemes;

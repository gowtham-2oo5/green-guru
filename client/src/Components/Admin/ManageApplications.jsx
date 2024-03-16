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
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
const ManageApplications = () => {
  const [applications, setapplications] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get("http://localhost:3030/get-applications");
        setapplications(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, [applications]);

  const handleRejectApp = async (id) => {
    try {
      const app = await axios.get(
        `http://localhost:3030/get-application/${id}`
      );
      app.status = "Rejected";
      const res = await axios.put(
        `http://localhost:3030/update-application-status/${id}`,
        app
      );
      if (res.status === 200) alert("Application Rejected");
    } catch (error) {
      console.log(error);
    }
  };

  const handleProcessApp = async (id) => {
    try {
      const app = await axios.get(
        `http://localhost:3030/get-application/${id}`
      );
      app.status = "Processing";
      const res = await axios.put(
        `http://localhost:3030/update-application-status/${id}`,
        app
      );
      if (res.status === 200) alert("Application in Processing stage");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAcceptApp = async (id) => {
    try {
      const app = await axios.get(
        `http://localhost:3030/get-application/${id}`
      );
      app.status = "Accepted/Done";
      const res = await axios.put(
        `http://localhost:3030/update-application-status/${id}`,
        app
      );
      if (res.status === 200) alert("Application Processing done");
    } catch (error) {
      console.log(error);
    }
  };

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
        <Typography variant="h3">Manage Applications here</Typography>
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
                    Application ID
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Service Title
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    User mail
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Application Status
                  </TableCell>
                  <TableCell style={{ border: "1px solid black" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.applicationID}>
                    <TableCell
                      style={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      {application.applicationID}
                    </TableCell>
                    <TableCell
                      style={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      {application.title}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      {application.userID}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      {application.status}
                    </TableCell>
                    <TableCell style={{ border: "1px solid black" }}>
                      <IconButton
                        color="primary"
                        aria-label="edit scheme"
                        onClick={() => handleRejectApp(application._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="edit scheme"
                        onClick={() => handleProcessApp(application._id)}
                      >
                        <AccessTimeIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="edit scheme"
                        onClick={() => handleAcceptApp(application._id)}
                      >
                        <DoneIcon />
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

export default ManageApplications;

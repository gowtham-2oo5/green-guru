const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3030, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

//* MODEL IMPORTS
const users = require("./Models/UserModel");
const schemes = require("./Models/SchemeModel");
const applications = require("./Models/ApplicationModel");

//* GET ROUTES

//************************************************************************* */

app.get("/get-schemes", async (req, res) => {
  try {
    const schemesData = await schemes.find().exec();
    if (schemesData.length === 0) {
      return res.status(404).json({ message: "No schemes found" });
    }
    res.status(200).json(schemesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch schemes" });
  }
});

app.get("/get-applications", async (req, res) => {
  try {
    const applicationsData = await applications.find().exec();
    if (applicationsData.length === 0) {
      return res.status(404).json({ message: "No applications open" });
    }
    res.status(200).json(applicationsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/get-application/:app_id", async (req, res) => {
  try {
    const id = req.params.app_id;
    const applicationData = await applications.findById(id).exec();
    if (!applicationData) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json(applicationData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/get-users", async (req, res) => {
  try {
    const usersData = await users.find().exec();
    if (usersData.length === 0) {
      return res.status(404).json({ message: "No users to be found" });
    }
    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users data" });
  }
});

//************************************************************************* */

//* POST ROUTES

//************************************************************************* */

app.post("/admin-verify", async (req, res) => {
  try {
    const data = req.body;
    const admin = await users.findOne({ email: data.email });
    if (!admin) {
      return res.status(400).json({ error: "Admin not found" });
    }
    const validPassword = await bcrypt.compare(data.password, admin.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }
    if (admin.role !== "Admin") {
      return res.status(400).json({ error: "Not an admin" });
    }
    res.status(200).json({ message: "Admin verified" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/login-user", async (req, res) => {
  try {
    const data = req.body;
    const user = await users.findOne({ email: data.email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }
    res.status(200).json({ message: "Logged in successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/open-application", async (req, res) => {
  try {
    const data = req.body;
    const schemeExists = await schemes.findOne({ title: data.title });
    if (!schemeExists) {
      return res.status(404).json({ error: "Scheme not found" });
    }
    const userExists = await users.findOne(data.email);
    if (!userExists) {
      return res.status(404).json({ error: "User not found" });
    }
    const newApplication = await new applications(data);
    newApplication.save();
    res.status(200).json({ message: "Application opened" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const newUser = new users(data);
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/add-scheme", (req, res) => {
  try {
    const data = req.body;
    const newScheme = new schemes(data);
    newScheme.save();
    res.status(200).json({ message: "Scheme added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//************************************************************************* */

//* PUT ROUTES

//************************************************************************* */

app.put("/update-application-status/:app_id", async (req, res) => {
  try {
    const id = req.params.app_id;
    const updatedData = req.body;
    const updatedApplication = await applications.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    if (!updatedApplication)
      return res.status(404).json({ message: "Application not found" });
    res
      .status(200)
      .json({ message: "Application status updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/update-scheme/:scheme_id", async (req, res) => {
  try {
    const id = req.params.scheme_id;
    const updateData = req.body;
    const updatedScheme = await schemes.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedScheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }
    res
      .status(200)
      .json({ message: "Scheme updated successfully", updatedScheme }); // Include updated data in response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update scheme" });
  }
});

//************************************************************************* */

//* DELETE ROUTES

//************************************************************************* */
app.delete("/remove-user/:user_id", async (req, res) => {
  try {
    const id = req.params.user_id;
    const deletedUser = await users.findByIdAndDelete(id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/remove-scheme/:scheme_id", async (req, res) => {
  try {
    const id = req.params.scheme_id;
    const deletedScheme = await schemes.findByIdAndDelete(id);

    if (!deletedScheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }

    res.status(200).json({ message: "Scheme deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete scheme" });
  }
});

//************************************************************************* */

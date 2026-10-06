const express = require("express");
const cors = require("cors"); 
const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const equipamentRoutes = require("./routes/equipamentRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

app.use("/equipament", equipamentRoutes);
app.use("/", authRoutes);

module.exports = app;
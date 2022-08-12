const express = require("express");
const server = express();
const cors = require("cors");
const connectDB = require("./config/db")
const PORT = 5000;

server.use(express.json());
connectDB();
server.use(cors());
server.use("/api/student", require("./routes/studentRoutes"));
server.use("/", () => {
  console.log("Default Route");
});

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

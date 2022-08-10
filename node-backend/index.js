const express = require("express");
const server = express();
const PORT = 5000;

server.use("/", (req,res)=>{
    res.send("Working!");
});

server.listen(PORT, ()=>{
    console.log("Server running on port "+PORT);
});
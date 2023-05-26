const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

let online = 0;

io.on("connection", (socket) => {
  online += 1;

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    online -= 1;

    console.log("user disconnected");
  });

  io.emit("online", `Active: ${online}`);
});

server.listen(8080, () => {
  console.log("Server is running at port 8080");
});



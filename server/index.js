const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A User Connected", socket.id);
  socket.on("send-message", (data) => {
    io.emit("receive-message", {
      id: Date.now(),
      user: data.user,
      text: data.text,
    });
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(4000, () => {
  console.log("Express Server running on port 4000");
});

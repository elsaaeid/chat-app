const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle chat messages
  socket.on("message", (message) => {
    console.log("Received message:", message);
    io.emit("message", message); // Broadcast the message to all connected clients
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server
const port = 3001; // You can use any available port
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

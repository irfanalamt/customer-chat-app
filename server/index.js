const express = require("express");
const app = express();
app.use(express.json());

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

httpServer.listen(3005, () => console.log("Listening on port 3005"));

io.on("connection", (socket) => {
  console.log("socket connected" + " socket ID=" + socket.id);
  socket.on("join_room", ({ room, userName }) => {
    socket.join(room);
    console.log("Joined room:" + room + "Username:" + userName);
  });
  socket.on("disconnect", () => console.log("User disconnected."));
});

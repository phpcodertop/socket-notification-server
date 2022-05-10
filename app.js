const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Socket Server For Notifications');
});

io.on('connection', (socket) => {
  //console.log('a user connected');
  socket.on('notification', (msg) => {
    io.emit('notification', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

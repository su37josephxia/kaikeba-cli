const express = require('express')
const app = express()
// const cors = require('cors');
// app.use(cors());
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')
app.get('/api/abc', function (req, res) {
  console.log('abc....')
  res.json({
    abc: 123
  })
});

app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use(express.static(path.join(__dirname,'./')))

io.on('connection', function (socket) {
  console.log('a user connected');

  //响应某用户发送消息
  socket.on('message', function (msg) {
    console.log('chat message:' + msg);
    // 广播给所有人
    io.emit('message', msg);
    // 广播给除了发送者外所有人
    // socket.broadcast.emit('chat message', msg)
    if (msg === 'do:lint') {
      const lint = require('../../../lib/api/lint')
      lint().on('data', data => {
        console.log('lint..', data)
        io.emit('message', data.toString())
      })
    }
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

if (!module.parent) {
  http.listen(4000);
  console.log('app started at port 4000...');
} else {
  module.exports = http
}
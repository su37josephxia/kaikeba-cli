const express = require('express')
const app = express()
// const cors = require('cors');
// app.use(cors());
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use(express.static(path.join(__dirname,'./')))

io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('command', msg => {
    console.log('msg', msg, `../../../lib/api/${msg.command}`)
    if (msg.command) {
      require(`../../../lib/api/${msg.command}`)
        (msg.payload)
        .on('data', data => {
          // console.log('console..', data.toString())
          io.emit('console', data.toString())
        })
    }
  })

  // 
  // socket.on('console', function (msg) {

  //   // 广播给除了发送者外所有人
  //   // socket.broadcast.emit('chat message', msg)
  //   if (msg === 'do:lint') {
  //     const lint = require('../../../lib/api/lint')
  //     lint().on('data', data => {

  //     })
  //   }
  // });

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
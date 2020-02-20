const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')


// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(path.join(__dirname, '../frontend/build')));

io.on('connection', function(socket){
  console.log('a user connected');
  
  //响应某用户发送消息
  socket.on('chat message', function(msg){
      console.log('chat message:' + msg);
      
    // 广播给所有人
    io.emit('chat message', msg);
    // 广播给除了发送者外所有人
    // socket.broadcast.emit('chat message', msg)
  });  

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

if (!module.parent) {
  app.listen(3000);
  console.log('app started at port 3000...');
} else {
  module.exports = app
}
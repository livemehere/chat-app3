const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);



app.use(express.static(__dirname+'/src'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/src/index.html');
})
// user enter and out
io.on('connection',(socket)=>{
    console.log('user connection');
    socket.on('disconnect',()=>{
        console.log('user disconnect')
    })
})
// transmit msg
io.on('connection',(socket)=>{
    socket.on('chatting',(data)=>{
        console.log(data);
        io.emit('chatting',data);
    })
})

http.listen(3000,()=>{
    console.log('server is running with port 3000');
});
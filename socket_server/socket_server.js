/**
 * Created by ziberman on 1/20/17.
 */

const socket = require('socket.io'), express = require('express');

const app = express();

const io = socket.listen(app.listen(8081));

// io.set('log level', 1);

app.get('/', (req, res) => {

    // res.send('Hello socket!');

    res.sendFile(__dirname + "/index.html");

});

io.sockets.on('connection', (client) => {

    // console.log('Connected');

    // client.emit('message', { hello:'Guest'});

    client.on('message', (data)=>{

        console.log(data);

       /* client.set('nickname', data);*/

        // client.emit('hello', { hello:'Hello ' + data});

        client.broadcast.emit('hello',{hello: "Hello from " + data});

        // io.sockets.emit('hello', {hello: "Hello all"});

    });

    client.on('new_message', (data)=>{

        client.emit('hello', { hello:'Hello ' + data});

        /*client.get('nickname', (err, oldName)=>{

            client.broadcast.emit('hello',{hello: oldName + " = " + data});

        });*/

        /*client.set('nickname', data);*/

    });

    /*client.on('disconnect', function(){

        io.sockets.emit('hello', {hello:"Disconnet one client"});

    });*/

});
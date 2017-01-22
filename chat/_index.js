/**
 * Created by ziberman on 1/21/17.
 */

const express = require('express');

const app = express();

const port = 8080;

//

app.set('views', __dirname + '/tpl');

app.set('view engine', 'jade');

app.engine('jade', require('jade').__express);

app.use(express.static(__dirname + '/public'));

//

app.get('/', function(req,res){

    res.render('page');

});

let io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', (client)=>{

    // process.stdout.write("Connect");

    client.emit('message', {message:"Welcome to chat !"});

    client.on('send',(data)=>{

       io.sockets.emit('message',{message:data.message});

    });

});

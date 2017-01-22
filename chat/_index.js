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

let users = {};

function getUsers(obj){

    var tmp = [];

    for(var i in obj)

        tmp.push(obj[i]);

    return tmp.join(', ');
}

io.sockets.on('connection', (client)=>{

    // process.stdout.write("Connect");

    // client.emit('message', {message:"Welcome to chat !"});

    client.on('send',(data)=>{

       io.sockets.emit('message',{message:data.message});

    });

    client.on('hello', function(data){

       client.set('nickname', data.name);

       client.emit('message',{message:'--- Welcome to chat, ' + data.name + ' ! ---'});

       client.broadcast.emit('message', {message:'--- ' + data.name + ' join to chat ---'});


       if(Object.keys(users).length > 0){

           var userList = getUsers(users);

           client.emit('message',{message:'--- in chat ' + userList + ' ! ---'});

       }else{

           client.emit('message',{message:'--- in chat you one ! ---'});
       }
        users[client.id] = data.name;
    });

    client.on('disconnect',function(data){

        if(Object.keys(users).length > 1){

            client.get('nickname', function(err,name){

                client.broadcast.emit('message',{message: name + " lost chat"});

            });
        }

        delete users[client.id];

    });

});

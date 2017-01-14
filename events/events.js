/**
 * Created by ziberman on 1/14/17.
 */

const http = require("http");

let server = http.createServer().listen(8080);

server.on('request',(req,res)=>{

    let x = require('url').parse(req.url, true);

    console.info(x);

    console.log('Request:', req.method, req.url);

    console.log('STATUS: ', res.statusCode);

});

server.on('request',(req,res)=>{

    if(req.url == '/stop'){

        req.connection.destroy();

        // res.writeHead(200, {'Connection':'close'});

        server.close();

    } else {

        res.writeHead(200);

        res.write('Hello');

        res.end();
    }

});

server.on('connection',()=>{

    console.info("Connect");

});

server.on('close',()=>{

    console.info("Close");

});

server.on('listening',()=>{

    console.info("Listen: 8080...");

});


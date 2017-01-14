/**
 * Created by ziberman on 1/14/17.
 */

const http = require("http");

const fs = require("fs");

const server = http.createServer((req,res)=>{

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    res.write("Привет от Нода !");

    fs.readFile('index.html', (err, content)=>{

        res.write(decodeURIComponent(content));

       res.end();

    });

});

server.listen(8080);
/**
 * Created by ziberman on 1/15/17.
 */

const fs = require('fs');

const http = require('http').createServer().listen(8080);

const file = fs.createReadStream('index.html');

http.on('request',(req,res)=>{

    res.writeHead(200);

    let img = fs.createReadStream('apple.svg');

    img.pipe(res);

});

file.on('data', (txt)=>{

   // console.info(txt.toString());

   // process.stdout.write(txt.toString());

});

file.pipe(process.stdout); // console.info(txt.toString());
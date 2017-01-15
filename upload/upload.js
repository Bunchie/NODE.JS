/**
 * Created by ziberman on 1/15/17.
 */

const fs = require('fs');

const http = require('http').createServer().listen(8080);

http.on('request', (req,res)=>{

   res.writeHead(200);

   let newFile = fs.createWriteStream('file.txt');

   let newFile2 = fs.createWriteStream('file-2.txt');

   // process.stdout.write(req);

   process.stdout.write(req.url);

   newFile.write(req.url);

   // req.pipe(newFile);

   req.on('data',(data)=>{

      let buffer = newFile2.write(data);

      if(!buffer) req.pause(); // если заполнин

   });

   newFile2.on('drain',()=>{ // когда освободиться

      req.resume();

   });

   req.on('end',()=>{

      console.log('end!');

      res.end();

   });

});
/**
 * Created by ziberman on 1/16/17.
 */

const http = require('http');

http.createServer((req,res)=>{

    console.log('Server listen');

    res.writeHead(200);

    req.on('data',(data)=>{

       console.log("Request ", data.toString());

       res.write('Write: ' + decodeURIComponent(data));

    });

    req.on('end', ()=>{

        console.log("END");

    });

}).listen(8080);

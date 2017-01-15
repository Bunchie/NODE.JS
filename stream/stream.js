/**
 * Created by ziberman on 1/15/17.
 */

const server = require('http').createServer().listen(8080);

server.on('request', (req,res)=>{

    res.writeHead(200);

    res.write('Start');

    setTimeout(()=>{

        res.write('Hello!');

        res.end();

    }, 1000);

    req.pipe(res); // req -> res

    /*req.on('data',(msg)=>{

       // console.log(msg.toString());

       process.stdout.write(msg.toString());

    });

    req.on('end',()=>{

       res.end();

    });*/

});

server.on('close',(req,res)=>{

});


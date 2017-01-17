/**
 * Created by ziberman on 1/17/17.
 */

const http = require('http');

const fs = require('./get_file');

const msg = require('./logs');

http.createServer((req,res)=>{

    msg.info('Download start');

    res.writeHead(200,{"Content-Type":"html/plain"});

    let file = fs('apple.svg');

    file.pipe(res);

    msg.info('Download finish');

    res.end();

}).listen(3000);
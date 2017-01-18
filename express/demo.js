/**
 * Created by ziberman on 1/18/17.
 */

// curl http://localhost:8081/?name=ivan

const http = require('http');

const url = require('url');

http.createServer((req,res)=>{

    let data = '';

    let input = url.parse(req.url);

    //process.stdout.write(req);

    //process.stdout.write(req.toString());

    console.log(req);

    if(input.query){

        let q = input.query.split('=');

        switch(q[1].toLowerCase()){

            case 'mike': data = '[{"name":"Mike Smith", "age":45,"admin":false}]'; break;

            case 'john': data = '[{"name":"John Smith", "age":25,"admin":true}]'; break;

            default: data = '[{"name":"Unknown user", "age":"UNKNOWN","admin":false}]'; break;

        }
    }

    console.log('Server listen');

    res.writeHead(200,{"Content-Type":"application/json"});

    res.write(data.toString());

    res.end();

}).listen(8081); // Ne 8080!

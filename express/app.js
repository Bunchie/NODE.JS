/**
 * Created by ziberman on 1/18/17.
 */

const express = require('express');

const request = require('request');

const url = require('url');

const app = express();

app.listen(8080);

app.set('views', __dirname);

app.set('view engine', 'ejs');

let names = {
                'John Smith':'admin',

                'Mike':'manager',

                'Ivan':'user'

            };

app.get('/', (req,res)=>{

   res.sendfile(__dirname + '/test.html'); // Псевдо константа

});

app.get('/user/:name', (req, res)=>{

    let name = req.params.name;

    let options = {

        protocol: 'http',

        host:'localhost:8081',

        pathname:'/',

        query:{user:name}

    };

    let needUrl = url.format(options);

   /* let needUrl = 'http://localhost:8081/?name='+ name;

    console.log(needUrl);*/

request(needUrl, function (error, response, body) {

        if (!error && response.statusCode == 200) {

            let arr = JSON.parse(body);

            let role;

            // console.log(names['john']);

        if(names[arr[0].name] == undefined)

            role = "UNKNOWN";

        else

            role = names[arr[0].name];

            res.render('user',{name:arr[0].name/*request.params.name*/,age:arr[0].age/*role*/,role:role,scores:[1,2,3,4,5]});

            // res.render('scores',{scores:1});

            // console.log(body) // Show the HTML for the Google homepage.

            res.end('end');

        }

        else

            res.write('dfgd');

    });

});

/*
app.get('/user/:name',(req,res)=>{

    let role;

    let name = req.params.name.toLowerCase();

    if(name in names){

        role = names[req.params.name];

} else
        role = "Unknown role";

    res.render('user',{name:req.params.name, role:role});

    res.end();

});*/

/**
 * Created by ziberman on 1/21/17.
 */

const express = require('express');

const app = express();

app.listen(7070);

app.set('views', __dirname);

app.set('view engine', 'jade');

app.engine('jade', require('jade').__express);

app.use(express.static(__dirname + '/')); // add static file (client.js)

app.get('/',(req,res)=>{

    res.render('index');

});

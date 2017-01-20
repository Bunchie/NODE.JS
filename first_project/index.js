/**
 * Created by ziberman on 1/19/17.
 */

"use strict";

const http = require('http');

http.createServer((req, res) => {

    console.log(req.url);

    try {

        require(`./controllers/${req.url}Controller`)(req, res);

    } catch (e) {

        res.writeHead(404);

        res.end("N F");

    }

    // npm i ect --save шаблонизатор

    // node chrome devtool

}).listen(8080);
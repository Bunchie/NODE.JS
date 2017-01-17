/**
 * Created by ziberman on 1/16/17.
 */

const http = require('http');

let makeRequest = function (msg) {

    console.log('Request start');

    let options = {
        host: 'localhost',
        port: 8080,
        path: '/',
        method: 'POST'
    };

    let request = http.request(options, (res) => {

            console.log('Response start');

        res.on('data', (data) => {

            console.log(data.toString());

        });

    });

    request.write(msg);

    request.end();

}

// makeRequest("LALALAL");

module.exports = makeRequest;
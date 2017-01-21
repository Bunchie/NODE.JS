/**
 * Created by ziberman on 1/20/17.
 */

const url = require('url');

const request = require('request');

const express = require('express');

const ejs = require('ejs');

const MY_IP = '80.250.209.226';

const app = express();

app.listen(8080);

app.set('views', __dirname +"/views");

app.get('/google/feeds/for/:search', function (req, res) {

    let search = req.params.search;

    let options = {

        protocol: 'http',

        host: 'ajax.googleapis.com',

        pathname: '/ajax/services/feed/find',

        query: {

            v: '1.0',

            userip: MY_IP,

            q: search
        }
    };

    let searchURL = url.format(options);

    request(searchURL, function (err, response, body) {

        let feeds = JSON.parse(body);

        res.render('index.ejs', {feeds: feeds.responseData, keyword: search});
    });

});

/**
 * Created by ziberman on 1/19/17.
 */

"use strict";

const ECT = require('ect'), renderer = ECT({root: __dirname + '/../views'}), data = {message: 'Hello, World!'};

module.exports = function (req, res) {

    debugger;

    res.end(renderer.render('index.html', data));

}
/**
 * Created by ziberman on 1/17/17.
 */

let fs = require('fs');

function getFile(name){

    return fs.createReadStream(name);

}

module.exports = getFile;
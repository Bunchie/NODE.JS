/**
 * Created by ziberman on 1/15/17.
 */

const fs = require('fs');

let file = fs.createReadStream('file.txt');

let newFile = fs.createWriteStream('file-1.txt');

file.pipe(newFile);
/**
 * Created by ziberman on 1/14/17.
 */

const fs = require('fs');

// let content = fs.readFileSync('test.txt');

fs.readFile('test.txt',(err, data)=>{

   if(err) throw new Error("Error!");

   console.log(decodeURIComponent(data));

});

// console.info(decodeURIComponent(content));

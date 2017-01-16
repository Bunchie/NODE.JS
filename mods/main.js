/**
 * Created by ziberman on 1/16/17.
 */

const json= require('./courses');

console.log(json.Hello + " " + json.World);

const modThis = require('./this');

modThis.sayHello();

const modExports = require('./exports');

modExports.sayWorld();

modExports.x();

modExports.y();

const modModuleExports = require('./mode.exports');

modModuleExports();

const User = require('./obj');

let user = new User("Mike", "20");

console.log(` HELLO ${user.name}, ${user.age} !`);

user.foo();

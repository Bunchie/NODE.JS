/**
 * Created by ziberman on 1/14/17.
 */

// const events = require('events').EventEmitter;

const events = require('events');

const EventEmitter = events.EventEmitter;

let test = new EventEmitter;

test.on('myEvent', (param)=>{

    console.info(param);

});

test.on('myEventObj', (param)=>{

   console.log(param.name,param.age);

});

test.on('myEventArr', (param)=>{

   console.log(arguments[0],arguments[1]);

});

test.emit('myEvent', 'Test one');

test.emit('myEvent', 'Test two');

test.emit('myEventArr', 'one', 'two');

test.emit('myEventObj',{name:'John', age:25});
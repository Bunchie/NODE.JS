const logger = require('events').EventEmitter;

let log = new logger();

let users = ['hello', 'world'];

let msgs = ['message','super'];

log.on('message', (msg)=>{

    console.info(`New message ${msg.users[0]},${msg.users[1]}`);

    console.info(`New message ${msg.msgs[0]},${msg.msgs[1]}`);

});

log.emit('message', {users, msgs});











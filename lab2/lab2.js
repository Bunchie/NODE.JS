/**
 * Created by ziberman on 1/15/17.
 */

const event = require('events').EventEmitter;

const logger = new event();

let user = [], msgs = [];

logger.on('login', (name)=>{

    console.info('New user: ', name);

    user.push(name);

});

logger.on('message', (msg)=>{

    console.info('New message: ', msg);

    msgs.push(msg);

});

logger.on('getUsers', ()=>{

    console.log('-----\n Users: \n-------');

    console.log(user.join('\n'));

});

logger.on('getMessages', ()=>{

    console.log('-----\n Messages: \n-------');

    console.log(msgs.join('\n'));

});

//=============================================================================

logger.emit('login', 'John');

logger.emit('message', 'Hello from John');

logger.emit('login', 'Mike');

logger.emit('message', 'Hello from Mike');

logger.emit('getUsers');

logger.emit('getMessages');

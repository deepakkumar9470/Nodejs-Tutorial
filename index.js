const EventEmitter = require('events');

const event = new EventEmitter ();

event.on('Hello Deepak', () => {
    console.log('My Name is Deepak Kumar Chouhan!');
});

event.emit('Hello Deepak');

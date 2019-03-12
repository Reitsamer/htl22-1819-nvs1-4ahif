console.log('Starting app.js');

const notes = require('./notes');

console.log(process.argv);

var command = process.argv[2];

console.log('Command:', command);

// console.log(notes);

// console.log('Call from app.js:', notes.add(11, 22));

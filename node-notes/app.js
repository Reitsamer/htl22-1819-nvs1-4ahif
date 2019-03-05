console.log('Starting app.js');

const notes = require('./notes');

console.log(notes);

console.log('Call from app.js:', notes.add(11, 22));

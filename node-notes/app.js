console.log('Starting app.js');

const notes = require('./notes');

const yargs = require('yargs');

// console.log('Process.argv:');
// console.log(process.argv);
//
// console.log('Yargs.argv:');
// console.log(yargs.argv);

var command = process.argv[2];
var argv = yargs.argv;

console.log('Command:', command);

if (command === 'add') {
  console.log(`Adding new note: ${argv.title} -> ${argv.body}`);
} else if (command === 'list') {
  console.log('Listing all notes.');
} else if (command === 'read') {
  console.log('Reading note.');
} else if (command === 'remove') {
  console.log('Removing note.');
} else {
  console.error('Command not recognized.');
}

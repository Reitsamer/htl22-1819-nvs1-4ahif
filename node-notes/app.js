const notes = require('./notes');

const yargs = require('yargs');

// console.log('Process.argv:');
// console.log(process.argv);
//
// console.log('Yargs.argv:');
// console.log(yargs.argv);

var command = process.argv[2];
var argv = yargs.argv;

if (command === 'add') {

  notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

  notes.getAll();

} else if (command === 'read') {

  notes.getNote(argv.title);

} else if (command === 'remove') {

  notes.removeNote(argv.title);

} else {
  console.error('Command not recognized.');
}

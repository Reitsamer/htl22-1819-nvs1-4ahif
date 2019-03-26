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

  var existingNotes = notes.getAll();

  existingNotes.forEach(note => {
    notes.logNote(note);
  });

} else if (command === 'read') {

  var foundNote = notes.getNote(argv.title);

  if (foundNote !== undefined) {
    console.log('Note found:');
    notes.logNote(foundNote);
  } else {
    console.log(`Note with title '${argv.title}' not found`);
  }

} else if (command === 'remove') {

  var flag = notes.removeNote(argv.title);
  if (flag) {
    console.log('Note removed.');
  } else {
    console.log('Note not found.');
  }

} else {
  console.error('Command not recognized.');
}

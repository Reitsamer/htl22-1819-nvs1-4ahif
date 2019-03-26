const notes = require('./notes');

const yargs = require('yargs');

// console.log('Process.argv:');
// console.log(process.argv);
//
// console.log('Yargs.argv:');
// console.log(yargs.argv);

const titleOptions = {
  describe: 'The title of the note.',
  demand: true,
  alias: 't'
};

var command = process.argv[2];
var argv = yargs
  .command('add', 'Adds a note to our database.', {
    title: titleOptions,
    body: {
      describe: 'The body of the note.',
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'Lists all notes in database.')
  .command('read', 'Reads the note with the given title', {
    title: titleOptions
  })
  .command('remove', 'Removes the note with the given title', {
    title: titleOptions
  })
  .argv;

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

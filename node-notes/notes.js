const fs = require('fs');

const db = 'notes-data.json';

// CHALLENGE:
// 1. Use 'chalk' to print success/error messages with green/red background
// 2. Extract code for loading notes -> fetchNotes() (returns array of notes)
// 3. Extract code for saving notes -> saveNotes(notes)

// 2
var fetchNotes = () => {
  try {
    // Read existing data
    var notesAsString = fs.readFileSync(db);
    return JSON.parse(notesAsString);
  } catch {
    return [];
  }
}

// 3
var saveNotes = (notes) => {
  fs.writeFileSync(db, JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();

  // Add new note to existing data
  var newNote = {
    title: title,
    body: body
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length > 0) {
    console.error(`Note with title ${title} already exists.`);
    return;
  }

  notes.push(newNote);

  // Write (updated) data
  saveNotes(notes);
}

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) => {
  var notes = fetchNotes();

  var foundNotes = notes.filter((note) => note.title === title);
  return foundNotes[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();

  var remainingNotes = notes.filter(note => note.title !== title);

  saveNotes(remainingNotes);
  return notes.length !== remainingNotes.length;
}

var logNote = (note) => {
  console.log(`Title: ${note.title}; Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}

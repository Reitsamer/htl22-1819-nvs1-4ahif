console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log(`Adding note: ${title} --> ${body}`);
}

var getAll = () => {
  console.log(`Getting all notes.`);
}

var getNote = function(title) {
  console.log(`Getting note: ${title}`);
}

var removeNote = function removeXXX(title) {
  console.log(`Removing note: ${title}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}

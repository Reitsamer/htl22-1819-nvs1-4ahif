console.log('Starting notes.js');

const fs = require('fs');

const db = 'notes-data.json';

var addNote = (title, body) => {
  console.log(`Adding note: ${title} --> ${body}`);

  var data = {
    title,
    body
  };

  var jsonData = JSON.stringify(data);

  fs.writeFileSync(db, jsonData);
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

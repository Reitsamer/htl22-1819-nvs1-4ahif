console.log('Starting notes.js');

var name = "Franzi";
var adresse = {
  plz: 1190,
  ort: "Wien"
};

var add = (x, y) => x + y;
var subtract = (x, y) => x - y;


console.log('Ergebnis:', add(5, 7));

var age = 30;

module.exports = {
  add, // add: add,
  subtract,
  age, // age: age
}
// console.log(module);

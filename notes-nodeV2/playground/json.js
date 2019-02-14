console.log('Executing notes-nodeV2/playground/json.js')
// var obj = {
//   name: 'Fame'
// };.
//  // JSON.stringify(obj) -  converts JSON object to a JSON string
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name":"Fame", "age":"25"}';
// // JSON.parse(JSONString) -  converts a JSON String to a JSON object
// var personObj = JSON.parse(personString);
// console.log(typeof personString);
// console.log(personString);
// console.log(typeof personObj);
// console.log(personObj);


const fs = require('fs');

var originalNoteObj = {
  title: 'Some Title ',
  body: 'Some Body of the Note'
};

var originalNoteString = JSON.stringify(originalNoteObj);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(noteString);
console.log(typeof noteObj);
console.log(noteObj.title);

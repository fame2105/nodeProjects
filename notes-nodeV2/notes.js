console.log('Starting notes-nodeV2/notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try{
    var existingNotes = fs.readFileSync('notes-data.json');
    return JSON.parse(existingNotes);
    console.log('Existing Notes on file: ', notes);
  } catch (e){
    return [];
  }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
var notes = fetchNotes(); //notes will contain the exisitng notes in the file
var note = {
  title,
  body
};
//to keep the title of the notes unique, if duplicateNotes contain any values then their is a duplicate entry.
var duplicateNotes = notes.filter((param)=>param.title === title);
// if duplicateNotes is empty then we aren't trying to insert any duplicate note in the file
if(duplicateNotes.length ===0){
  notes.push(note);
saveNotes(notes);
return note;
}
}

var listNotes = () => {
  return fetchNotes();
}

var removeNote = (title) => {
//fetch Notes
var notes = fetchNotes();
// filter notes, removing the one with the title of argument
var filteredNotes = notes.filter((param) => param.title !== title);
//save new notes array
saveNotes(filteredNotes);

return (notes.length !== filteredNotes.length);
}

var readNote = (title) => {
var notes = fetchNotes();
var filteredNotes = notes.filter((param) => param.title === title);
return filteredNotes[0];
}

var logNote = (note) => {
  console.log('----------');
  console.log('Title:  '+ note.title);
  console.log('Body:  '+ note.body);
}

module.exports = {
  addNote,
  listNotes,
  removeNote,
  readNote,
  logNote
};

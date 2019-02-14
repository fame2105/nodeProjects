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

var saveNotes(notes){
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
var notes = fetchNotes();
var note = {
  title,
  body
};
//fetch existing notes on the file
// inside try block because if the file notes-add.json doensn't exist then there would be error


//to keep the title of the notes unique, if duplicateNotes contain any values then their is a duplicate entry.
var duplicateNotes = notes.filter((note)=>note.title === title);
// if duplicateNotes is empty then we aren't trying to insert any duplicate note in the file
if(duplicateNotes.length ===0){
  notes.push(note);
saveNotes(notes);
} else {
  console.log('A note with the title :\"', title + '\" already exisits, Please provide a unique title');
}
}

var listNotes = () => {
  console.log('Listing a.ll notes');
}

var removeNote = (title) => {
console.log('Removing note with title : ', title);
}

var readNote = (title) => {
console.log('Reading note with title :', title);
}

module.exports = {
  addNote,
  listNotes,
  removeNote,
  readNote
};

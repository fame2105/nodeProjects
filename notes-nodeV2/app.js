console.log('Starting notes-nodeV2/app.js');

const fs = require('fs');
const _ = require('lodash');
// yargs is a very useful 3rd party module for parsing the command line arguments and values
const yargs = require('yargs');

const notes = require('./notes.js');

var titleDescription = {
  description: 'title of the note',
  demand: true,
  alias:'t'
}
var bodydescription = {
  description:'body of the note',
  demand:true,
  alias:'b'
}
var args = yargs
.command('add', 'Add a new note', {title: titleDescription, body: bodydescription})
.command('list', 'Lists all notes')
.command('read', 'Reads a note', {title: titleDescription})
.command('remove', 'Removes a note', {title: titleDescription})
.help().argv;
console.log('yargs.argv = ', args);
// fetching the command from yargs.argv _ array
var command = args._[0];
console.log('Command : ', command);

if(command === 'add'){
  var note = notes.addNote(args.title, args.body);
  console.log(note);
  if(note){
    console.log('Note Added');
  notes.logNote(note);
  } else {
    console.log('Note with this title already exists, Please provide a unique title for your Note');
  }
}
else if(command === 'list'){
  var allNotes = notes.listNotes();
  console.log(allNotes.length + ' notes');
  allNotes.forEach((param) => notes.logNote(param));
}
else if(command === 'remove'){
  var isNoteRemoved = notes.removeNote(args.title);
  var message = isNoteRemoved ? 'Note removed successfully' : 'Note Not found';
  console.log(message);
}
else if(command === 'read'){
  var note = notes.readNote(args.title);
  if (note) {
    console.log('Note Read');
    notes.logNote(note);
  }
   else {
    console.log('Note not found with this title');
  }
}
else{
  console.log('Unrecognized Command');
}

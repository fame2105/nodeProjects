console.log('Starting notes-nodeV2/app.js');

const fs = require('fs');
const _ = require('lodash');
// yargs is a very useful 3rd party for parsing the command line arguments and values
const yargs = require('yargs');

const notes = require('./notes.js');

var args = yargs.argv
console.log('yargs.argv = ', args);
// fetching the command from yargs.argv _ array
var command = args._[0];
console.log('Command : ', command);

if(command === 'add'){
  var note = notes.addNote(args.title, args.body);
  if(note){
  	console.log(note);
  	console.log('Note Created);
  		console.log('--');
  		console.log('Note Title : ${note.title}');
  		console.log('Note Body : ${note.body}');
  } else {
  	console.log(note);
  	console.log('Note title taken');
  }
} else if(command === 'list'){
  notes.listNotes();
} else if(command === 'remove'){
  notes.removeNote(args.title);
} else if(command === 'read'){
  notes.readNote(args.title);
} else{
  console.log('Unrecognized Command');
}

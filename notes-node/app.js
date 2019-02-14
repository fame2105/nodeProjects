console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Fame'));

// uniq from lodash removes all the duplicates removed from the array.
var fileteredArray = _.uniq([1, 'Fame', 2, 'Fame']);
console.log(fileteredArray);
// var user = os.userInfo();

// console.log(user);
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!' + 'Your age is '+ notes.age);

console.log(notes.addNote());

console.log('Sum of two numbers 5 and 7 = '+ notes.addNum(5,7));

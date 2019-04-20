console.log('to start the debugging use this flag --inspect-brg to initiate the inspection of the file in the chrom dev tools, and then move to chrome://inspect');
var person = {
  name : 'Andrew'
};
person.age = 25;

debugger;

person.name = 'Fame';
console.log(person);

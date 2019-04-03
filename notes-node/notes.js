console.log('Starting notes.js');

// console.log(module);
// module.exports.age = 25;
module.exports.addNote = () => {
  console.log('addNote');
  return 'new NOTE';
}

module.exports.addNum = (a, b) => {
  return a+b;
}

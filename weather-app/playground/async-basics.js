console.log('Starting async-basics.js');

setTimeout(() => {console.log('Inside of First callback function');}, 2000);

setTimeout(() => {console.log('Inside of second callback function');}, 0);

console.log('Finishing async-basics.js');

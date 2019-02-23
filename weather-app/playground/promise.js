var somePromise = new Promise((resolve, reject) => {
resolve('It worked'); // a promise could only be resolved once.
resolve('It worked again'); // this resolve won't be called .
// a promise can only be in one state, either RESOLVED or REJECTED.
//if a promise is RESOLVED then it can't be changed to REJECTED state and
// vice-versa is also true.
reject('It didn\'t work');
});

somePromise.then((message) => {
  // a then is called only when a promise is resolved
  console.log('Success', message);
}, (errorMessage) =>{
  // this part is called only when a promise gets rejected
  console.log('failure', errorMessage);
});
// reject and resolve are pre-defined functions that take only one argument.

var asyncAdd = (a, b) =>{
  return new Promise((resolve, reject) =>{
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject('Arguments must be numbers');
    }
  });
};

asyncAdd(2+1).then((res)=>{
  console.log(res);
  return asyncAdd(res, 4);
}).then((res)=>{
  console.log(`Result should be ${res}`);
}).catch((errorMessage)=>{
  console.log(errorMessage);
})

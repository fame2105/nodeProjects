var getUser = (id, callback) => {
var user = {
  id : id,
  name : 'Fame'
};
setTimeout(() =>{
callback(user)
}, 3000);
};

getUser(31, (param) =>{
  console.log(param);
});

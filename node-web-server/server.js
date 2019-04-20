const express = require('express');
const fs = require('fs');

// express module is for creating the server easy and fast.
var app = express();
// hbs is templating module used insode node,
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
//setting the 'view engine' to be used by express to be 'hbs'
app.set('view engine', hbs);

hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
});

app.use((req, res, next)=>{
  var now = new Date().toString();
  var log = `${now} : ${req.method}, ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (error)=>{
    if(error){
      console.log('Could Not write logs to file server.log');
    }
  });
  next();
});
 
// app.use((req, res, next)=>{
//   res.render('maintenance.hbs');
// });


//demo obout routing a static page on the server
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response)=>{
// response.send({
//   name:'Fame Issrani',
//   age:26
// });
response.render('home.hbs', {
  pageTitle:'Home Page',
  welcomeMessage:'welcome to my website'
});
});

app.get('/bad', (req, res)=>{
res.send({
  errorMessage:'Unable to handle request'
});
});

app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle: 'About page'
  });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

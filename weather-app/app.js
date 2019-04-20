const yargs = require('yargs');

var geocodeAddress = require('./geocode/geocode.js');
var weather = require('./weather/weather.js');
const argv = yargs
.options({
  address:{
    alias: 'a',
    string: true,
    description: 'Address to fetch the weather for',
    demand: true
  }
})
.help()
.alias('help', 'h')
.argv;
geocodeAddress.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    // console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(results.latitude, results.longitude,(errorMessage, results) => {
      if(errorMessage){
        console.log(errorMessage);
      } else {
        // console.log(JSON.stringify(results, undefined, 2));
        console.log(`Timezone: ${results.timezone}`);
        console.log(`Temperature : ${results.temperature}`);
        console.log(`Weather Summary : ${results.summary} sky`);
      }
    });
  }
});

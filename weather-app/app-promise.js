const yargs = require('yargs');
//axios is also used for making requests to urls, but it return a promise(), unlike request({}, callback), so,
// we wouldn't have to wrap promises around the requests, we can use axios directly and chain the promises using then().
const axios = require('axios');

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

var encodedURIAddress = encodeURIComponent(argv.address);
var googleAPIKey = '';
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURIAddress}&key=${googleAPIKey}`;

axios.get(geocodeUrl).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find the given address');
  }
  var location ={
    address:response.data.results[0].formatted_address,
    latitude:response.data.results[0].geometry.location.lat,
    longitude:response.data.results[0].geometry.location.lng
  };
  console.log(JSON.stringify(location, undefined, 2));
  var forecastAPIKey = '';
  var weatherUrl = `https://api.darksky.net/forecast/${forecastAPIKey}/${location.latitude},${location.longitude}`;
return axios.get(weatherUrl);
}).then((weatherResponse) => {
  var forecastInfo = {
    timezone: weatherResponse.data.timezone,
    temperature:  weatherResponse.data.currently.temperature,
    summary: weatherResponse.data.currently.summary
  };
  console.log(JSON.stringify(forecastInfo, undefined, 2));
}).catch((e)=>{
if(e.code === 'ENOTFOUND'){
  console.log('Unable to connect to google API servers.');
} else {
  console.log(e.message);
}
});

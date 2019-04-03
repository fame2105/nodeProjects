const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  // forecast API key is made on developer.forecast.io with fame.issrani@gmail.com account
  var forecastAPIKey = '';
  request({
  url:`https://api.darksky.net/forecast/${forecastAPIKey}/${latitude},${longitude}`,
  json:true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to forecast.io servers');
    } else if(response.statusCode === 400){
      callback('Unable to fetch weather details');
    } else if(response.statusCode === 200){
      callback(undefined, {
      timezone: body.timezone,
      temperature: body.currently.temperature,
      summary: body.currently.summary
    });
    }
  });
};

module.exports.getWeather = getWeather;

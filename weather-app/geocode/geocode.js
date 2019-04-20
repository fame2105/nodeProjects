const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedURIAddress = encodeURIComponent(address);
  var googleAPIKey = '';

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURIAddress}&key=${googleAPIKey}`,
    json:true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find this address');
    } else if(body.status === 'OK'){
      callback(undefined,{
        address:body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;

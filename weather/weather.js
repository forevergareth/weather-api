const request = require('request');

var getWeather = (apiKey, lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${long},${lat}`,
    json: true
  }, (error, response, body) => { 
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather data');
    }
  });
}

module.exports.getWeather = getWeather;

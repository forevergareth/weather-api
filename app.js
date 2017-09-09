const yargs = require('yargs');
//const request = require('request');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

const apikey  = "eda688f3ef244a22891238199603ea20";

var argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address for request',
      string: true
    }
  }).help()
  .argv;

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
  if (errorMsg) {
    console.log(errorMsg);
  } else {
    //console.log(JSON.stringify(results,undefined, 2))
    weather.getWeather(apikey, results.latitude, results.longitude, (errorMsg, weatherResults) => {
      if (errorMsg) {
        console.log(errorMsg);;
      } else {
        console.log(`Its currently ${weatherResults.temperature}, but if feels like ${weatherResults.apparentTemperature} degrees.`);
      }
    })
  }
})




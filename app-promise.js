const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeURL).then((response) => {
  console.log(response.data)
})

const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
			.options({
				a: {
					demand: true,
					alias: 'address',
					describe: 'address to fetch weather for',
					string: true
				}
			})
			.help()
			.alias('help', 'h')
			.argv;

// encodeURIComponent('625 market street san francisco')
// output: '625%20market%20street%20san%20francisco'


geocode.geocodeAddress(argv.a, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	}
	else{
		// console.log(JSON.stringify(results, undefined, 2));
		console.log(results.address);
		console.log(results.latitude);
		console.log(results.longitude);
		weather.getWeather(results.latitude,results.longitude, (errorMessage, results) => {
			if(errorMessage){
				console.log(errorMessage);
			}
			else{
				// console.log(JSON.stringify(results, undefined, 2));
				console.log(`It is currently ${results.temperature}. It feels like ${results.apparentTemperature}`)
			}
		});
	}
});



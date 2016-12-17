const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/2580f79e59446111de13496af1215e56/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		console.log(response.statusCode);
		if(error)
		{
			callback('Unable to connect to forecast service');
		}
		else if (response.statusCode === 404){
			callback('Unable to fetch weather');
		}
		else if (response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});	
		}
	});
}
module.exports.getWeather = getWeather;	 
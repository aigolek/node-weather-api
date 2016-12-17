const request = require('request');

var geocodeAddress = (address, callback) => {
	var encAddress = encodeURIComponent(address);
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}`,
		json: true
	}, (error, response, body) => {
		if(error)
		{
			callback('Unable to connect to google service');
		}
		else if(body.status === 'ZERO_RESULTS')
		{
			callback('Unable to find that address');
		}
		else if(body.status === 'OK')
		{
			callback(undefined, {
				address: body.results[0].formatted_address,			
				latitude: body.results[0].geometry.location.lat	,		
				longitude: body.results[0].geometry.location.lng
			});
			// // console.log(JSON.stringify(response, undefined, 2));
			// console.log(`Address: ${body.results[0].formatted_address}`);
			// console.log(`Latutude: ${body.results[0].geometry.location.lat}`)
			// console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
		}
		else{
			console.log('Problem with URL');
		}
	});
	
}
module.exports.geocodeAddress = geocodeAddress;

// 2580f79e59446111de13496af1215e56
// https://api.darksky.net/forecast/2580f79e59446111de13496af1215e56/37.8267,-122.4233

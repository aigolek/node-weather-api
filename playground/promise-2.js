const request = require('request');
 
var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		var encAddress = encodeURIComponent(address);
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}`,
			json: true
		}, (error, response, body) => {
			if(error)
			{
				reject('Unable to connect to google service');
			}
			else if(body.status === 'ZERO_RESULTS')
			{
				reject('Unable to find that address');
			}
			else if(body.status === 'OK')
			{
				resolve({
					address: body.results[0].formatted_address,			
					latitude: body.results[0].geometry.location.lat	,		
					longitude: body.results[0].geometry.location.lng
				});
				// return (body.results[0].formatted_address)
			}
			else{
				reject('Problem with URL');
			}
		});
	});	
}

geocodeAddress('94105').then( (location) => {
	console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
	console.log(errorMessage);
})

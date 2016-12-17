var asyncAdd = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number')
			{
				resolve(a+b)
			}
			else {
				reject ('must be numbers');
			}
		}, 1500)
	});
}
asyncAdd(1,"2").then((res) => {
	console.log('Result', res);
	return asyncAdd(res,44);
}).then ((res) => {
	console.log('should be 47',res);
}).catch((error) => {
	console.log(error);
})

// var somePromise = new Promise((resolve,reject)=>{
// 	setTimeout(() => {
// 	// resolve('Hey, it worked!');	
// 		reject('Unable to fulfill promise!');
// 	}, 2500)
	

// });

// somePromise.then( (message) => {
// 	console.log("Success: ", message);
// }, (errorMessage) => {
// 	console.log("Error: ", errorMessage);
// })
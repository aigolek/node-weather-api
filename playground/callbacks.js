console.log('starting app');

var getUser = (id,callback) => {
	var user ={
		id: id,
		name: 'Aigul'
	}
	setTimeout(()=>{
		callback(user);
	}, 3000);
};

getUser(31, (userObject)=>{
	console.log(userObject);
});
console.log('finishing app')
var express= require('express');
var app= express();

const PORT= process.env.PORT || 8080;
//add fix for weatherMap API call. redirect any https to http

app.use(function(req,res,next){
	if(req.headers['x-forwarded-proto']==='https'){
		res.redirect('http://' + req.hostname + req.url)
		
	}else{
		next();
	}
})
app.use(express.static('public'));

app.listen(PORT, function(req,res){
	console.log('Server up and listening to port: ', PORT);
})
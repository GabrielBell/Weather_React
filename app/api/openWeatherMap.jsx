<<<<<<< HEAD
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
=======
var axios= require('axios');
//APPID=3c5a913231934b24b262290b36c8e132

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=3c5a913231934b24b262290b36c8e132&units=imperial';

module.exports= {
	getTemp: function(location){
		var encodedLocation= encodeURIComponent(location);
		var requestUrl= `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		//this is called promise chaining
		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error('No City Found!');
			}else{
				return res.data.main.temp;
			}
		}, function(err){
			throw new Error('Unable to fetch weather for that location!');
		})
	}
}
>>>>>>> 04ca1d9c18cd533498f497a519afacbbc0c84452

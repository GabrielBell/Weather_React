<<<<<<< HEAD
var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
=======
var React= require('react');

var WeatherMessage = ({temp,location}) => {
	return(
			<h3 className='text-center'>It is currently {temp} in {location}</h3>
	);
}

module.exports= WeatherMessage;
>>>>>>> 04ca1d9c18cd533498f497a519afacbbc0c84452

var React= require('react');

/*var About= React.createClass({
	render: function(){
		
	}
});*/

//stateless functional components. when you just return a render 
//you can just return the jsx instead of calling createClass()
//this only works when component doesn't maintain state or have methods 
//besides render

var About = (props) => {
	return(
			<div>
				<h1 className='text-center page-title'>About</h1>
				<p>This is a weather application built on React. I built this to learn more about using React.</p>
				<p>These are some of the tools I've used:</p>
				<ul>
					<li>
						<a href='https://facebook.github.io/react'>React</a> - This was the
						Javascript library used.
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather Map</a> - I used Open
						Weather Map to search for weather data by city name.
					</li>
				</ul>
			</div>
			
		);
}

module.exports= About;
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
				<h3>About</h3>
				<p>Welcome to the about page! </p>
			</div>
			
		);
}

module.exports= About;
<<<<<<< HEAD
var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search weather by city"/>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
=======
var React= require('react');

var WeatherForm= React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var location= this.refs.location.value;
		if(location.length > 0){
			this.refs.location.value='';
			this.props.onSearch(location);
		}
	},
	render: function(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="search" ref='location' placeholder='Search weather by city'/>
					</div>
					<div>
						<button className='button expanded hollow'>Get Weather</button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports= WeatherForm;
>>>>>>> 04ca1d9c18cd533498f497a519afacbbc0c84452

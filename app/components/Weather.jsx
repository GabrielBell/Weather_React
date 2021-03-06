<<<<<<< HEAD
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  /*runs immediately after component is mounted to DOM. from DOC:
    Initialization of DOM nodes should go here. also a good time to invoke call to remote
    endpoint. Setting state in this method will trigger re-rendering. 
  */
  componentDidMount: function(){
    //pull the property location from url 
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }

  },
  //called anytime the components props are updated
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
=======
var React= require('react');
var WeatherForm= require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var openWeatherMap= require('openWeatherMap');
var ErrorModal= require('ErrorModal');

var Weather= React.createClass({
	getInitialState: function(){
		return {
			isLoading: false

		}
	},
	handleSearch: function(location){
		var that= this;
		this.setState({	
			isLoading: true,
			errorMessage: undefined	
		});

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({	location: location,	temp: temp, isLoading: false});
		}, function(err){
			that.setState({	isLoading: false, errorMessage:err.message	});
			
		});
	
	},
	render: function(){
		var {isLoading,temp,location,errorMessage}= this.state;
		//need a way to conditionally load message based on isLoading
		function renderMessage(){
			if(isLoading){
				return <h3 className='text-center'>Fetching weather...</h3>;
			}else if (temp && location){
				return <WeatherMessage temp={temp} location={location}/>
			}
		}
		function renderError(){
			if(typeof errorMessage ==='string'){
				return <ErrorModal message={errorMessage}/>
			}
		}
		return(
			<div>
				<h1 className='text-center page-title'>Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports= Weather;
>>>>>>> 04ca1d9c18cd533498f497a519afacbbc0c84452

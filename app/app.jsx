var React= require('react');
var ReactDOM= require('react-dom');
//below destructuring, is equivelant to => var Route= require('react-router').Route
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main= require('Main');
var Weather= require('Weather');
var About= require('About');
var Examples= require('Examples');

//Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//GreeterForm is a presentational component. it relies on container component
// to change state. 




var firstName='Tom';
var firstMessage='Wow React is pretty Neat';

ReactDOM.render(
			<Router history={hashHistory}>
				<Route path='/' component={Main}>
					<Route path='about' component={About}/>
					<Route path='examples' component={Examples}/>
					<IndexRoute component={Weather}/>
				</Route>
			</Router>,
			document.getElementById('app'));
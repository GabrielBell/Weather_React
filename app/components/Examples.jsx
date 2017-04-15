<<<<<<< HEAD
var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
=======
var React= require('react');
var {Link}= require('react-router');

var Examples= (props) => {
	return(
		<div>
			<h1 className='text-center page-title'>Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Washington'>Washington D.C.</Link>
				</li>
				<li>
					<Link to='/?location=Rio'>Rio, Brazil</Link>
				</li>
				
			</ol>
		</div>
		
	);
}

module.exports= Examples;
>>>>>>> 04ca1d9c18cd533498f497a519afacbbc0c84452

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  render: function() {
    return (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Fwibble</a>
      </div>
        <ul className="nav navbar-nav navbar-right">
          <li><button type='button' className='btn btn-md btn-success'><a href="/signin">Sign In</a></button></li>
          <li><button type='button' className='btn btn-md btn-success'><a href="/gameview">Game</a></button></li>
        </ul>
      </div>
    </nav>
)
  }
});
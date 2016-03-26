var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  

  render: function() {

    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand' >Fwibble</Link>
            <ul className="nav navbar-nav navbar-right">
              <li>
                { this.props.loggedIn ? (<Link to='/signout'>SIGN OUT</Link>) : (<Link to='/signin'>SIGN IN</Link>)}
              </li>
              <li><Link to={`/gameview/${this.props.active_game}`} className="menuOptions">MY GAME</Link></li>
            </ul>
          </div>

          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li>
                { this.props.loggedIn ? (<Link to='/signout'>SIGN OUT</Link>) : (<Link to='/signin'>SIGN IN</Link>)}
              </li>
              <li><Link to={`/gameview/${this.props.active_game}`} className="menuOptions">MY GAME</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});



    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li> 
        <li><a href="#">Page 3</a></li> 
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>

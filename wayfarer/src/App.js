import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Browse from './components/Browse';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="collapese navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/signup">Sign up</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/browse">Browse</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/browse" component={Browse} />
            <Route exact path="/" component={Landing} />
            <Route path="/*" render={() => <div>Error 404</div>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

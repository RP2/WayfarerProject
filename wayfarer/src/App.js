import React, { Component } from "react";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Profile";
import Browse from "./components/Browse/Browse";
import CreatePost from "./components/Browse/CreatePost";

class App extends Component {
  state = {
    auth: false,
    username: null
  };

  setAuth = username => {
    this.setState({
      auth: true,
      username: username
    });

    // console.log("App js State = ", this.state);
  };

  logout = () => {
    if (localStorage.getItem("username") != null) {
      localStorage.removeItem("username");
    }
    this.setState({
      auth: false,
      username: null
    });
    this.props.history.push("/");
  };

  componentDidMount() {
    if (localStorage.getItem("username") != null) {
      this.setState({
        auth: true,
        username: localStorage.getItem("username")
      });
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="collapese navbar-collapse" id="navigation">
            <h1>
              <NavLink className="nav-link" exact to="/">
                Wayfarer
              </NavLink>
            </h1>
            {this.state.auth ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/browse">
                    Browse
                  </NavLink>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={this.logout}>
                    logout
                  </span>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign up
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </nav>
        <div className="container-fluid">
          <Switch>
            {/* <Route path="/login" component={Login} setAuth={this.setAuth}/> */}
            <Route
              path="/login"
              render={props => <Login {...props} setAuth={this.setAuth} />}
            />
            {/* <Route path="/signup" component={Signup} /> */}
            <Route
              path="/signup"
              render={props => <Signup {...props} setAuth={this.setAuth} />}
            />
            <Route
              path="/profile"
              render={props => (
                <Profile
                  {...props}
                  setAuth={this.state.auth}
                  username={this.state.username}
                />
              )}
            />
            <Route path="/browse" component={Browse} />
            <Route exact path="/" component={Landing} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/*" render={() => <div>Error 404</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

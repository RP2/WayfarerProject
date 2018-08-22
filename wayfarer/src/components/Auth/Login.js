import React, { Component } from "react";
import Model from "../../model/loginModel";

class Login extends Component {
  onSubmit = event => {
    console.log(
      "in submit",
      this.refs.username.value,
      this.refs.password.value
    );
    event.preventDefault();
    Model.login(this.refs.username.value, this.refs.password.value).then(
      res => {
        console.log("res", res.data);
        if (res.status === 404) {
          console.log("request failed");
        }
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("userId", res.data._id);
        console.log("RESPONSE:", res.data.username, res.data._id);
        this.props.setAuth(res.data.username);
        this.props.history.push("/profile");
      }
    );
  };

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={this.onSubmit} className="registerForm">
          <input type="text" ref="username" placeholder="Username" />
          <input type="text" ref="password" placeholder="Password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;

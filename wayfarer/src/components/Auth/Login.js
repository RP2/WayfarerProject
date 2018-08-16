import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;

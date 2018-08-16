import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Model from "../../model/loginModel";


class Login extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.history.push("/profile");
  };

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
    state = {
        username: "",
        password: "",
    }

    onInputChange = (event) => {
        this.setState({
            username: event.target.value,
            password: event.target.value,
          })
    }

    onSubmit = (event) => {
        event.preventDefault();
        Model.login(this.state.username, this.state.password).then( (req, res) => {
            this.setState ({
                responce: res.data,
                auth: true,
            });
        });
        this.props.history.push("/profile")
    }

    render() {
        return (
            <div className="Login">
            <h2>Login</h2>
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.username} onChange={ this.onInputChange } placeholder="Username"/>
                <input type="text" value={this.state.password} onChange={ this.onInputChange } placeholder="Password"/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Login;

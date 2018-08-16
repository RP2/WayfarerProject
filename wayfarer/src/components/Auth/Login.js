import React, { Component } from "react";

class Login extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        this.props.history.push("/profile")
    }

    render() {
        return (
            <div className="Login">
            <h2>Login</h2>
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Login;

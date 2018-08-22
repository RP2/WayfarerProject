import React, { Component } from "react";
import Model from "../../model/signupModel";

class Signup extends Component {
  onSubmit = event => {
    event.preventDefault();
    if (this.refs.password.value === this.refs.confirmpassword.value) {
      Model.signup(this.refs.username.value, this.refs.password.value)
        .then(res => {
          console.log("res", res.data);
          if (res.status === 404) {
            console.log("request failed");
          }
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("userId", res.data._id);
          console.log("RESPONSE:", res.data.username, res.data._id);
          this.props.setAuth(res.data.username);
          this.props.history.push("/profile");
        })
        .catch(error => {
          console.log("in catch DWDJDDJQWKJ");
          document.getElementById("alreadyExists").style.display = "inline";
        });
    } else {
      console.log("passwords do not match");
    }
  };

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <p id="alreadyExists">
          This Username already exists. Please select another one.
        </p>
        <form onSubmit={this.onSubmit} className="registerForm">
          <input type="text" ref="username" placeholder="Username" />
          <input type="text" ref="password" placeholder="Password" />
          <input
            type="text"
            ref="confirmpassword"
            placeholder="Confirm Password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;

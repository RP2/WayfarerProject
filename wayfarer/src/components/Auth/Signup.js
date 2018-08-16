import React, { Component } from 'react'
import Model from "../../model/signupModel";

class Signup extends Component {
  state = {
    newUser: ""
  };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.refs.password.value === this.refs.confirmpassword.value){
            Model.signup(this.refs.username.value, this.refs.password.value).then( (res) => { 
                console.log('res', res.data);
                if(res.status===404){
                    console.log('request failed')
                }
            });
            this.props.history.push("/profile")
        } else {
            console.log('passwords do not match');
        }
    }
    

    render() {
        return (
            <div className="Signup">
            <h2>Signup</h2>
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    ref = "username"
                    placeholder="Username"
                />
                <input 
                    type="text" 
                    ref = "password"
                    placeholder="Password"
                />
                <input 
                    type="text" 
                    ref = "confirmpassword"
                    placeholder="Confirm Password"
                />
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Signup;

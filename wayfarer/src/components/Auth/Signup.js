import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return (
            <div className="Signup">
            <h2>Signup</h2>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Confirm Password"/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Signup;
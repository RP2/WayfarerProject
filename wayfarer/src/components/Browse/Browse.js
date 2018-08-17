import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Browse extends Component {

    componentDidMount() {
        console.log('component did mount')
        let username; 
        if (localStorage.getItem("username") === null) {
          return this.props.history.push("/login")
        } else {
          username = localStorage.getItem("username")
        };
    };

    render() {
        return (
            <div className="Browse">
            <h2>Browse</h2>
            <p><Link to="/createpost">CreatePost</Link></p>
            </div>
        );
    }
}

export default Browse;
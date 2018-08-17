import React, { Component } from "react";
import { Link } from "react-router-dom";

class Browse extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="Browse">
        <div className="cities-column">
          <h2>Cities</h2>
          <ul id="cities">
            <li>
              <img src="#" alt="#" />
              <h5>Paris</h5>
            </li>
            <li>
              <img src="#" alt="#" />
              <h5>Tokyo</h5>
            </li>
            <li>
              <img src="#" alt="#" />
              <h5>London</h5>
            </li>
            <li>
              <img src="#" alt="#" />
              <h5>San Francisco</h5>
            </li>
          </ul>
        </div>
        <p id="createPost">
          <Link to="/createpost">CreatePost</Link>
        </p>
      </div>
    );
  }
=======

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
>>>>>>> upstream/master
}

export default Browse;

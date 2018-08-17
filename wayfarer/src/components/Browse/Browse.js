import React, { Component } from "react";
import { Link } from "react-router-dom";

class Browse extends Component {
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
}

export default Browse;

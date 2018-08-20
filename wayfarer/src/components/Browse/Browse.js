import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "../../model/listPosts";

class Browse extends Component {
  state = {
    posts: [],
    city: ""
  };

  componentDidMount() {
    console.log("component did mount");
    let username;
    if (localStorage.getItem("username") === null) {
      return this.props.history.push("/login");
    } else {
      username = localStorage.getItem("username");
    }
    Model.Posts(this.state.posts).then(res => {
      if (res.status === 404) {
        console.log("request failed");
      }
      this.setState({
        posts: res.data.posts
      });
    });
  }

  citySelect(event) {
    this.setState({ city: event.target.id });
  }

  render() {
    return (
      <div className="Browse">
        <h2>Browse</h2>
        <div className="cities-column">
          <h2>Cities</h2>
          <ul id="cities">
            <li id="Paris" onClick={this.citySelect}>
              <img src="#" alt="#" />
              <h5>Paris</h5>
            </li>
            <li id="Tokyo" onClick={this.citySelect}>
              <img src="#" alt="#" />
              <h5>Tokyo</h5>
            </li>
            <li id="London" onClick={this.citySelect}>
              <img src="#" alt="#" />
              <h5>London</h5>
            </li>
            <li id="San Francisco" onClick={this.citySelect}>
              <img src="#" alt="#" />
              <h5>San Francisco</h5>
            </li>
          </ul>
          <div id="userPosts">{this.state.posts}</div>
        </div>
        <p>
          <Link to="/createpost">CreatePost</Link>
        </p>
      </div>
    );
  }
}

export default Browse;

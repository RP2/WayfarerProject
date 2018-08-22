import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "../../model/cityPosts";
import Delete from "../../model/deletePost";
// import FindCityId from "../../model/findCityId";

class CityView extends Component {
  state = {
    posts: [],
    city: [],
    deleted: []
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log("CityView cityId = ", this.props.cityId);
    if (prevProps !== this.props) {
      Model.findPosts(this.props.cityId).then(res =>
        this.setState({ posts: res.data })
      );
    }
    console.log(this.state);
  };

  delete = event => {
    console.log("post_id", event.target.value);
    Delete.delete(event.target.value).then(res => {
      this.setState({
        deleted: this.state.deleted.push(res)
      });
    });
  };

  render() {
    console.log("CityView State = ", this.state.posts);
    let userId = localStorage.getItem("userId");

    let posts = this.state.posts
      ? this.state.posts.map(post => {
          return (
            <li id="posts" key={post._id}>
              <p>{post.title}</p>
              <p>{post.text}</p>
              <p>{post.user}</p>
              <p>
                {userId === post.user ? (
                  <button onClick={this.delete} value={post._id}>
                    Delete
                  </button>
                ) : null}
              </p>
            </li>
          );
        })
      : "";

    return (
      <div id="cityView">
        <h2>City Posts View</h2>
        <p>{this.props.cityName}</p>
        <p>{this.props.cityCountry}</p>
        <img src={this.props.cityImage} />
        <ul>{posts}</ul>
      </div>
    );
  }
}

export default CityView;

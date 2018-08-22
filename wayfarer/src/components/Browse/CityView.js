import React, { Component } from "react";
import { Link } from "react-router-dom";
// import London from "../../images/london.jpg";
// import Paris from "../../images/paris.jpg";
// import SF from "../../images/sf.jpg";
// import Tokyo from "../../images/tokyo.jpg";
import Model from "../../model/cityPosts";
// import FindCityId from "../../model/findCityId";

class CityView extends Component {
  state = {
    posts: [],
    city: []
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

  render() {
    console.log("CityView State = ", this.state.posts);

    let posts = this.state.posts
      ? this.state.posts.map(post => {
          return (
            <li key={post._id}>
              <p>{post.title}</p>
              <p>{post.text}</p>
              <p>{post.user}</p>
            </li>
          );
        })
      : "";

    return (
      <div>
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

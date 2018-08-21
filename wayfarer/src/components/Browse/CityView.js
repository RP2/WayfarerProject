import React, { Component } from "react";
import { Link } from "react-router-dom";
import London from "../../images/london.jpg";
import Paris from "../../images/paris.jpg";
import SF from "../../images/sf.jpg";
import Tokyo from "../../images/tokyo.jpg";
import Model from "../../model/cityPosts";
import FindCityId from "../../model/findCityId";

class CityView extends Component {
  state = {
    cityIds: []
  };

  componentDidMount() {
    FindCityId.findId().then(res => {
      let cityNames = res.data;
      console.log("CITYNAMES", cityNames);
      //   let cityIds = cityNames.map(city => {
      //     name = this.name;
      //     id = this._id;
      //   });
      //   console.log("CITY IDS", cityIds);
      //   return cityIds;
    });

    // Model.cityPosts.findPosts(this.props.city).then(res => {
    //   console.log("INSIDE CITY POSTS FUNCTION", res.data);
    //   let posts = res.data.posts;
    //   this.setState({ posts });
    // // });
  }

  render() {
    let posts = this.props.posts.map((post, index) => {
      <div id={post._id} key={index} onClick={this.showPostPage}>
        <h4>{post.title}</h4>
        <Link to={post._id}>{post.title}</Link>
      </div>;
    });

    return (
      <div>
        <h2>{this.props.city}</h2>
        <h3>Country</h3>
        <img src={this.props.src} alt="img" />
        <div id="userPosts">{posts}</div>
      </div>
    );
  }
}

export default CityView;

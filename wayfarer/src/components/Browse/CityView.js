import React, { Component } from "react";
import { Link } from "react-router-dom";
// import London from "../../images/london.jpg";
// import Paris from "../../images/paris.jpg";
// import SF from "../../images/sf.jpg";
// import Tokyo from "../../images/tokyo.jpg";
import Model from "../../model/cityPosts";
// import FindCityId from "../../model/findCityId";

class CityView extends Component {
  state = {};

  componentDidUpdate = (prevProps, prevState) => {
    // console.log("CityView cityId = ", this.props.cityId);
    if (prevProps !== this.props) {
      Model.findPosts(this.props.cityId).then(res =>
        this.setState({ posts: res.data })
      );
    }
  };

  render() {
    console.log("CityView State = ", this.state.posts);
    return (
      <div>
        <h2>City Posts View</h2>
      </div>
    );
  }
}

export default CityView;

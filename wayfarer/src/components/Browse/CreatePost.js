import React, { Component } from "react";
import Model from "../../model/createPost";
import GetCity from "../../model/findCityId";

class CreatePost extends Component {
  state = {
    cities: [],
    selectedCity: "",
    cityId: "",
    userId: ""
  };

  componentDidMount() {
    let userId = localStorage.getItem("userId");
    this.setState({ userId });
    console.log("FROM COMPONENT DID MOUNT:", userId);
    GetCity.getCities().then(res => {
      console.log(res.data);
      this.setState({ cities: res.data });
    });
  }

  citySelect = event => {
    this.setState({ selectedCity: event.target.value });
    // console.log("CitySelect", selected);
    // SET TIMEOUT
    setTimeout(() => {
      this.state.cities.forEach(city => {
        console.log(this.state.selectedCity);
        if (this.state.selectedCity === city.name) {
          console.log("CitySelect", city._id);
          this.setState({ cityId: city._id });
        }
      });
    }, 100);
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(
      "onSubmit, reference values: ",
      this.refs.title.value,
      this.refs.text.value,
      this.refs.img.value,
      this.state.selectedCity,
      "userId:",
      this.state.userId
    );

    // userId, title, text, city, img;
    Model.create({
      userId: this.state.userId,
      city: this.state.cityId,
      title: this.refs.title.value,
      text: this.refs.text.value,
      user: this.state.userId,
      img: this.refs.img.value
    }).then(res => {
      if (res.status === 404) {
        console.log("request to create post failed");
      }
    });
    this.props.history.push("/browse");
  };

  render() {
    // console.log("CitySelect", this.state.cityId);
    return (
      <div className="CreatePost">
        <h2>CreatePost</h2>
        <form id="postForm" onSubmit={this.onSubmit}>
          <select
            onChange={this.citySelect}
            value={this.state.selectedCity}
            name="City"
          >
            <option>select a city</option>
            <option ref="San Francisco" value="San Francisco">
              San Francisco
            </option>
            <option ref="London" value="London">
              London
            </option>
            <option ref="Paris" value="Paris">
              Paris
            </option>
            <option ref="Tokyo" value="Tokyo">
              Tokyo
            </option>
          </select>
          <input type="text" ref="title" placeholder="Title" />
          <input type="textfield" ref="text" placeholder="Description" />
          <input type="text" ref="img" placeholder="image link" />
          <input id="post" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreatePost;

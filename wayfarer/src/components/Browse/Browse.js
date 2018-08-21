import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "../../model/findCityId";
import CityView from "./CityView";

class Browse extends Component {
  state = {
    cities: [],
    cityId: null,
    cityName: null,
    cityCountry: null,
    cityImage: null,
  };

  componentDidMount() {
    console.log("component did mount");
    if (localStorage.getItem("username") === null) {
      return this.props.history.push("/login");
    } else {
      let username = localStorage.getItem("username");
    }
    Model.getCities().then(res => this.setState({ cities: res.data }));
  }

  citySelect = event => {
    console.log(event.target.country);
    this.setState({ 
        cityId: event.target.id,
        cityName: event.target.dataset.name,
        cityCountry: event.target.dataset.country,
        cityImage: event.target.src,
    });
  };

  showPostPage = post_id => {
    console.log(post_id);
  };

  render() {
    console.log("Browser State = ", this.state.cities);

    let cities = this.state.cities.map(city => {
      return (
        <li key={city._id}>
          <img
            onClick={this.citySelect}
            id={city._id}
            src={city.image_url}
            data-name={city.name}
            data-country={city.country}
            alt="img"
          />
        </li>
      );
    });
    console.log(this.state.cityCountry);
    return (
      <div className="browse">
        <h2>Browse</h2>
        <div className="cities-column">
          <h2>Cities</h2>
          <ul id="cities">{cities}</ul>
        </div>

        <p>
          <Link to="/createpost">CreatePost</Link>
        </p>

        <CityView className="cityview" 
        cityId={this.state.cityId}
        cityName={this.state.cityName}
        cityCountry={this.state.cityCountry}
        cityImage={this.state.cityImage} />
      </div>
    );
  }
}

export default Browse;

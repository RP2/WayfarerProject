import React, { Component } from "react";
import Model from "../model/userModel";
import editModel from "../model/editProfile";

class Profile extends Component {
  state = {
    isEditing: false
  };

  editProfile = event => {
    event.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  saveProfile = event => {
    event.preventDefault();
    let username = localStorage.getItem("username");
    editModel
      .edit(username, this.refs.city.value, this.refs.profile_pic.value)
      .then(res => {
        if (res.status === 404) {
          console.log("request failed");
        }
        this.setState({
          isEditing: false,
          profile_pic: res.data.profile_pic,
          city: res.data.city
        });
      });
  };

  componentDidMount() {
    console.log("component did mount");
    let username;
    if (localStorage.getItem("username") === null) {
      return this.props.history.push("/login");
    } else {
      username = localStorage.getItem("username");
    }

    Model.profile(username).then(res => {
      console.log("profile response", res.data);
      this.setState({
        profile_pic: res.data.profile_pic,
        username: res.data.username,
        city: res.data.city,
        join_date: res.data.join_date
      });
    });
  }

  render() {
    return (
      <div className="Profile">
        <h2>
          {this.state.username}
          's Profile Page
        </h2>
        {this.state.isEditing ? (
          <p />
        ) : (
          <button onClick={this.editProfile}>Edit</button>
        )}
        <div className="AboutUser">
          <form onSubmit={this.saveProfile}>
            {this.state.isEditing ? (
              <input
                type="text"
                ref="profile_pic"
                placeholder="links only"
                defaultValue={this.state.profile_pic}
              />
            ) : (
              <img src={this.state.profile_pic} alt="profile_pic" />
            )}
            <p>Username: {this.state.username}</p>
            {this.state.isEditing ? (
              <input
                type="text"
                ref="city"
                placeholder="city"
                defaultValue={this.state.city}
              />
            ) : (
              <p>City: {this.state.city}</p>
            )}
            <p>Join Date: {this.state.join_date}</p>
            {this.state.isEditing ? (
              <input type="submit" value="Submit" />
            ) : (
              // <button onSubmit={this.saveProfile}>Save</button>
              <p />
            )}
          </form>
        </div>
        <div className="UserPosts" />
      </div>
    );
  }
}

export default Profile;

import React, { Component } from "react";
import Model from "../model/userModel";

class Profile extends Component {
  state = {
    isEditing: false,
    username: '',
    city: null,
    join_date: null,
    profile_pic: null,
  };

  editProfile = event => {
    event.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  // saveProfile = event => {
  //   event.preventDefault();
  //   this.setState({
  //     isEditing: false,
  //     username: ,
  //     city: ,
  //     join_date: ,
  //     profile_pic: "#"
  //   });
  // };

  componentDidMount() {
    console.log('component did mount')
    let username; 
    if (localStorage.getItem("username") === null) {
      return this.props.history.push("/login")
    } else {
      username = localStorage.getItem("username")
    };
    
    Model.profile(username)
      .then( (res) => {
        console.log("profile response", res.data);
      this.setState({
        username: res.data.username,
        city: res.data.city,
        join_date: res.data.join_date
      });
    });
  }

  render() {
    return (
      <div className="Profile">
        <h2>Profile</h2>
        <button onClick={this.editProfile}>Edit</button>
        <img src="" alt="user-pic" />
        <div className="AboutUser">
          <img src={this.state.profile_pic} alt="#" />
          <ul>
            <li>Username:</li>
            {this.state.isEditing ? (
              <input id="username" type="text" name="username" />
            ) : (
              <p>{this.state.username}</p>
            )}
            <li>City:</li>
            {this.state.isEditing ? (
              <input id="city" type="text" name="city" />
            ) : (
              <p>{this.state.city}</p>
            )}
            <li>Image</li>
            {this.state.isEditing ? (
              <input id="image" type="text" name="image" />
            ) : (
              <p>{this.state.image}</p>
            )}
            <li>Join Date: {this.state.join_date}</li>
          </ul>
          <button onSubmit={this.saveProfile}>Save</button>
        </div>
        <div className="UserPosts" />
      </div>
    );
  }
}

export default Profile;

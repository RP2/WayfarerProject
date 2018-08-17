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
        {this.state.isEditing ? ( <p></p> ) :(
        <button onClick={this.editProfile}>Edit</button>
        )}
        <div className="AboutUser">
          {this.state.isEditing ? (
              <input id="image" type="text" name="image" placeholder="picture" />
            ) : (
              <img src={this.state.profile_pic} alt="profile_pic" />
            )}
            <p>Username: {this.state.username}</p>
            {this.state.isEditing ? (
              <input id="city" type="text" name="city" placeholder="city" />
            ) : (
              <p>City: {this.state.city}</p>
            )}
            <p>Join Date: {this.state.join_date}</p>
            {this.state.isEditing ? (
          <button onSubmit={this.saveProfile}>Save</button>
            ) : (
              <p></p>
            )}
        </div>
        <div className="UserPosts" />
      </div>
    );
  }
}

export default Profile;

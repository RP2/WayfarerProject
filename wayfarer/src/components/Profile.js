import React, { Component } from "react";

class Profile extends Component {
  state = {
    isEditing: false,
    username: "Brady",
    profile_pic: "http://picsum.photos/200"
  };

  editProfile = event => {
    event.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  //   componentDidMount() {
  //       Model.getOne()
  //         .then(response => console.log(response))
  //         this.setState({ username: response.username })
  //   }

  render() {
    return (
      <div className="Profile">
        <h2>Profile</h2>
        <button onClick={this.editProfile}>Edit</button>
        <img src="" alt="user-pic" />
        <div className="AboutUser">
          <img src={this.state.profile_pic} />
          <ul>
            <li>Username:</li>
            {this.state.isEditing ? (
              <input type="text" name="username" />
            ) : (
              <p>{this.state.username}</p>
            )}
            <li>City:</li>
            <li>Join Date:</li>
          </ul>
        </div>
        <div className="UserPosts" />
      </div>
    );
  }
}

export default Profile;

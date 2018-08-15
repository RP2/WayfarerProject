import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
            <h2>Profile</h2>
            <img src="" alt="user pic" />
            <div className="AboutUser">
                <ul>
                    <li>Username:</li>
                    <li>City:</li>
                    <li>Join Date:</li>
                </ul>
            </div>
            <div className="UserPosts">
                
            </div>
            </div>
        );
    }
}

export default Profile;
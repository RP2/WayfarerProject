import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Browse extends Component {
    render() {
        return (
            <div className="Browse">
            <h2>Browse</h2>
            <p><Link to="/createpost">CreatePost</Link></p>
            </div>
        );
    }
}

export default Browse;
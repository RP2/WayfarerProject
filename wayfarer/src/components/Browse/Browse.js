import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Model from "../../model/listPosts";
import London from "../../images/london.jpg";
import Paris from "../../images/paris.jpg";
import SF from "../../images/sf.jpg";
import Tokyo from "../../images/tokyo.jpg";


class Browse extends Component {
    state = {
        posts: [],
        city: '',
    }

    componentDidMount() {
        console.log('component did mount')
        let username; 
        if (localStorage.getItem("username") === null) {
          return this.props.history.push("/login")
        } else {
          username = localStorage.getItem("username")
        };
        Model.Posts().then( (res) => {
            console.log('from Post attempt', res);
            if(res.status===404){
                console.log('request failed')
            }
            this.setState ({
                posts: res.data.title,
                })
        })
    };

    citySelect(event) {
        this.setState({city: event.target.id})
    }

    render() {
        return (
            <div className="Browse">
            <h2>Browse</h2>
                <div className="cities-column">
                <h2>Cities</h2>
                <ul id="cities">
                    <li id="Paris" onClick={this.citySelect}>
                        <img src={Paris} />
                        <h5>Paris</h5>
                    </li>
                    <li id="Tokyo" onClick={this.citySelect}>
                    <img src={Tokyo} />
                        <h5>Tokyo</h5>
                    </li>
                    <li id="London" onClick={this.citySelect}> 
                    <img src={London} />
                        <h5>London</h5>
                    </li>
                    <li id="San Francisco" onClick={this.citySelect}>
                    <img src={SF} />
                        <h5>San Francisco</h5>
                    </li>
                </ul>
                <div id="userPosts">
                    <p>{this.state.posts}</p>
                </div>
            </div>
                <p><Link to="/createpost">CreatePost</Link></p>
            </div>
        );
    }
}

export default Browse;

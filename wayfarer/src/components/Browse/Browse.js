import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Model from "../../model/listPosts";
import postDetail from "../../model/postDetail";
import London from "../../images/london.jpg";
import Paris from "../../images/paris.jpg";
import SF from "../../images/sf.jpg";
import Tokyo from "../../images/tokyo.jpg";


class Browse extends Component {
    state = {
        posts: [],
        city: null,
    }

    componentDidMount() {
        console.log('component did mount')
        let username; 
        if (localStorage.getItem("username") === null) {
          return this.props.history.push("/login")
        } else {
          username = localStorage.getItem("username")
        };
        Model.Posts(username).then( (res) => {
            console.log('post res',res);
            if(res.status===404){
                console.log('request failed')
            }
            this.setState ({
                posts: res.data,
                })
        })
    };

    citySelect = (event) => {
        console.log(event.target.id);
        this.setState({city: event.target.id});
    }

    showPostPage = (post_id) => {
        console.log(post_id)
    }

    render() {

        let posts = this.state.posts.map((post, index) => {
            return <div id={post._id} key={index} onClick={this.showPostPage}><Link to={post._id}>{post.title}</Link></div>
        })

        return (
            <div className="Browse">
            <h2>Browse</h2>
                <div className="cities-column">
                <h2>Cities</h2>
                <ul id="cities">
                    <li onClick={this.citySelect}>
                        <img id="Paris" src={Paris} alt="img"/>
                    </li>
                    <li onClick={this.citySelect}>
                    <img id="Tokyo" src={Tokyo} alt="img"/>
                    </li>
                    <li onClick={this.citySelect}> 
                    <img id="London" src={London} alt="img"/>
                    </li>
                    <li onClick={this.citySelect}>
                    <img id="San Francisco" src={SF} alt="img"/>
                    </li>
                </ul>  
            </div>
            <div id="userPosts">{posts}</div>
                <p><Link to="/createpost">CreatePost</Link></p>
            </div>
        );
    }
}

export default Browse;

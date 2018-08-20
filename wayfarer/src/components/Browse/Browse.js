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

    citySelect(event) {
        this.setState({city: event.target.id})
    }

    showPostPage(post_id){
        console.log(post_id)
    }

    render() {

        let posts = this.state.posts.map((post, index) => {
            return <div id={post._id} key={index} onClick={this.showPostPage}><p>{post.title}</p></div>
        })

        return (
            <div className="Browse">
            <h2>Browse</h2>
                <div className="cities-column">
                <h2>Cities</h2>
                <ul id="cities">
                    <li id="Paris" onClick={this.citySelect}>
                        <img src={Paris} alt="img"/>
                        <h5>Paris</h5>
                    </li>
                    <li id="Tokyo" onClick={this.citySelect}>
                    <img src={Tokyo} alt="img"/>
                        <h5>Tokyo</h5>
                    </li>
                    <li id="London" onClick={this.citySelect}> 
                    <img src={London} alt="img"/>
                        <h5>London</h5>
                    </li>
                    <li id="San Francisco" onClick={this.citySelect}>
                    <img src={SF} alt="img"/>
                        <h5>San Francisco</h5>
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

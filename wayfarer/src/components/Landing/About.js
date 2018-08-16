import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="container-fluid">
                <h2>About Wayfarer</h2>
                    <div className="row">
                        <div className="col-sm">
                            <h4>Mission</h4>
                            <p>Our goal is to help people discover new things about places they are visiting.</p>
                        </div>
                        <div className="col-sm">
                            <h4>History</h4>
                            <p>We have been in buisness since 2018.</p>
                        </div>
                        <div className="col-sm">
                            <h4>Future</h4>
                            <p>We hope to provide our users with an easy way to find interesting facts about cities.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
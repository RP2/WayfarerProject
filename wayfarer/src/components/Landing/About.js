import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="About">
                <h2>About Wayfarer</h2>
                <div>
                    <div className="AboutTopic">
                        <h3>Mission</h3>
                        <p>Our goal is to help people discover new things about places they are visiting.</p>
                    </div>
                    <div className="AboutTopic">
                        <h3>History</h3>
                        <p>We have been in buisness since 2018.</p>
                    </div>
                    <div className="AboutTopic">
                        <h3>Future</h3>
                        <p>We hope to provide our users with an easy way to find interesting facts about cities.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
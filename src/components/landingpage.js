import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
        <div style= {{ width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                        alt="avatar"
                        className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Full Stack Web Dev</h1>
                        <hr />

                        <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                        <div className="social-links">

                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/dina-mariana-33225112a/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://github.com/dinamarianaaaa" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                        </div>

                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

    export default Landing;
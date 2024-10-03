/*
Daniel Santos Martinez
CS450-101
UCID: ds73
Assignment 2
*/

import React, {Component} from 'react';
import './App.css';

class PersonalProfile extends Component {
    render() {
        return (
            <div class="resume-block">
                <p class="resume-block-topic">{this.props.title}</p>
                <p id="resume-block-text-personal-profile">{this.props.data}</p>
            </div>
        );
    }
}

export default PersonalProfile;
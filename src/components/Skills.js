/*
Daniel Santos Martinez
CS450-101
UCID: ds73
Assignment 2
*/

import React, {Component} from 'react';
import '../App.css';

class Skills extends Component {
    render() {
        const {skills_1, skills_2, skills_3} = this.props.skills;
        return (
            <div id="list-resume-block">
                <p class="resume-block-topic">Key Skills</p>
                <div class="resume-list-spacing">
                    <div class="ul-div-group">
                        <ul class="ul-multi-resume-block">
                            {skills_1.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                    <div class="ul-div-group">
                        <ul class="ul-multi-resume-block">
                            {skills_2.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                    <div class="ul-div-group">
                        <ul class="ul-multi-resume-block">
                            {skills_3.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
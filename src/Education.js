/*
Daniel Santos Martinez
CS450-101
UCID: ds73
Assignment 2
*/

import React, {Component} from 'react';
import './App.css';

class Education extends Component {
    render() {
        return (
            <div id="list-resume-block">
                <p className={`resume-block-topic ${this.props.isFirst ? '' : 'hidden'}`}>Education</p>
                <div id="explicit-group-div">
                    <ol class="edit-list">
                        <div class="resume-inside-block">
                            <p class="resume-block-text-title">{this.props.university}</p>
                            <span>{this.props.program}<br/></span>
                            <span>{this.props.year}<br/></span>
                            <span>{this.props.gpa}</span>
                        </div>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Education;
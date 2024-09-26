import React, {Component} from "react";
import "../App.css";

class WorkExperience extends Component {
    render() {
        return (
            <div class="resume-block">
                <p className={`resume-block-topic ${this.props.isFirst ? '' : 'hidden'}`}>Work Experience</p>
                <ol class="edit-list">
                    <div class="resume-inside-block">
                        <p className="resume-block-text-title">
                            {this.props.title}
                        </p>
                        <p className="resume-block-text">
                            {this.props.details}
                        </p>
                    </div>
                </ol>
            </div>
        );
    }
}

export default WorkExperience;

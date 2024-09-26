/*
Daniel Santos Martinez
CS450-101
UCID: ds73
Assignment 2
*/


import React, {Component} from 'react';
import './App.css'
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills';
import Education from './components/Education';


class App extends Component {

    // called when component is created and initializes state in the Component
    constructor(props) {
        super(props);
        console.log("constructor has been called");

        // create a state object that holds all the data for the resume.
        this.state = {
            header_data: [{
                name: "Zh Rimel",
                title: "Data Scientist",
                email_addr: "abc@gmail.com",
                website: 'abc.github.io/abc',
                mobile: '01234567890'
            }],

            personal_profile_data: [{
                profile_title: "Personal Profile",
                profile_data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
                    "                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                    "                  enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                    "                  nisi ut aliquip ex ea commodo consequat."
            }],

            key_skills: [{
                skills_1: ["A Key skill", "A Key skill", "A Key skill"],
                skills_2: ["A Key skill", "A Key skill", "A Key skill"],
                skills_3: ["A Key skill", "A Key skill", "A Key skill"]
            }],

            education_info: [
                {
                    university: 'New Jersey Institute of Technology',
                    year: '2018-2022',
                    program: 'BS in Computer Science',
                    gpa: 'GPA 3.9'
                },
                {
                    university: 'New Jersey Institute of Technology',
                    year: '2022-2023',
                    program: 'MS in Computer Science',
                    gpa: 'GPA 3.9'
                }],

            work_experience_info: [
                {
                    job_title: 'Job Title at Company (August 2022 – December 2023)',
                    job_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    job_title: 'Job Title 2 at Company 2 (August 2020 – December 2021)',
                    job_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }]
        }; // state Obj
    }


    render() { // returns all the JSX that defines the component UI to be shown in browser
        return (
            <div id="everything">
                {this.state.header_data.map(header => {
                    return (
                        <Header name={header.name}
                                title={header.title}
                                email_addr={header.email_addr}
                                website={header.website}
                                mobile={header.mobile}></Header>
                    );
                })}
                <hr id="header-borderline"/>
                <div id="all_body">
                    {this.state.personal_profile_data.map(profile => {
                        return (
                            <PersonalProfile title={profile.profile_title}
                                             data={profile.profile_data}></PersonalProfile>
                        );
                    })}
                    <hr class="resume-divider-line"/>
                    {this.state.work_experience_info.map((work, index) => {
                        return (
                            <WorkExperience
                                key={index}
                                isFirst={index === 0}
                                title={work.job_title}
                                details={work.job_details}
                            ></WorkExperience>
                        );
                    })}
                    <hr class="resume-divider-line"/>
                    <Skills skills={this.state.key_skills[0]}/>
                    <hr class="resume-divider-line"/>
                    {this.state.education_info.map((university, index) => {
                        return (
                            <Education
                                key={index}
                                isFirst={index === 0}
                                university={university.university}
                                year={university.year}
                                program={university.program}
                                gpa={university.gpa}
                            ></Education>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;

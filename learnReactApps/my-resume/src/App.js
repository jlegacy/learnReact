import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import test from './resume.json';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.myResume = test;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="profile" src="assets/images/profile.png" alt="" />
            <h1 className="name">{this.myResume.developerName}</h1>
            <h3 className="tagline">{this.myResume.tagline}</h3>
          </div>

          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email"><i className="fa fa-envelope"></i><a href={`mailto: ${this.myResume.email}`} >{this.myResume.email}</a></li>
              <li className="phone"><i className="fa fa-phone"></i><a href={`tel ${this.myResume.phone}`} >{this.myResume.phone}</a></li>
              <li className="linkedin"><i className="fa fa-linkedin"></i><a href={`https://${this.myResume.linkedin}`}>{this.myResume.linkedin}</a></li>
              <li className="github"><i className="fa fa-github"></i><a href={`https://${this.myResume.github}`}>{this.myResume.github}</a></li>

            </ul>
          </div>
          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {this.myResume.education.map((item, index) => (
              <div className="item">
                <h4 className="degree">{item.degree}</h4>
                <h5 className="meta">{item.meta}</h5>
                <div className="time">{item.time}</div>
              </div>
            ))}
          </div>

          <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
              {this.myResume.interests.map((item, index) => (
                <li>{item.interest}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="main-wrapper">

          <section className="section summary-section">
            <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
            <div className="summary">
              <p>{this.myResume.summary}</p>
            </div>
          </section>



          <section className="section experiences-section">
            <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

            {this.myResume.experiences.map((item, index) => (
              <div className="item">
                <div className="meta">
                  <div className="upper-row">
                    <h3 className="job-title">{item.jobTitle}</h3>
                    <div className="time">{item.time}</div>
                  </div>
                  <div className="company">{item.company}</div>
                </div>
                <div className="details">
                  <div className="summary">
                    <p>{item.detail}</p>
                  </div>
                  <ul>
                    {item.skills.map((item, index2) => (
                      <li>{item.skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </section>

          <section className="section projects-section">
            <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
            <div className="intro">
              <p>Projects that I have contributed to:</p>
            </div>


            {this.myResume.projects.map((item, index) => (
              <div className="item">
                <span className="project-title"><a href={item.link} target="_blank">{item.name}</a></span> -
                    <span className="project-tagline">{item.description}</span>
              </div>

            ))}

          </section>

          <section className="skills-section section">
            <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
            <div className="skillset">

              {this.myResume.skills.map((item, index) => (
                <div className="item">
                  <h3 className="level-title">{item.skill}</h3>
                  <div className="level-bar">
                    <div className="level-bar-inner" data-level={item.percentage}>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </section>

        </div>
      </div>
    );
  }
}

export default App;

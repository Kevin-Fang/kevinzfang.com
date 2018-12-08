import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import 'react-typist/dist/Typist.css';
import 'bulma/css/bulma.css'

let projects_list = require('./projects.json')
let experience_list = require('./experience.json')

projects_list.sort((a, b) => {
  return a.priority - b.priority
})

class App extends Component {
  getAbout = () => {
    return (
      <div>
        <div style={{marginTop: "1vh"}}>
          <Typist avgTypingDelay={100} stdTypingDelay={25} cursor={{show: false}}>
            <span className="Name">Hi! I'm Kevin Fang</span>
          </Typist>
        </div>
        <img
          style={{width: '40vh', marginTop: 10}}
          src={'./headshot.png'}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center">
          <div>
            <a href="https://github.com/kevin-fang/">
              <img src={'./github.png'} style={{width: '4vh', margin: 5, opacity: 0.5}}/>
            </a>
            <a href="https://linkedin.com/in/kevin-fang/">
              <img src={'./linkedin.png'} style={{width: '4vh', margin: 5, opacity: 0.5}}/>
            </a>
            <a href="mailto:kevinzfang@gmail.com">
              <img src={'./mail.png'} style={{width: '4vh', margin: 5, marginTop: 10, opacity: 0.5}}/>
            </a>
          </div>
        </Grid>
        <div style={{fontSize: '3vh', marginTop: '2vh'}}>
          I'm currently a freshman studying Computer Science at NYU,<br/>
          interested in Machine Learning/AI and financial markets.<br/>
          <div style={{paddingTop: '1.5vh'}}>Currently, I'm exploring software engineering and data science.</div>
        </div>
      </div>
    )
  }

  getNavbar = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div style={{position: 'absolute', right: 0, margin: 10}} id="navbarBasicExample" className="navbar-menu">
          <a className="navbar-item" href="#about">
            About
          </a>
          <a className="navbar-item" href="#projects">
            Portfolio
          </a>
          <a className="navbar-item" href="#experience">
            Experience
          </a>
          <a className="navbar-item" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    )
  }

  makeCard = (project) => {
    if (project.hidden) {
      return null
    }
    return (
      <div className="card" style={{width: "40vh"}}>
        <header className="card-header">
          <p className="card-header-title">
            {project.name}
          </p>
        </header>
        <div className="card-content" style={{height: "25vh"}}>
          <div className="content">
            {project.description}
          </div>
        </div>
        <footer className="card-footer">
          <a href={project.link} target="_blank" className="card-footer-item">Link</a>
          <a href={project.github} target="_blank" className="card-footer-item">GitHub</a>
        </footer>
      </div>
    )
  }

  getProjects = () => {
    return (
      <Grid
          container
          spacing={24}
          wrap={"wrap"}
          direction="row"
          justify="center">
          {
            projects_list.map((project) => {
              return <Grid item>{this.makeCard(project)}</Grid>
            })
          }
      </Grid>
    )
  }

  getExperience = () => {
    return (
      <div style={{textAlign: 'left', margin: 10}}>
        {
          experience_list.map((experience) => {
            return <div>
              <b style={{fontSize: 40}}>{experience.company_name}</b><br/>
              {experience.description.map((description) => {
                return <li style={{marginLeft: 10}}>{description}</li>
              })}<br/>
            </div>
          })
        }
      </div>
    )
  }

  getContact = () => {
    return (
      <div>
        [Contact goes here]
      </div>
    )
  }

  render() {
    return (
      <div className="App" id="about">
        <div style={{minHeight: '100vh'}}>
          {this.getNavbar()}
          {this.getAbout()}
        </div>
        <a href="#projects">
          <i style={{position: 'absolute', bottom: 5}} className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </a>
        <div id="projects" style={{minHeight: '100vh', width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0, marginBottom: 0}}>
            Portfolio
          </div>
          {this.getProjects()}
        </div>
        <div id="experience" style={{minHeight: '100vh', width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0}}>
            Experience
          </div>
          {this.getExperience()}
        </div>
        <div id="contact" style={{minHeight: '100vh', width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0}}>
            Contact
          </div>
          {this.getContact()}
        </div>
      </div>
    );
  }
}

export default App;

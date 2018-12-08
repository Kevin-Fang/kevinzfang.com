import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import 'react-typist/dist/Typist.css';
import 'bulma/css/bulma.css'

let projects_list = require('./projects.json')

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
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Portfolio
          </a>
          <a className="navbar-item">
            Experience
          </a>
          <a className="navbar-item">
            Contact
          </a>
        </div>
      </nav>
    )
  }

  getProjects = () => {
    return (
      <ul>
        {
          projects_list.map((project) => {
            return <li>{project.name}</li>
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div style={{height: "100%"}}>
          {this.getNavbar()}
          {this.getAbout()}
        </div>
        <a href="#projects">
          <i style={{position: 'absolute', bottom: 10}} className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </a>
        <div id="projects" style={{position: 'absolute', top: "100%", height: '100%', width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0}}>
            Projects
          </div>
          {this.getProjects()}
        </div>
      </div>
    );
  }
}

export default App;

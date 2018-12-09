import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import 'react-typist/dist/Typist.css';
import 'bulma/css/bulma.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ProjectsComponent from './Projects.js'
import AboutComponent from './About.js'
import ExperienceComponent from './Experience.js'
import SkillsComponent from './Skills.js'


class App extends Component {
  getMain = () => {
    return (
      <div>
        <div style={{marginTop: "1vh", fontSize: '10%', width: '100%'}}>
          <Typist avgTypingDelay={100} stdTypingDelay={25} cursor={{show: true}} blink={true}>
            <span className="Name">Hi! I'm Kevin Fang.</span>
          </Typist>
        </div>
        <img
          alt="headshot"
          style={{maxWidth: '40vh', maxHeight: '40vh', marginTop: 10}}
          src={'./headshot.png'}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center">
          <div>
            <a href="https://github.com/kevin-fang/" target="_blank" rel="noopener noreferrer" >
              <img alt="GitHub" src={'./github.png'} style={{width: '4vh', margin: 5, opacity: 0.5}}/>
            </a>
            <a href="https://linkedin.com/in/kevin-fang/" target="_blank" rel="noopener noreferrer" >
              <img alt="LinkedIn" src={'./linkedin.png'} style={{width: '4vh', margin: 5, opacity: 0.5}}/>
            </a>
            <a href="mailto:kevinzfang@gmail.com">
              <img alt="Email" src={'./mail.png'} style={{width: '4vh', margin: 5, marginTop: 10, opacity: 0.5}}/>
            </a>
          </div>
        </Grid>
        <div style={{maxWidth: '100%', textAlign: 'center', margin: 20}}>
          <span style={{maxWidth: '100vh', fontSize: "3vh", textAlign: 'left', display: 'block', marginLeft: 'auto', marginRight: 'auto', lineHeight: '24pt'}}>
            Undergrad studying Computer Science,
            interested in Machine Learning/AI, bioinformatics, and financial markets.<br/><br/>
            <span style={{paddingTop: '2vh'}}>Exploring software engineering and data science.</span>
          </span>
        </div>
      </div>
    )
  }

  getNavbar = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div style={{position: 'absolute', right: 0, margin: 10}} id="navbarBasicExample" className="navbar-menu">
          {/*<a className="navbar-item" href="#about">
            About
          </a>*/}
          <AnchorLink className="navbar-item" href="#about">
            About
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#projects">
            Projects
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#experience">
            Experience
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#skills">
            Skills
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#contact">
            Contact
          </AnchorLink>
        </div>
      </nav>
    )
  }

  getContact = () => {
    return (
      <div style={{marginBottom: "4vh", margin: 20}}>
        <span style={{maxWidth: '100vh', fontSize: "3vh", display: 'block', marginLeft: 'auto', marginRight: 'auto', lineHeight: '24pt'}}>Feel free to write to me at <a href="mailto:kevinzfang@gmail.com">kevinzfang@gmail.com</a>!</span>
      </div>
    )
  }

  render() {
    return (
      <div className="App" id="main">
        <div style={{minHeight: '100vh'}}>
          {this.getNavbar()}
          {this.getMain()}
        </div>
        <AnchorLink href="#about">
          <i style={{position: 'absolute', bottom: 5}} className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </AnchorLink>

        <hr className="divider" style={{maxWidth: '50vw', marginLeft: 'auto', marginRight: 'auto'}}/>

        <AboutComponent />
        <AnchorLink href="#experience" style={{position: 'relative', bottom: 0}}>
          <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </AnchorLink>

        <div className="divider" style={{maxWidth: '50vw', marginLeft: 'auto', marginRight: 'auto'}}/>

        <ExperienceComponent />
        <AnchorLink href="#projects" style={{position: 'relative', bottom: 0}}>
          <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </AnchorLink>

        <div className="divider" style={{maxWidth: '50vw', marginLeft: 'auto', marginRight: 'auto'}}/>

        <ProjectsComponent />
        <AnchorLink href="#skills" style={{bottom: "-100vh"}}>
          <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </AnchorLink>

        <div className="divider" style={{maxWidth: '50vw', marginLeft: 'auto', marginRight: 'auto'}}/>

        <SkillsComponent />
        <AnchorLink href="#contact" style={{bottom: "-100vh"}}>
          <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </AnchorLink>

        <div className="divider" style={{maxWidth: '50vh', marginLeft: 'auto', marginRight: 'auto'}}/>

        <div id="contact" style={{width: "100%"}}>
          <div style={{fontSize: '8vh', marginTop: 0}}>
            Want to get in touch?
          </div>
          {this.getContact()}
        </div>
        <span style={{margin: '5vh'}}>© Kevin Fang, 2018</span><br/>
      </div>
    );
  }
}

export default App;

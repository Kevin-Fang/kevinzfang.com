import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist'
import Grid from '@material-ui/core/Grid'
import 'react-typist/dist/Typist.css';
import 'bulma/css/bulma.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

let projects_list = require('./projects.json')
let experience_list = require('./experience.json')
let skills = require('./skills.json')

projects_list.sort((a, b) => {
  return a.priority - b.priority
})

class App extends Component {
  getAbout = () => {
    return (
      <div>
        <div style={{marginTop: "1vh", fontSize: '10vh'}}>
          <Typist avgTypingDelay={100} stdTypingDelay={25} cursor={{show: true}} blink={true}>
            <span className="Name">Hi! I'm Kevin Fang</span>
          </Typist>
        </div>
        <img
          alt="headshot"
          style={{width: '40vh', marginTop: 10}}
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
        <div style={{fontSize: '3vh', marginTop: '2vh'}}>
          I'm currently a freshman studying Computer Science at NYU,<br/>
          interested in Machine Learning/AI, bioinformatics, and financial markets.<br/>
          <div style={{paddingTop: '1.5vh'}}>Currently, I'm exploring software engineering and data science.</div>
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
          <AnchorLink className="navbar-item" href="#projects" data-scroll>
            Portfolio
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#experience" data-scroll>
            Experience
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#skills" data-scroll>
            Skills
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#contact" data-scroll>
            Contact
          </AnchorLink>
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
        <div className="card-content" style={{minHeight: "20vh"}}>
          <div className="content">
            {project.description}
          </div>
        </div>
        <footer className="card-footer">
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-footer-item">Link</a>}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-footer-item">GitHub</a>        
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
              return <Grid item key={project.name}>{this.makeCard(project)}</Grid>
            })
          }
      </Grid>
    )
  }

  getExperience = () => {
    return (
      <div style={{textAlign: 'left', margin: 25}}>
        {
          experience_list.map((experience) => {
            return <div style={{marginTop: "2.5vh"}}>
              <i>{experience.dates}</i><br/>
              <b style={{fontSize: "3vh", marginTop: 0}}>{experience.position} @ <a target="_blank" rel="noopener noreferrer" href={experience.company_link}>{experience.company_name}</a></b><br/>
              {experience.description.map((description) => {
                return <div style={{marginLeft: 25}}>> {description}</div>
              })}
            </div>
          })
        }
      </div>
    )
  }

  getContact = () => {
    return (
      <div style={{marginBottom: "4vh"}}>
        <span>Feel free to write to me at <a href="mailto:kevinzfang@gmail.com">kevinzfang@gmail.com</a>!</span>
      </div>
    )
  }

  createSkillsRow = (skillType, skills) => {
    return (
      <div>
        <span style={{fontSize: '2.5vh'}}>{skillType}</span><br/><br/>
          <div className="SideBySide">
            {
              skills.map((skill) => {
                if (skill.icon) {
                  return (<div style={{marginLeft: 20, marginRight: 20}}>
                    <i className={skill.icon} style={{fontSize: "8vh", opacity: 0.7}}/><br/>
                    <span style={{fontSize: '1.5vh'}}>{skill.name}</span>
                  </div>)
                } else {
                  return <div style={{marginLeft: 20, marginRight: 20}}>
                    <img alt={skill.name} src={skill.logo} style={{width: "7.5vh", opacity: 0.7}}/><br/>
                    <span style={{fontSize: '1.5vh'}}>{skill.name}</span>
                  </div>
                }
              })
            }
          </div><br/>
      </div>
    )
  }

  getSkills = () => {
    return (
      <div>
        {this.createSkillsRow("Languages", skills.languages)}
        {this.createSkillsRow("Libraries", skills.libraries)}
        {this.createSkillsRow("Web", skills.web)}
        {this.createSkillsRow("Miscellaneous", skills.misc)}
      </div>
    )
  }

  render() {
    return (
      <div className="App" id="about">
        <div id="about" style={{minHeight: '100vh'}}>
          {this.getNavbar()}
          {this.getAbout()}
        </div>
        <AnchorLink href="#projects">
          <i style={{position: 'absolute', bottom: 5}} className="icon fa fa-chevron-down" data-scroll aria-hidden="true"></i>
        </AnchorLink>


        <div id="projects" style={{width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0, marginBottom: 0}}>
            <b>Portfolio</b>
          </div>
          {this.getProjects()}<br/>
          <AnchorLink href="#experience" style={{position: 'relative', bototm: 0}}>
            <i className="icon fa fa-chevron-down" data-scroll aria-hidden="true"></i>
          </AnchorLink>
        </div>


        <div id="experience" style={{width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0}}>
            <b>Experience</b>
          </div>
          {this.getExperience()}
          <AnchorLink href="#skills" style={{bottom: "-100vh"}}>
            <i className="icon fa fa-chevron-down" data-scroll aria-hidden="true"></i>
          </AnchorLink>
        </div>

        <div id="skills" style={{width: '100%'}}>
          <div style={{fontSize: '10vh', marginTop: 0}}>
            <b>Skills</b>
          </div>
          {this.getSkills()}
          <AnchorLink href="#contact" style={{bottom: "-100vh"}}>
            <i className="icon fa fa-chevron-down" data-scroll aria-hidden="true"></i>
          </AnchorLink>
        </div>

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

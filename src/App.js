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
  getMain = () => {
    return (
      <div>
        <div style={{marginTop: "1vh", fontSize: '10vh'}}>
          <Typist avgTypingDelay={100} stdTypingDelay={25} cursor={{show: true}} blink={true}>
            <span className="Name">Hi! I'm Kevin Fang!</span>
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
          I'm currently an undergrad studying Computer Science,<br/>
          interested in Machine Learning/AI, bioinformatics, and financial markets.<br/>
          <div style={{paddingTop: '2vh'}}>Exploring software engineering and data science.</div>
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
            Portfolio
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

  makeCard = (project) => {
    if (project.hidden) {
      return null
    }
    return (
      <div className="card" style={{width: "80vh"}}>
        <header className="card-header">
          <p className="card-header-title">
            {project.name}
          </p>
        </header>
        <div className="card-content" style={{minHeight: "25vh"}}>
          <div className="content" style={{textAlign: 'center', lineHeight: '24pt'}}>
            {project.image && <div><img src={project.image} style={{maxHeight: '60vh'}}/><br/></div>}
            <i>{project.summary}</i><br/><br/>
            <div style={{textAlign: 'left'}}>
              {project.description}
              {project.highlight && <div><br/><b>{project.highlight}</b></div>}
            </div>
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
      <div style={{textAlign: 'center', margin: 25}}>
        {
          experience_list.map((experience) => {
            return (
              <div style={{marginTop: "2.5vh"}}>
                <i>{experience.dates}</i><br/>

                <b style={{fontSize: "3vh", marginTop: 0}}>{experience.position} @ <a target="_blank" rel="noopener noreferrer" href={experience.company_link}>{experience.company_name}</a></b><br/>
                {experience.description.map((description) => {
                  return <span style={{textAlign: 'left', maxWidth: '80vh', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>> {description}</span>
                })}
                <br/>
              </div>
            )
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
                    {/*<span style={{fontSize: '1.5vh'}}>{skill.name}</span>*/}
                  </div>)
                } else {
                  return <div style={{marginLeft: 20, marginRight: 20}}>
                    <img alt={skill.name} src={skill.logo} style={{width: "7.5vh", opacity: 0.7}}/><br/>
                    {/*<span style={{fontSize: '1.5vh'}}>{skill.name}</span>*/}
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

  getAbout = () => {
    return (
      <div style={{width: '100%', textAlign: 'center'}}>
        <span style={{maxWidth: '80vh', textAlign: 'left', display: 'block', marginLeft: 'auto', marginRight: 'auto', lineHeight: '24pt'}}>
        I'm Kevin. I'm currently a freshman at New York University majoring in Computer Science. 
        I am passionate about learning new technologies and learning to best use them to make projects that I'm proud of. <br/><br/>

        Before NYU, I was a student at Commonwealth High School, where I gained a deeper appreciation for the non-STEM fields. 
        I learned about writing with clarity and precision, which is now probably one of the most important things I know.<br/><br/>

        When I'm not working on projects, you can find me making coffee, working out, or fencing.
        </span>
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

        <div id="about" style={{width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0, marginBottom: 0}}>
            <b>About Me</b>
          </div>
          {this.getAbout()}<br/>
          <AnchorLink href="#projects" style={{position: 'relative', bototm: 0}}>
            <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
          </AnchorLink>
        </div>

        <div id="projects" style={{width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0, marginBottom: 0}}>
            <b>Portfolio</b>
          </div>
          {this.getProjects()}<br/>
          <AnchorLink href="#experience" style={{position: 'relative', bototm: 0}}>
            <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
          </AnchorLink>
        </div>


        <div id="experience" style={{width: "100%"}}>
          <div style={{fontSize: '10vh', margin: 30, marginTop: 0}}>
            <b>Experience</b>
          </div>
          {this.getExperience()}
          <AnchorLink href="#skills" style={{bottom: "-100vh"}}>
            <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
          </AnchorLink>
        </div>

        <div id="skills" style={{width: '100%'}}>
          <div style={{fontSize: '10vh', marginTop: 0}}>
            <b>Skills</b>
          </div>
          {this.getSkills()}
          <AnchorLink href="#contact" style={{bottom: "-100vh"}}>
            <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
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

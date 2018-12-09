import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
let projects_list = require('./projects.json')

projects_list.sort((a, b) => {
  return a.priority - b.priority
})

export default class ProjectComponent extends Component {
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

  	makeCard = (project) => {
	    if (project.hidden) {
	      return null
	    }
	    return (
	      <div className="card" style={{maxWidth: "100vw"}}>
	        <header className="card-header">
	          <p className="card-header-title" style={{fontSize: "2.5vh"}}>
	            {project.name}
	          </p>
	        </header>
	        <div className="card-content" style={{minHeight: "70vh"}}>
	          <div className="content" style={{textAlign: 'center', lineHeight: '24pt'}}>
	            {project.image && <div><img src={project.image} alt={project.name} style={{maxHeight: '40vh', maxWidth: '40vh'}}/><br/></div>}
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

  

	render() {
		return (
			<div id="projects" style={{width: "100%"}}>
          		<div style={{fontSize: '10vh', margin: 30, marginTop: 0, marginBottom: 0}}>
            		<b>Projects</b>
          		</div>
          	{this.getProjects()}<br/>
        	</div>
        )
	}	
}
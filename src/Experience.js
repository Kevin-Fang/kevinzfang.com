import React, { Component } from 'react';

let experience_list = require('./experience.json')

export default class ExperienceComponent extends Component {
	getExperience = () => {
	    return (
	      <div style={{textAlign: 'center', margin: 25}}>
	        {
	          experience_list.map((experience) => {
	            return (
	              <div style={{marginTop: "2.5vh"}}>
	                <i>{experience.dates}</i><br/>

	                <b style={{fontSize: "4vh", marginTop: 0, maxWidth: '50vw', flexWrap: 'wrap', textAlign: 'left', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>{experience.position} @ <a target="_blank" rel="noopener noreferrer" href={experience.company_link}>{experience.company_name}</a></b><br/>
	                {experience.description.map((description) => {
	                  return <span style={{textAlign: 'left', maxWidth: '50vw', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>> {description}</span>
	                })}
	                <br/>
	              </div>
	            )
	          })
	        }
	      </div>
	    )
	 }
	render() {
		return (
			<div id="experience" style={{width: "100%"}}>
		      <div style={{fontSize: '10vh', margin: 30, marginTop: 0}}>
		        <b>Experience</b>
		      </div>
		      {this.getExperience()}
       	 	</div>
		)
	}
}
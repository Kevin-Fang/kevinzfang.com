import React, { Component } from 'react';
let skills = require('./skills.json')

export default class SkillsComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hovering: null
		}
	}

	getVisibility = (name) => {
		if (this.state.hovering == name) {
			return 'visible'
		} else {
			return 'hidden'
		}
	}

	setHovering = (name) => {
		this.setState({
			hovering: name
		})
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
	                    <i onMouseOver={() => {this.setHovering(skill.name)}} className={skill.icon} style={{fontSize: "8vh", opacity: 0.7}}/><br/>
	                    <span style={{fontSize: '1.5vh', visibility: this.getVisibility(skill.name)}}>{skill.name}</span>
	                  </div>)
	                } else {
	                  return <div style={{marginLeft: 20, marginRight: 20}}>
	                    <img onMouseOver={() => {this.setHovering(skill.name)}} alt={skill.name} src={skill.logo} style={{width: "7.5vh", opacity: 0.7}}/><br/>
	                    <span style={{fontSize: '1.5vh', visibility: this.getVisibility(skill.name)}}>{skill.name}</span>
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
			<div id="skills" style={{width: '100%'}}>
	          <div style={{fontSize: '10vh', marginTop: 0}}>
	            <b>Skills</b>
	          </div>
	          {this.getSkills()}
	        </div>
		)
	}
}


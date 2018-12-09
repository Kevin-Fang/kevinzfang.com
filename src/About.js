import React, { Component } from 'react';

export default class AboutComponent extends Component {

	  getAbout = () => {
	    return (
	      <div style={{maxWidth: '100%', textAlign: 'center', margin: 20}}>
	        <span style={{maxWidth: '65vw', fontSize: "1.2em", textAlign: 'left', display: 'block', marginLeft: 'auto', marginRight: 'auto', lineHeight: '24pt'}}>
		        I'm currently a freshman at New York University majoring in Computer Science. 
		        I am passionate about exploring new technologies and learning to best use them for projects that I'm proud of. <br/><br/>

		        Before NYU, I was a student at Commonwealth High School, where I gained a deeper appreciation for the non-STEM fields. 
		        I learned about writing with clarity and precision, which is now probably one of the most important things I know.<br/><br/>

		        When I'm not working on my own projects, you'll probably find me making coffee, working out, or practicing piano.
	        </span>
	      </div>
	    )
	  }
	render() {
		return (
			<div id="about" style={{width: "100%"}}>
	          <div style={{fontSize: '4em', margin: 30, marginTop: 0, marginBottom: 0}}>
	            <b>About Me</b>
	          </div>
	          {this.getAbout()}<br/>
        	</div>
        	)
	}
}
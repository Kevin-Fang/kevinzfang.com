import React, { Component } from 'react';

export default class AboutComponent extends Component {

	  getAbout = () => {
	    return (
	      <div style={{width: '100%', textAlign: 'center'}}>
	        <span style={{maxWidth: '80vh', fontSize: "2vh", textAlign: 'left', display: 'block', marginLeft: 'auto', marginRight: 'auto', lineHeight: '24pt'}}>
		        I'm Kevin. I'm currently a freshman at New York University majoring in Computer Science. 
		        I am passionate about learning new technologies and learning to best use them to make projects that I'm proud of. <br/><br/>

		        Before NYU, I was a student at Commonwealth High School, where I gained a deeper appreciation for the non-STEM fields. 
		        I learned about writing with clarity and precision, which is now probably one of the most important things I know.<br/><br/>

		        When I'm not working on my own projects, you'll probably find me making coffee, working out, or playing piano.
	        </span>
	      </div>
	    )
	  }
	render() {
		return (
			<div id="about" style={{width: "100%"}}>
	          <div style={{fontSize: '10vh', margin: 30, marginTop: 0, marginBottom: 0}}>
	            <b>About Me</b>
	          </div>
	          {this.getAbout()}<br/>
        	</div>
        	)
	}
}
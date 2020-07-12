(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e){e.exports=[{company_name:"Google",position:"Software Engineering Intern",company_link:"https://careers.google.com/",description:[],dates:"May 2020 - present",location:"Mountain View, CA (remote)"},{company_name:"Duke Catalyst Tech Society",position:"Social Chair",company_link:"https://www.dukecatalyst.co",description:["Plan and host social events for members throughout the summer and school year"],dates:"May 2020 - present",location:"Durham, NC"},{company_name:"Duke Catalyst Tech Society",position:"Professional Chair",company_link:"https://www.dukecatalyst.co",description:["Maintain and build relationships with companies for recruiting","Mentor students in preparation for the internship and full-time technical recuiting processes","Hold professional development events for students, including technical interview and resume review workshops"],dates:"January 2020 - May 2020",location:"Durham, NC"},{company_name:"Duke Machine Learning",position:"Associate Director of Sponsorship",company_link:"https://www.dukeml.org",description:["Planned Duke Datathon, a data science competition where 300+ attendees analyze and present about a dataset","Acted as a judge for Datathon, assessing submissions for methodology, relevance, and coherence","Maintained and built relationships with companies and university departments for sponsorships and talks"],dates:"September 2019 - December 2019",location:"Somerville, MA"},{company_name:"Intralinks",position:"Data Science Intern",company_link:"https://www.intralinks.com",description:["Performed web scraping and exploratory data analysis on M&A data to direct model selection (scraPy)","Classified articles by topic with 90% accuracy using Logistic Regression models (scikit-learn)","Clustered articles with K-Means Clustering to derive meaning from news articles after optimizing dimensionality with principal component analysis","Predicted M&A deals with a machine learning pipeline consisting of supervised and unsupervised learning, including NLP techniques such as sentiment analysis and named entity recognition using BERT models"],dates:"May 2019 - August 2019",location:"Somerville, MA"},{company_name:"Curoverse Research",position:"Data Science Intern",company_link:"",description:["Developed reverse gene + rsid searching tool for open-source genome compression software (tiling)","Created machine learning classifiers to predict eye color and blood type to 95% accuracy using scikit-learn and TensorFlow","Developed prediction pipelines in Arvados, an open-source bioinformatics platform, using Java and Common Workflow Language (CWL)","Presented poster on open science and phenotypic analysis at the i2b2/tranSMART symposium to 100+ attendees at Harvard Medical School"],dates:"June 2016 - January 2019",location:"Somerville, MA"},{company_name:"MIT Media Lab",position:"Biomechatronics Intern",company_link:"https://media.mit.edu/groups/biomechatronics/overview",description:["Developed high throughput compute cluster for finite element modeling of prosthetic limb designs that increased computation speed by over 60%","Automated job management and submission using custom Python scripts"],dates:"March 2018",location:"Cambridge, MA"}]},135:function(e){e.exports={languages:[{name:"Python",icon:"devicon-python-plain colored"},{name:"Javascript",icon:"devicon-javascript-plain colored"},{name:"C",icon:"devicon-c-plain colored"},{name:"Kotlin",logo:"./kotlin.jpg"},{name:"Java",icon:"devicon-java-plain colored"}],libraries:[{name:"TensorFlow",logo:"tensorflow.jpg"},{name:"scikit-learn",logo:"scikit-learn.jpg"},{name:"RxJava",logo:"rxjava.jpg"},{name:"NumPy",logo:"numpy.jpg"}],web:[{name:"React.js",icon:"devicon-react-plain colored"},{name:"Express.js",icon:"devicon-express-original colored"},{name:"Node.js",icon:"devicon-nodejs-plain colored"},{name:"HTML",icon:"devicon-html5-plain colored"},{name:"CSS",icon:"devicon-css3-plain colored"}],misc:[{name:"Android",icon:"devicon-android-plain colored"},{name:"Linux",icon:"devicon-linux-plain colored"},{name:"Git",icon:"devicon-git-plain colored"},{name:"GitHub",icon:"devicon-github-plain colored"},{name:"Docker",icon:"devicon-docker-plain colored"},{name:"LaTeX",logo:"latex.jpg"}]}},142:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),o=n.n(r),c=(n(61),n(5)),l=n(6),s=n(8),m=n(7),u=n(2),d=(n(62),n(33)),p=n.n(d),h=n(53),g=n.n(h),f=n(17),y=n.n(f),v=(n(65),n(66),n(4)),b=n.n(v),w=n(54),k=n.n(w);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var S=n(71);S.sort(function(e,t){return e.priority-t.priority});var j=function(e){Object(s.a)(n,e);var t=E(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getProjects=function(){return i.a.createElement(y.a,{container:!0,spacing:24,wrap:"wrap",direction:"row",justify:"center"},S.map(function(t){return t.hidden?null:i.a.createElement(y.a,{item:!0,key:t.name},e.makeCard(t))}))},e.makeCard=function(e){return e.hidden?null:i.a.createElement("div",{className:"card",style:{margin:10,minWidth:"40vw",maxWidth:"75vw"}},i.a.createElement("header",{className:"card-header"},i.a.createElement("p",{className:"card-header-title",style:{fontSize:"1.5em"}},e.name)),i.a.createElement("div",{className:"card-content",style:{}},i.a.createElement("div",{className:"content",style:{textAlign:"center",lineHeight:"24pt"}},e.image&&i.a.createElement("div",null,i.a.createElement(k.a,{height:"20em"},i.a.createElement("img",{src:e.image,alt:e.name,style:{maxHeight:"20em",maxWidth:"40vw",marginLeft:"auto",marginRight:"auto"}})),i.a.createElement("br",null)),i.a.createElement("i",null,e.summary),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{textAlign:"justify"}},e.description,e.highlight&&i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("b",null,e.highlight))))),i.a.createElement("footer",{className:"card-footer"},e.link&&i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"card-footer-item"},"Link"),i.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"card-footer-item"},"GitHub")))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"projects",style:{width:"100%"}},i.a.createElement("div",{style:{fontSize:"4em",margin:30,marginTop:0,marginBottom:10}},i.a.createElement("b",null,"Selected Projects")),this.getProjects(),i.a.createElement("br",null))}}]),n}(a.Component);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var x=function(e){Object(s.a)(n,e);var t=R(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getAbout=function(){return i.a.createElement("div",{style:{maxWidth:"100%",textAlign:"center",margin:20}},i.a.createElement("span",{style:{maxWidth:"65vw",fontSize:"1.2em",textAlign:"left",display:"block",marginLeft:"auto",marginRight:"auto",lineHeight:"24pt"}},"I'm currently a sophomore at Duke University majoring in Computer Science with a concentration in Data Science and a minor in Linguistics. I am passionate about exploring new technologies and learning to best use them to build innovative projects.",i.a.createElement("br",null),i.a.createElement("br",null),"I transferred to Duke as a rising sophomore in CS. Before Duke, I was a student at the New York University Tandon School of Engineering, and before that, I was a student at Commonwealth High School, where I gained a deeper appreciation for the non-STEM fields. I learned about writing with clarity and precision, which is now probably one of the most important things I know.",i.a.createElement("br",null),i.a.createElement("br",null),"When I'm not working on my own projects, you'll probably find me at a hackathon, at the gym, making coffee, or practicing piano."))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"about",style:{width:"100%"}},i.a.createElement("div",{style:{fontSize:"4em",margin:30,marginTop:0,marginBottom:0}},i.a.createElement("b",null,"About Me")),this.getAbout(),i.a.createElement("br",null))}}]),n}(a.Component);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var O=n(134),C=function(e){Object(s.a)(n,e);var t=A(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getExperience=function(){return i.a.createElement("div",{style:{textAlign:"center",margin:25}},O.map(function(e){return i.a.createElement("div",{style:{marginTop:"2.5vh"}},i.a.createElement("i",null,e.dates," | ",e.location),i.a.createElement("br",null),i.a.createElement("b",{style:{fontSize:"2em",marginTop:0,maxWidth:"65vw",flexWrap:"wrap",textAlign:"left",display:"block",marginLeft:"auto",marginRight:"auto"}},e.position," @"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.company_link},e.company_name)),e.description.map(function(e){return i.a.createElement("span",{style:{textAlign:"justify",maxWidth:"65vw",display:"block",marginLeft:"auto",marginRight:"auto",fontSize:"1em"}},"> ",e)}),i.a.createElement("br",null))}))},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"experience",style:{width:"100%"}},i.a.createElement("div",{style:{fontSize:"4em",marginTop:0}},i.a.createElement("b",null,"Experience")),this.getExperience())}}]),n}(a.Component),N=n(34),M=n.n(N);function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var H=n(135),D=function(e){Object(s.a)(n,e);var t=I(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getVisibility=function(e){return a.state.hovering===e},a.setHovering=function(e){a.setState({hovering:e})},a.getOpacity=function(e){return a.state.hovering===e?1:.6},a.createSkillsRow=function(e,t){return i.a.createElement("div",null,i.a.createElement("span",{style:{fontSize:"1.2em"}},e),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"SideBySide",style:{flexWrap:"wrap"}},t.map(function(e){return e.icon?i.a.createElement("div",{onMouseOver:function(){a.setHovering(e.name)},onMouseOut:function(){a.setHovering(null)},onTouchStart:function(){a.setHovering(e.name)},onTouchEnd:function(){a.setHovering(null)},style:{marginLeft:20,marginRight:20}},i.a.createElement("i",{className:e.icon,style:{fontSize:"3.6em",opacity:a.getOpacity(e.name),transition:"opacity .2s"}}),i.a.createElement("br",null),i.a.createElement(M.a,{timeout:200,in:a.getVisibility(e.name)},i.a.createElement("span",{style:{fontSize:".8em"}},e.name))):i.a.createElement("div",{onMouseOver:function(){a.setHovering(e.name)},onMouseOut:function(){a.setHovering(null)},onTouchStart:function(){a.setHovering(e.name)},onTouchEnd:function(){a.setHovering(null)},style:{marginLeft:20,marginRight:20}},i.a.createElement("img",{alt:e.name,src:e.logo,style:{height:"3.3em",opacity:a.getOpacity(e.name),transition:"opacity .2s"}}),i.a.createElement("br",null),i.a.createElement(M.a,{timeout:200,in:a.getVisibility(e.name)},i.a.createElement("span",{style:{fontSize:".8em"}},e.name)))})),i.a.createElement("br",null))},a.getSkills=function(){return i.a.createElement("div",null,a.createSkillsRow("Languages",H.languages),a.createSkillsRow("Libraries",H.libraries),a.createSkillsRow("Web",H.web),a.createSkillsRow("Miscellaneous",H.misc))},a.state={hovering:null},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"skills",style:{width:"100%"}},i.a.createElement("div",{style:{fontSize:"4em",marginTop:0}},i.a.createElement("b",null,"Technical Skills")),this.getSkills())}}]),n}(a.Component);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var i=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var P=function(e){Object(s.a)(n,e);var t=T(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setHovering=function(e){a.setState({hovering:e})},a.handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.getOpacity=function(e){return a.state.hovering===e?1:.5},a.getMain=function(){return i.a.createElement("div",{className:"About"},i.a.createElement("div",{className:"fade-in"},i.a.createElement("div",{style:{fontSize:"2.1em",width:"100%"}},i.a.createElement(g.a,{interval:100},["Kevin Fang","CS Student","Software Developer","Data Scientist"].map(function(e){return i.a.createElement(p.a,{repeat:!0,avgTypingDelay:100,key:e,stdTypingDelay:30,cursor:{show:!0,blink:!0}},i.a.createElement("span",{className:"Name"},e),i.a.createElement(p.a.Backspace,{count:e.length,delay:1500}))}))),i.a.createElement("img",{alt:"headshot",style:{maxHeight:"30vh",marginTop:10},src:"./headshot.jpg"})),i.a.createElement(y.a,{container:!0,spacing:0,direction:"column",justify:"center"},i.a.createElement("div",{className:"fade-in"},i.a.createElement("a",{onMouseOver:function(){a.setHovering("github")},onMouseOut:function(){a.setHovering(null)},href:"https://github.com/kevin-fang/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"GitHub",src:"./github.jpg",style:{width:"2em",margin:5,opacity:a.getOpacity("github"),transition:"opacity .2s"}})),i.a.createElement("a",{onMouseOver:function(){a.setHovering("linkedin")},onMouseOut:function(){a.setHovering(null)},href:"https://linkedin.com/in/kevin-fang/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"LinkedIn",src:"./linkedin.jpg",style:{width:"2em",margin:5,opacity:a.getOpacity("linkedin"),transition:"opacity .2s"}})),i.a.createElement("a",{href:"mailto:kevinzfang@gmail.com",onMouseOver:function(){a.setHovering("email")},onMouseOut:function(){a.setHovering(null)}},i.a.createElement("img",{alt:"Email",src:"./mail.jpg",style:{width:"2em",margin:5,marginTop:10,opacity:a.getOpacity("email"),transition:"opacity .2s"}})))),i.a.createElement("div",{className:"fade-in",style:{maxWidth:"100%",textAlign:"center",margin:20}},i.a.createElement("span",{style:{maxWidth:"65vw",fontSize:"1.2em",textAlign:"left",display:"block",marginLeft:"auto",marginRight:"auto",lineHeight:"24pt"}},"Hi, I'm Kevin Fang!",i.a.createElement("br",null),i.a.createElement("br",null)," I'm a developer and an undergrad studying Computer Science, interested in machine learning and its applications to bioinformatics, finance, and other fields.",i.a.createElement("br",null),i.a.createElement("br",null),"I love technology and learning new things. Currently, I'm exploring software engineering and data science. For the past few years, I've been working with Curoverse Research to help us better understand the human genome.",i.a.createElement("br",null),i.a.createElement("br",null),"In the summer of 2019, I worked at Intralinks as an intern on the innovation team, building natural language processing pipelines to help streamline customer acquisition.",i.a.createElement("br",null),i.a.createElement("br",null),"I am currently a software engineering intern at Google.")))},a.getNavbar=function(){return i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{style:{position:"absolute",right:0,margin:10},id:"navbarBasicExample",className:"navbar-menu fade-in"},i.a.createElement(b.a,{className:"navbar-item",href:"#about"},"About Me"),i.a.createElement(b.a,{className:"navbar-item",href:"#experience"},"Experience"),i.a.createElement(b.a,{className:"navbar-item",href:"#projects"},"Selected Projects"),i.a.createElement(b.a,{className:"navbar-item",href:"#skills"},"Technical Skills"),i.a.createElement(b.a,{className:"navbar-item",href:"#contact"},"Contact Me"),i.a.createElement("a",{className:"navbar-item",target:"_blank",rel:"noopener noreferrer",href:"https://kevinzfang.com/resume.pdf"},"Resume")))},a.getContact=function(){return i.a.createElement("div",{style:{marginBottom:"4vh",margin:20}},i.a.createElement("span",{style:{maxWidth:"75vw",fontSize:"1.2em",display:"block",marginLeft:"auto",marginRight:"auto",lineHeight:"24pt"}},"Feel free to write to me at"," ",i.a.createElement("a",{href:"mailto:kevinzfang@gmail.com"},"kevinzfang@gmail.com"),"!"))},a.state={hovering:null,width:window.innerWidth},a}return Object(l.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=500;return i.a.createElement("div",{className:"App",id:"main"},i.a.createElement("div",{style:{minHeight:"93vh"}},this.getNavbar(),this.getMain()),i.a.createElement(b.a,{href:"#about",style:{position:"relative",bottom:0}},i.a.createElement("i",{className:"icon fa fa-chevron-down","aria-hidden":"true"})),i.a.createElement("hr",{className:"divider"}),i.a.createElement(x,null),i.a.createElement(b.a,{href:"#experience",style:{position:"relative",bottom:0}},i.a.createElement("i",{className:"icon fa fa-chevron-down","aria-hidden":"true"})),i.a.createElement("div",{className:"divider"}),i.a.createElement(C,null),i.a.createElement(b.a,{href:"#projects",style:{position:"relative",bottom:0}},i.a.createElement("i",{className:"icon fa fa-chevron-down","aria-hidden":"true"})),i.a.createElement("div",{className:"divider"}),i.a.createElement(j,{mobile:e}),i.a.createElement(b.a,{href:"#skills",style:{bottom:"-100vh"}},i.a.createElement("i",{className:"icon fa fa-chevron-down","aria-hidden":"true"})),i.a.createElement("div",{className:"divider"}),i.a.createElement(D,null),i.a.createElement(b.a,{href:"#contact",style:{bottom:"-100vh"}},i.a.createElement("i",{className:"icon fa fa-chevron-down","aria-hidden":"true"})),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{id:"contact",style:{width:"100%"}},i.a.createElement("div",{style:{fontSize:"4em",marginTop:0}},"Want to get in touch?"),this.getContact()),i.a.createElement("div",{className:"SideBySide",style:{width:"100%"}},i.a.createElement("div",{style:{marginRight:"auto",padding:20}},"\xa9 Kevin Fang, 2019"),i.a.createElement(b.a,{href:"#main",style:{marginLeft:"auto",marginRight:"auto",padding:20,textAlign:"center"}},"Back to Top"),i.a.createElement("a",{href:"https://github.com/kevin-fang/kevinzfang.com",style:{marginLeft:"auto",padding:20}},"Website Source Code")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,n){e.exports=n(142)},61:function(e,t,n){},62:function(e,t,n){},71:function(e){e.exports=[{name:"Reinforced Flappy Bird",image:"https://raw.githubusercontent.com/kevin-fang/reinforced-flappy-bird/master/animation.gif",link:"https://www.youtube.com/watch?v=PNE6KFNn1yY",priority:1.2,github:"https://github.com/kevin-fang/reinforced-flappy-bird",summary:"Play Flappy Bird with neural networks",description:"For my final, independent CS project in high school, I used policy gradients to train a neural net to play Flappy Bird. The neural net read the state of a Flappy Bird game and would predict the optimal move (jump or fall). Based on results of the previous games, it would learn to make better predictions over time. After a few hundred iterations of training, the AI was able to play Flappy Bird without failing."},{name:"On the Efficacy of Renewable Portfolio Standards",image:"./datathon_graph.jpg",link:"",priority:1.5,github:"https://github.com/Kevin-Fang/2019-citadel-datathon",summary:"Our Citadel 2019 Data Open project",description:"For the 2019 Citadel Data Open at Princeton, our team worked on analyzing the efficacy of renewable portfolio standards using the SEDS dataset from the U.S. Energy Information Administration. We then modeled how it affected emissions data and electricity revenue data with a difference-in-differences econometrics model."},{name:"DearAI [PennApps XIX - Top 5, Best Entertainment Hack]",image:"./dearai.jpg",link:"https://devpost.com/software/dear-ai",priority:1.3,github:"https://github.com/kevin-fang/dear-ai",summary:"Combating depression through suggestions and recommendations, one journal entry at a time.",description:"Since many teenagers do not actively seek out support for potential mental health issues (either due to financial or personal reasons), we built an app that integrates daily journaling with sentiment analysis software, to inform teens about their emotions using machine learning and IBM Watson's Tone Analyzer API. Based on the resultant data, we recommend to them activities designed to improve their well-being."},{name:"simplif.ai [YHack 2018]",image:"./simplifai.jpg",link:"https://yhack2018.hackerearth.com/sprints/yhack-2018/dashboard/05d960f/submission/",priority:2,github:"https://github.com/kevin-fang/simplif.ai",summary:"Identify overly complex phrases with machine learning",description:"To make research and legal writing more accessible, at YHack 2018 we created an application that would serve as an AI 'companion' for writers, providing feedback as to whether sentences would be overly complicated or difficult to understand. We trained three different classifiers: a custom recurrent neural net, a Google Cloud AutoML natural language classifier, and a Markov Chain using Wolfram Classify, and achieved over 80% accuracy."},{name:"PillUp [HopHacks 2018 - 1st Place Winner]",image:"./pillup.jpg",link:"https://hophacks-fall2018.hackerearth.com/sprints/hophacks-fall-2018/dashboard/f309dff/submission/",priority:1,summary:"A low-cost, IoT enabled medicine dispenser for everyone",github:"https://github.com/kevin-fang/PillUp",description:"At HopHacks 2018, we created a robotic pill dispenser to simplify the daily routine of taking different medicines. We created a physical device using servo motors to dispense medicine, a React.js-based web frontend for physicians to monitor patient statuses, and an iOS mobile client for patients to easily dispense their medicine in the morning."},{name:"Relief Mesh [HackHarvard - Best Hack For Building Communities]",image:"./reliefmesh.jpg",link:"https://devpost.com/software/relief-mesh-zhp5yu",priority:2,summary:"Mesh network to help disaster relief",github:"https://github.com/kevin-fang/relief-mesh",description:"After seeing the damage caused by hurricane Florence, we were inspired to create a system for communication that did not depend on developed cellular networks. Using long-range 'LoRA' radios, short-range transceivers, a Raspberry Pi Zero, and GPS modules, we created a decentralized mesh network that allows users to communicate with each other over 1 mi+ ranges without the use of internet."},{name:"Solanum Time",image:"./solanum.jpg",summary:"A well-designed pomodoro timer",link:"https://solanumti.me",github:"http://github.com/kevin-fang/solanum",priority:3,hidden:"true",description:"A small side-project of mine: I couldn't find many well-designed Pomodoro timers online, so I decided to make my own using React.js, material-ui, and odometer.js."},{name:"Climate Sentiment",image:"./climate-sentiment.jpg",link:"https://public.tableau.com/profile/kevin.fang#!/vizhome/DigitalExhibit/ClimateChangeintheMedia",github:"https://github.com/kevin-fang/climate-sentiment",summary:"Sentiment trends towards climate change over the years",priority:2,description:"I created a tool that scraped several news sites, including CNN, Fox News, the Economist, and Reuters. Once it saved the sentences, I ran them through the Google Cloud Platform NLP toolkit for sentiment analysis. Then, I took the sentiments and graphed them in Tableau, to see if I could find any overall trends. To no one's surprise, there was a mild negative trend that appeared among the news sites, showing that over time, climate change writing gets more and more negative."},{name:"Logical Inference",image:"./logicalinference.jpg",link:"",hidden:"true",summary:"An Aristotelian logic system, implemented in C",priority:2,github:"https://github.com/kevin-fang/logical-inference",description:"I created a logic system that allowed users to make assertions such as 'all humans are mammals' and 'all mammals are warm-blooded.' After the user makes assertions, the system will then solve logical queries, such as 'are all humans warm-blooded?'"},{name:"FenceMe Fencing Scorekeeper",image:"./fenceme.jpg",link:"",summary:"An elegant Android app to keep track of fencing matches",priority:2,github:"https://github.com/kevin-fang/FenceMe-Scorekeeper",description:"I was looking for easier ways for referees to score fencing matches, but I found that many of the existing apps on the Google Play Store were quite outdated or unpleasant to use. So I created my own app called FenceMe Fencing Scorekeeper. I built it using Java, Kotlin, and RxJava, and it included features such as timing, keeping track of points, penalties, and tiebreakers."}]}},[[56,1,2]]]);
//# sourceMappingURL=main.b7b8fcb4.chunk.js.map
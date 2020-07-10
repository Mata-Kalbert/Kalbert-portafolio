
import React from 'react';
import './proyects.css';


const proyects = {
    title: 'Projects',
    userUx: '../ux.png',
    cssZen: '../zen.png',
    weather: '../weather.png',
    books: '../books.png',
    titleUx: 'UX development project',
    titleCss: 'Zen garden redo-proyect',
    titleJs: 'Javascript an XML',
    tittleFront: 'Front end development process'
}

class Projects extends React.Component {
    render() {
        return (
           <div className="Proyects">
        
                <h1>{proyects.title} </h1>
            
            <div className="user-container">
                <div className="box">
                    <h2>{proyects.titleUx} </h2>
                    <a className="button" href="#popup1"> <img src = {proyects.userUx}/></a>
                </div>
                <div id="popup1" class="overlay">
                    <div class="popup">
                        <h2>Here i am</h2>
                        <p>Introduction One of the practices that forms part of the Toyota Production System is called the improvement Blitz, defined as a dedicated and concentrated period of time to address a particular issue, often over the course of several days. The output of an improvement blitz will often be a new approach to solving a problem, such as a new layout of equipment or more organized workspace.Target’s DevOps Dojo An example of a devops improvement blitz is the monthly challenge program at the Target DevOps Dojo. The Target Deops dojo occupies 18 thousand square feet of open office space, where Devops coaches help teams across the target technology organization elevate the state of their practice. The most intensive format is what they call “30 day challenges” where internal development teams come in for a month and work together with dedicated dojo coaches and engineers. They bring their work with them with the goal of solving an internal problem they have been struggling with and create a breakthrough in thirty days.Institutionalize Rituals to Pay Down Technical Debt</p>
                         <a class="close" href="#">&times;</a>
                        <div class="content">
                        <a href="../Specification.pdf">UX DESIGN SPECIFICATION</a><br></br>
                        <a href=" https://mata-kalbert.github.io/cs-hci/">UX DESIGN COMPLETE PROJECT</a>
		                </div>
                    </div>
                </div>
                <div className="box">
                    <h2>{proyects.titleCss} </h2>
                    <a className="button" href="#popup2"><img src = {proyects.cssZen}/></a>
                </div>
                <div id="popup2" class="overlay">
                    <div class="popup">
                        <h2>Here i am</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                        <a href="https://mata-kalbert.github.io/zen-garden/">ZEN GARDEN RE-DESIGN</a><br></br>
                        <a href="https://github.com/Mata-Kalbert/zen-garden">ACCESS CODE GITHUB</a>
		                </div>
                    </div>
                </div>
                <div className="box">
                    <h2>{proyects.titleJs} </h2>
                    <a className="button" href="#popup3"><img src = {proyects.books}/></a> 
                </div>
                <div id="popup3" class="overlay">
                    <div class="popup">
                        <h2>Javascript and XML</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                        <a href="https://mata-kalbert.github.io/form-validation/">JAVASCRIPT AND XML</a><br></br>
                        <a href="https://github.com/Mata-Kalbert/form-validation">ACCESS CODE GITHUB</a>
		                </div>
                    </div>
                </div>
                <div className="box">
                    <h2>{proyects.tittleFront} </h2>
                    <a className="button" href="#popup4"> <img src = {proyects.weather}/></a>
                </div>
                <div id="popup4" class="overlay">
                    <div class="popup">
                        <h2>Here i am</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                        <a href=" https://mata-kalbert.github.io/">FRONT END PROJECTS</a><br></br>
                        <a href="https://mata-kalbert.github.io/weatherApp/index.html">WHEATHER APP</a><br></br>
                        <a href="https://github.com/Mata-Kalbert/Mata-Kalbert.github.io">ACCESS CODE GITHUB</a>

		                </div>
                    </div>
                </div>
            </div>
           </div>
        );

    }
}

export default Projects;







/*import React from 'react';
import './proyects.css';


const proyects = {
    title: 'Proyects',
    userUx: '../ux.png',
    cssZen: '../zen.png',
    weather: '../weather.png',
    books: '../books.png',
    titleUx: 'UX development project',
    titleCss: 'Zen garden redo-proyect',
    titleJs: 'Javascript an XML',
    tittleFront: 'Front end development process'
}

class Proyects extends React.Component {
    render() {
        return (
           <div className="Proyects">
        
                <h1>{proyects.title} </h1>
            
            <div className="user-container">
                <div>
                    <h2>{proyects.titleUx} </h2>
                    <a href="../Specification.pdf"> <img src = {proyects.userUx}/></a>
                </div>
                <div>
                    <h2>{proyects.titleCss} </h2>
                  <a href="https://mata-kalbert.github.io/zen-garden/"><img src = {proyects.cssZen}/></a>
                </div>
                <div>
                    <h2>{proyects.titleJs} </h2>
                    <a href="https://mata-kalbert.github.io/form-validation/"><img src = {proyects.books}/></a> 
                </div>
                <div>
                    <h2>{proyects.tittleFront} </h2>
                   <a href="https://mata-kalbert.github.io/weatherApp/index.html"> <img src = {proyects.weather}/></a>
                </div>
            </div>
           </div>
        );

    }
}

export default Proyects;*/
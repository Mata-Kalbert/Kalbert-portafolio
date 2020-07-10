import React from 'react'
import './contact.css'

const contact = {
    gitApp: '../git.png',
    linkinApp: '../linkin.png',
    email: 'mat17031@byui.edu'
    
}

class Contact extends React.Component {
    render() {
        return (
            
        <div className="contact">
            <h1>Contact </h1>
            <div className="div-container">
                <div className="link">
                    <a href='mailto: mat17031@byui.edu'>{contact.email}</a><br/>
                </div>
                <div className="linktwo">
                    <a href="../KalbertMata.pdf">Resume</a>
                </div>
                <div className="img-container">
                    <a href="https://github.com/Mata-Kalbert?tab=repositories"><img src={contact.gitApp}></img></a>
                    <a href="https://www.linkedin.com/in/kalbert-mata/"><img src= {contact.linkinApp}></img></a> 
                </div>
            </div>
        </div>

        );
    }
}

export default Contact
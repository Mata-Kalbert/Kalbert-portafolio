import React from 'react';
import './about.css';

const about = {
    title: 'About',
    rowOne: 'A little bit about myself',
    rowTwo: 'Education',
    rowThree: 'tools',
    intro: 'I’m majoring in Web Development. I enjoy learning new things, that’s why I have chosen this field of study. It’s important to me to keep up with the latest technologies and trends. I enjoy working with others to collaborate an make sure we are meeting the needs of the client.',
    eduOne: 'Bachelor of Science in Web Design and Development',
    eduTwo: 'Associate of Apply Science in Applied Technology'
  };
const toolsOne = ['HTML5', 'CSS3', 'JavaScript', 'PHP'];
const toolsTwo = ['React', 'Pyton', 'SQL', 'MySQL'];
const toolsThree = ['PlSQL', 'JSON', 'API', 'UX'];

class About extends React.Component {
    render() {
        const fisrt = toolsOne.map(one => {
            return (
              <li href={'/' + one}>
                {one}
              </li>
            )
          });
          const second = toolsTwo.map(two => {
            return (
              <li href={'/' + two}>
                {two}
              </li>
            )
          });
          const third = toolsThree.map(three => {
            return (
              
              <li href={'/' + three}>
                {three}
              </li>
            )
          });
        return (
           <div className="about">
                <h1>{about.title}</h1>
                <hr></hr>
            <div className="intro">
                <h2>{about.rowOne} </h2>
                <p>{about.intro} </p>
               
            </div>
            <hr></hr>
            <div className="education"> 
                <h2>{about.rowTwo}</h2>
                <ul>
                    <li>{about.eduOne}</li><br/>
                    <li>{about.eduTwo}</li>
                </ul>
            </div>
            <hr></hr>
            <div className="tool">
                <h2>{about.rowThree}</h2>
                <ul>{fisrt}</ul>
                <ul>{second}</ul>
                <ul>{third}</ul>
            </div>
           </div>
          
        );

    }
}

export default About;
import React from 'react';
import './home.css';
import { url } from 'inspector';

const home = {

    imageSrc: url('./pictureFrame1.jpg'),
    name: 'Kalbert Mata',
    career: 'Web Developer'
}

class Home extends React.Component {
    render() {
        return (
        <div className="Business">
            <div className="image-container">
              <img src = "./pictureFrame.jpg" alt="Kalbert"/>
            </div>
            <h1>{home.name}</h1>
            <div className="Business-information">
              <div className="Business-address">
                <h2>{home.career}</h2>
              </div>
            </div>
          </div>
        );

    }
}

export default Home;
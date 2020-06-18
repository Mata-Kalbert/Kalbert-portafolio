import React from 'react';
import './home.css';
import Menu from '../Menu/menu'

const home = {
    imageSrc: "../pictureFrame.jpg",
    name: 'Kalbert Mata',
    career: 'Web Developer'
}

class Home extends React.Component {
    render() {
        return (
           <div className="Menu">
                <Menu />
           <div className="image-container">
              <img src = {home.imageSrc} />
           </div>
            <h1>{home.name}</h1>
              <div className="Business-address">
                <h2>{home.career}</h2>
              </div>
            </div>
        );

    }
}

export default Home;
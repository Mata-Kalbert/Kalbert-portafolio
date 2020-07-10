import React from 'react';
import './home.css';
import Navbar from '../Menu/useSticky'

const home = {
    imageSrc: "../pictureFrame.png",
    name: 'Kalbert Mata',
    career: 'Web Developer'
}

class Home extends React.Component {
    render() {
        return (
           <div className="Menu">
                <Navbar/>
                <div className="image-container">
                    <img src = {home.imageSrc} />
                </div>
            <h1>{home.name}</h1>
              <div className="Business-address">
                <h2>{home.career}</h2>
                <h3>A recent graduate with experience on many different web technologies and the drive to keep learning.</h3>
              </div>
            </div>
        );

    }
}

export default Home;
import React from 'react';
import './home.css';
import { url } from 'inspector';
const home = {

    image = './pictureFrame1.jpg',
    name = 'Kalbert Mata',
    career = 'Web Developer'
}

class Home extends React.Component {
    render() {
        return (
        <div className="Business">
            <div className="image-container">
              <img src = "./pictureFrame1.jpg" />
            </div>
            <h1>{Home.name}</h1>
            <div className="Business-information">
              <div className="Business-address">
                <h2>{Home.career}</h2>
              </div>
            </div>
          </div>
        );

    }
}

export default Home;
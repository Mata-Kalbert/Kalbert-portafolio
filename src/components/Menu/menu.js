/*import React from 'react';

import './menu.css';

const pages = ['home', 'projects', 'about', 'contact'];

class Menu extends React.Component {
  render() {
    
    const navLinks = pages.map(page => {
      return (
      
    
        <a id="navbar" href={'#' + page}>
          {page}
        </a>
        
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

export default Menu;


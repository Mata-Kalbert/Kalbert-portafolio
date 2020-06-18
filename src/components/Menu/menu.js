import React from 'react';
import './menu.css';

const pages = ['home', 'Projects', 'About'];



class Menu extends React.Component {
  render() {
    const navLinks = pages.map(page => {
      return (
        
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

export default Menu;


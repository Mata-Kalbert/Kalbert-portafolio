
import React,{useEffect} from 'react';
import './sticky.scss';




const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header  className={x.join(" ")}>
    

        <nav  className="navigation">
            <ul >
              <li><a href="#top">home</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
        </nav>

    </header>
  )
};

export default Navbar;


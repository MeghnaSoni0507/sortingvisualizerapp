import React,{useState, useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Frontend Developer</h3>
        <div className="header__bar__icons">
          {<a href="https://github.com/MeghnaSoni0507"><img src="https://img.icons8.com/ios/50/000000/github--v1.png" alt="image"/></a>}
          {<a href="https://www.linkedin.com/in/sonimeghna/" ><img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="image"/></a>}
        </div>
      </div>

      <div className="header-logo">SORTING<span> VISUALIZER</span></div>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}><span>G</span>et <span>I</span>n <span>T</span>ouch</h3>
      </div>
   </div>
  )
}

export default Header;
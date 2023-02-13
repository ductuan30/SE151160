import React from "react";
import h1 from './image/Ellipse.png';

class Header extends React.Component{
    render() {
        return(
            <div>
  <header>
    <span class="line1"></span>
    <span class="line2"></span>
    <span class="back">Back</span>
    <div class="name">
      <img src={h1} alt="" /><span class="req-field">*</span>
      <div>
        <span class="user">Pattie Trusdale</span><br />
        <span class="dev">Full-stack Developer</span>
      </div>
    </div>
    <button class="hire">HIRE</button>
  </header>                
            </div>
        );
    }
}

export default Header;
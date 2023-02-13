import React from "react";
import h1 from './image/Ellipse.png';
import h2 from './image/Vector.png';
import h3 from './image/Rectangle.png';
import h4 from './image/Vector.png';
import h5 from './image/image.png';
import h6 from './image/Vector.png';
import h7 from './image/features1.1.png';
import h8 from './image/features.png';
import h9 from './image/Rectangle 2.png';
import h10 from './image/Rectangle 2.1.png';
import h11 from './image/Rectangle 2(4).png';
import h12 from './image/Rectangle 2(5).png';
import h13 from './image/Rectangle 2(6).png';
import h14 from './image/Rectangle 2(3).png';
import h15 from './image/Rectangle 2(2).png';
import h16 from './image/Vector(3).png';
import h17 from './image/Vector(4).png';
import h18 from './image/Vector(6).png';
import h19 from './image/Vector(7).png';
import h20 from './image/Vector(1).png';
import h21 from './image/Vector(2).png';
class Body  extends React.Component{
    render() {
        return(
            <div>
                <div class="name1">
    <img src={h1} alt="" />
    <div>
      <span class="user">Pattie Trusdale</span>
      <span class="dev">Full-stack Developer</span>
    </div>
  </div>
  <section>
    <div class="main-title">
      Gembucket
      <a class="pen" href="#popup1">
        <img  src={h2} alt=""  />
      </a>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Project</h2>
          <div class="content">
            Name <span class="sign">&#42;</span> 
            <div>
              <div>
                <input class="textbox" type="text" value="Gembucket"></input>
              </div>
            </div>
            Keywords
            <div>
              <input class="textbox" type="text" value=""></input>
            </div>
          </div>
          <div class="category1">
            <span class="tag">#solar_breeze <a class="x" href="App.js">&times;</a></span>
            <span class="tag">#red_hold<a class="x" href="App.js">&times;</a></span>
            <span class="tag">#card_guard<a class="x" href="App.js">&times;</a></span>
            <span class="tag">#lotstring<a class="x" href="App.js">&times;</a></span>
            <span class="tag">#tough_joy_fax<a class="x" href="App.js">&times;</a></span>
            <span class="tag">#cardify<a class="x" href="App.js">&times;</a></span>
          </div>
          <div class="content">
            Summary <span class="sign">&#42;</span> 
            <div>
              <textarea class="textbox1" rows="4" cols="50">
      Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse.
                </textarea>
            </div>
          </div>
          <div class="content">
            Wedsites
            <div>
              <div>
                <span><input class="textbox2" type="text" value="https://gembucket.com"></input>
                </span>
                <select class="abc">
                  <option value="aa">Official site</option>
                </select>
                <span class="button">Remove</span>
                <p class="button1"> Add another website</p>
              </div>
            </div>
          </div>
          <div class="db-btn">
            <a class="close" href="App.js">Cancel</a>
            <a class="close1" href="App.js">Save</a>
          </div>
        </div>
      </div>
    </div>
    <div class="category">
      <span>#solar_breeze</span>
      <span>#red_hold</span>
      <span>#card_guard</span>
      <span>#lotstring</span>
      <span>#tough_joy_fax</span>
      <span>#cardify</span>
    </div>

    <p class="main-content">
      Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet
      at neque aenean auctor gravida sem praesent id massa id nisl venenatis
      lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis
      lectus suspendisse.
    </p>
    <p class="main-content">
      Official site:
      <span class="sign" ><a href="https://gembucket.com"> https://gembucket.com</a> </span>
    </p>
    <img src={h3} alt="" class="imagebody2" />
    <div class="description">
      <div class="title">
        Description
        <a class="pen" href="#popup2">
          <img src={h4} alt=""  />
        </a>
        <div id="popup2" class="overlay">
          <div class="popup">
            <h2>Description</h2>
            <div class="content">
              <img src={h5} alt="" class="imagebody4" />
            </div>
            <div class="textbox3">
              <ul>
                <li>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand
                  praesent blandit lacinia erat vestibulum sed.</li>
                <li>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>
                <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
              </ul>
            </div>
            <div class="db-btn">
              <a class="close" href="App.js">Cancel</a>
              <a class="close1" href="App.js">Save</a>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem
          integer tincidunt ante vel nasand praesent blandit lacinia erat
          vestibulum sed.
        </li>
        <li>
          Augue vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere.
        </li>
        <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
      </ul>
    </div>
    <div class="features">
      <div class="title">
        Features
        <a class="pen" href="#popup3">
          <img src={h6} alt=""  />
        </a>
        <div id="popup3" class="overlay">
          <div class="roll">
              <h2> Features</h2>
              <img src={h7} alt=""  class="imagebody1" />
              <div class="content-w">
                <p>Title<span class="sign">&#42;</span></p>
                <input type="text" id="fname" name="fname" value="Getting stakeholder" />
                <p>Summary<span class="sign">&#42;</span></p>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
     Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.</textarea>
              </div>
              <img src={h8} alt="" class="imagebody1" />
              <div class="content-w">
                <p>Title<span class="sign">&#42;</span></p>
                <input type="text" id="fname" name="fname" value="User interaction" />
                <p>Summary<span class="sign">&#42;</span></p>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
     Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.</textarea>
              </div>
              <p class="button1"> Add another website</p>
              <div class="db-btn1">
                <a class="close" href="App.js">Cancel</a>
              <a class="close1" href="App.js">Save</a>
              </div>
          </div>

        </div>
      </div>
      <div class="features-card">
        <div class="features-content1">
          <p>User research</p>
        </div>
        <img src={h9} alt=""  />
        <div class="features-content">
          <p>User research</p>
          <p>
            Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus
            aliquam sit amet aliquam dieam earn magna bibendum imperdiet
            nullam orci pede.
          </p>
        </div>
      </div>
      <div class="features-card end">
        <div class="features-content1">
          <p>Getting stakeholder</p>
        </div>
        <img src={h10} alt=""  />
        <div class="features-content">
          <p class="p1">Getting stakeholder</p>
          <p class="p2">
            Ipsum ac tellus semper interdum mauris libero ullamcorper purus
            sit amet nulla quisque arcu libero rustrum sempereed ac lobortis
            vel dapibus at.
          </p>
        </div>
      </div>
      <div class="features-card">
        <div class="features-content1">
          <p>User interaction</p>
        </div>
        <img src={h11} alt=""  />
        <div class="features-content">
          <p>User interaction</p>
          <p>
            Sollicitudin vitae consectetuer eget rutrum at lorem integer
            tincidunt anteca veal ipsum praesent blandit lacinia erat
            vestibulum sed at magna.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="title">Team-members</div>
      <div class="team">
        <div class="team-card">
          <img src={h12} alt="" />
          <span class="team-card1">Antons Playden</span>
          <span class="team-card2">Dental Hygienist</span>
        </div>
        <div class="team-card">
          <img src={h13} alt="" />
          <span class="team-card1">Lowe Coronas</span>
          <span class="team-card2">Financial Analyst</span>
        </div>
      </div>
      <div class="team">
        <div class="team-card">
          <img src={h14} alt="" />
          <span class="team-card1">Galvan Bonifas</span>
          <span class="team-card2">Media Manager</span>
        </div>
        <div class="team-card">
          <img src={h15} alt="" />
          <span class="team-card1">Galvan Bonifas</span>
          <span class="team-card2">Media Manager</span>
        </div>
      </div>
    </div>
    <div>
      <div class="title">Want to know more, contact me!</div>
      <div class="concact">
        <div class="concact1">
          <div class="concact-info">
            <img src={h16} alt="" />
            <span>pattietrusdale@gmail.com</span>
          </div>
          <div class="concact-info">
            <img src={h17} alt="" />
            <span>+8421 223 2234</span>
          </div>
          <div class="concact-info">
            <img src={h18} alt="" />
            <span>34 Milwaukee Avenue</span>
          </div>
        </div>
        <div class="imagebody3">
          <div class="concact-link">
            <img src={h19} alt="" />
            <span>github.com/pattietrusdale</span>
          </div>
          <div class="concact-link">
            <div class="imagebody5">
                <img src={h20} alt="" />
            <span>linkedin.com/in/pattie-trusdale-34...</span></div>
          </div>
          <div class="concact-link">
            <img src={h21} alt="" />
            <span>facebook.com/pattie.trusdale</span>
          </div>
        </div>
      </div>
    </div>
  </section>              
            </div>
        );
    }
}

export default Body;
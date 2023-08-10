import React, { Component } from "react";
import NavigationBar from "./Navbar";
import Contact from "./contact";
import Aboutcarousel from "./aboutcarousel";

export default class About extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div id='about1'>
        </div>
        <span id='about2'>We help you accomplish it all, <span id='about3'>thru</span> design</span>
        <span id='abouthash'>#makeithappenthroughdesign</span>
        <span id='vision'>Thru Vision</span>
        <div id='visiondiv'></div>
        <span id='thrutext'>Bringing design to the centre of all realms</span>
        <img id='aboutimg' src={require("./aboutimg2.png")}/>
        <span id='aboutdimple'>About Dimple Motwani</span>
        <img id='aboutdimpsimg' src={require("./dimps5.png")}/>
        <span id='notehome'>Dimple has always been passionate to learn and gain knowledge in every way possible. With a qualified background in Product Design and Research, she embarks on a journey to bring forth Thru Designs, a collaborative space that unlocks the potential of design and research in all realms of life. Throughout her professional journey, she has honed her skills and gathered experiences from diverse corners of the design world, all of which have played a pivotal role in shaping Thru Designs.<br/> <br/>

Dimple firmly believes in growth and is keen to expand Thru by endlessly inspiring change and serving innovative stories to the users and their businesses. She holds a joyful and down-to-earth personality, ensuring to make the journey playful and memorable for surroundings.</span>
        
        <span id='looking'>Looking for a speaker?</span>
        <span id='lookingtext'>Dimple is keen to publicly speak about design and research and make aware of their abilities to transform the reality. She speaks about.... </span>
        <div id='aboutcar'>
          <Aboutcarousel/>
        </div>
      </div>
    );
  }
}

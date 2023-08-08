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
        <img id='aboutimg' className='border border-warning' src={require("./aboutimg2.png")}/>
        <span id='aboutdimple'>About Dimple Motwani</span>
        <img id='aboutdimpsimg' src={require("./dimps4.png")}/>
        <div id='aboutdimpsdiv'></div>
        <span id='abouttext'>The project aimed at providing convenience and emotional comfort to homemakers by personalising the kitchen experience and reducing their daily workload. The project aimed at providing convenience and emotional comfort to homemakers by personalising the kitchen experience and reducing their daily workload. The project aimed at providing convenience and emotional comfort.</span>
        <span id='looking'>Looking for a speaker?</span>
        <span id='lookingtext'>Dimple is keen to publicly speak about design and research and make aware of their abilities to transform the reality. She speaks about.... </span>
        <div id='aboutcar'>
          <Aboutcarousel/>
        </div>
      </div>
    );
  }
}

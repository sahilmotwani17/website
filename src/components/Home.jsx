import React, { Component } from 'react'
import NavigationBar from './Navbar';
import Navbar from './Navebar2';
import Banner from './banner';
// import Intro from './intro';
import Contact from './contact';
import Services from './services';
import { useEffect } from 'react';
import Dpbanner from './dpbanner';
import {Link}  from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div id='homediv'>
    <NavigationBar />
        <span id='hello'>Hello!</span>
          <span id='text'>
          At thru designs, you get to live your stories while we deliver you experiences, through design.<br/><br/>
          #makeithappenthroughdesign</span>

          <Link id='know' className="btn btn-outline-warning" to="/about">Know more about me</Link>
          <div id='homedpbanner'>

      <Dpbanner/>
          </div>
      <Services />
      <div id='work'>
      </div>
        <span id='fwtext'>Featured Work</span>
        <img id='fwimg' className='border border-warning' src={require("./port4.png")}/>
        <span id='pktext'>Play Kitchen</span>
        <span id='pktext2'>Research & Development | Space Design</span>
        <span id='pktext3'>The project aimed at providing convenience and emotional comfort to homemakers by personalising the kitchen experience and reducing their daily workload.</span>
      <span id='mtext'>Note from Founder</span>
      <div id='messagediv'></div>
        {/* <div id='chdiv'>
      <Contact/>
      </div> */}
       <img id='dimpspic' className='border border-warning' src={require("./dimps4.png")}/>
       <Link id='viewser' className="btn btn-outline-warning" to="/spage">View all services</Link>
      </div>
    )
  }
}

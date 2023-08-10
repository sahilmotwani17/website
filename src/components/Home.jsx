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

          <Link id='know' className="btn btn-outline-warning" to="/about">Know more about us</Link>
          <div id='homedpbanner'>

      <Dpbanner/>
          </div>
      <Services />
      <div id='work'>
      </div>
        <span id='fwtext'>Featured Work</span>
        <Link id='fwbutton' className="btn btn-outline-warning" to="/portfolio">View all work</Link>
        <img id='fwimg' className='border border-warning' src={require("./port4.png")}/>
        <span id='pktext'>Play Kitchen</span>
        <span id='pktext2'>Research & Development | Space Design</span>
        <span id='pktext3'>The project aimed at providing convenience and emotional comfort to homemakers by personalising the kitchen experience and reducing their daily workload.</span>
      <span id='mtext'>Note from Founder</span>

      <div id='messagediv'></div>
      <span id='messagetexttt'>Hello and welcome! I am thrilled to have you explore our digital realm, where we collaboratively create memories through innovation. Thru is born out of the intent to advertise the abilities of design and research in all realms of life. I believe design is a story that comforts its users - functionally as well as emotionally. And a research-centric approach to design ensures new, personalised experiences to each user. <br/><br/>

At Thru, we thrive to deliver not only ideas for your businesses but also the experiences that remain with you. We act more than just designers; we are story tellers and dream weavers, committed to transform your vision to reality in the most exclusive way possible. Along our way to innovate your success stories, we aspire to inspire you and make realize the profound nature of design to collaborate and transform the reality as it is today.<br/><br/>

As you navigate through our website, I encourage you to explore our portfolio, read about our design philosophy, and discover the range of services we offer. Feel free to reach out if you have any questions, ideas, or if you're ready to embark on a design journey that will exceed your expectations.
Thank you for considering Thru Designs as your creative partner. We can't wait to collaborate with you and innovate your success stories.
<br/><br/>
Here's to boundless creativity and inspiring designs!</span>

      
        {/* <div id='chdiv'>
      <Contact/>
      </div> */}
       <img id='dimpspic' className='border border-warning' src={require("./dimps4.png")}/>
       <Link id="viewser" className="btn btn-outline-warning" to="/spage#stext1">
          View all services
        </Link>

      </div>
    )
  }
}

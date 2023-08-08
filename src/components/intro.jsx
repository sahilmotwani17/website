import React, { Component } from 'react'
import {Link}  from "react-router-dom";
export default class Intro extends Component {
  render() {
    return (
      <div id='introdiv'>
        {/* <img id='dimg' className='border border-warning' src={require("./hi.png")}/> */}
        <div>
          <span id='hello'>Hello!</span>
          <span id='text'>
          At thru designs, you get to live your stories while we deliver you experiences, through design.<br/><br/>
          #makeithappenthroughdesign</span>

          <Link id='know' className="btn btn-outline-warning" to="/about">Know more about me</Link>
        </div>
      </div>
    )
  }
}

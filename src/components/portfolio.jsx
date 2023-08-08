import React, { Component } from 'react';
import NavigationBar from './Navbar';
import Contact from './contact';
import { Link } from 'react-router-dom';
export default class Portfolio extends Component {

    render() {
        return (
            <div>
        <NavigationBar />
        <span id='ptext'>Portfolio</span>
        <Link to ='/orgo'>
        <span id='pt1'>Travel Gadget</span>
        <span id='pt2'>Industrial Design</span>
        <span id='pt3'>ORGO</span>
<img id='port1' src={require("./port1.png")}/>
        </Link>
        <Link to='/cooler'>

        <span id='pt4'>Consumer Electronics</span>
        <span id='pt5'>Research & Development | Industrial Design</span>
        <span id='pt6'>Cooler</span>
        <img id='port3' src={require("./port3.png")}/>
        </Link>
        <Link to='/expo'>
        <span id='pt7'>Exhibitions</span>
        <span id='pt8'>Service Design | User Experience Design | User Interface Design</span>
        <span id='pt9'>ExpoEezy</span>
        <img id='port5' src={require("./port5.png")}/>
        </Link>
        <Link to='/dnba'>

        <span id='pt10'>Art & Design</span>
        <span id='pt11'>Design Thinking</span>
        <span id='pt12'>"Do Not Be Afraid"</span>
        <img id='port7' src={require("./port7.png")}/>
        </Link>
        <Link to='/walker'>
        <span id='pt13'>Medical Product</span>
        <span id='pt14'>Research & Development</span>
        <span id='pt15'>Walker</span>
          <img id='port2' src={require("./port2.png")}/>
        </Link>
        <Link to ='/playkitchen'>

        <span id='pt16'>Kitchen</span>
        <span id='pt17'>Research & Development | Space Design</span>
        <span id='pt18'>Play Kitchen</span>
        <img id='port4' src={require("./port4.png")}/>
        </Link>
        <Link to='/kaatni'>

        <span id='pt19'>Agriculture</span>
        <span id='pt20'>Research & Development | Industrial Design</span>
        <span id='pt21'>Kaatni</span>
        <img id='port6' src={require("./port6.png")}/>
        </Link>
        <Link to='/bus'>

        <span id='pt22'>Urbanization</span>
        <span id='pt23'>Design For Future</span>
        <span id='pt24'>Bus Station</span>
        <img id='port8' src={require("./port8.png")}/>
        </Link>

        <div id='pc'>

        <Contact />
        </div>
      </div>
      




    ) 
  }
}

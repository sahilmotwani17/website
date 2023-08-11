import React, { Component } from 'react'
import Contact from './contact';
import NavigationBar from './Navbar';
import './orgo.css';

export default class Orgo extends Component {
  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="button-container1">
          {/* Scrolling buttons */}
          <button className="scroll-button1" onClick={() => this.scrollToSection('orgob1')}>
            Challenge <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('orgob2')}>
            Design Brief <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('orgob3')}>
            Conceptualization <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('orgob4')}>
            Proposed Solution <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
        </div>
        <section id='orgob1'>
        </section>
        <section id='orgob2'>
        </section>
        <section id='orgob3'>
        </section>
        <section id='orgob4'>
        </section>
        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>ORGO</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'>Travel Lifestyle</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Industrial Design</span>
        <img id='oorgo' src={require("./orgoo1.png")}/>
        <span id='p1'>Challenge</span>
        <p id='p2'>Travel has become a part of our personal and work routines, and a backpack is one of the common travel essentials that all of us need to carry our personal items, especially the electronic gadgets.

        With the growing work-from-home trend, all of us own at least 3 or more electronic gadgets and carrying them with the respective chargers in a backpack is a trouble in itself. Other belongings like specs, keys, earphones, etc. adds to the congestability in the backpacks.</p>
        <img id='orgo1' src={require("./orgo1.png")}/>
    
        <img id='orgo2' src={require("./orgo2.png")}/>
        <span id='p3'>Design Brief</span>
        <p id='p4'>To design a modular device that replaces the congestability in travel backpacks and keep the electronic gadgets organized throughout the time. 

        This is for anyone who travels frequently and requires basic necessities while out of home.</p>
        <span id='p5'>Conceptualisation</span>
        <img id='orgo3' src={require("./orgo3.png")}/>
        <img id='orgo4' src={require("./orgo4.png")}/>
        <span id='p6'>Proposed Solution</span>
        <span id='proposedtext'>The proposed solution is a modular device that allows the traveller to place their electronic gadgets in it without any congestability. ORGO offers a detachable power bank that charges your gadgets while they are placed in it. It eliminates the chargers and other frequently-used wires from the travel list, thus providing the travellers with an easy way to carry the gadgets.</span>
        <img id='orgo5' src={require("./orgo5.png")}/>
        <img id='orgo6' src={require("./orgo6.png")}/>
        <img id='orgo7' src={require("./orgo7.png")}/>
        <img id='orgo8' src={require("./orgo8.png")}/>
        <img id='orgo9' src={require("./orgo9.png")}/>
        <div id='ocontact'>
          <Contact />
        </div>

      </div> 
      


    )
  }
}

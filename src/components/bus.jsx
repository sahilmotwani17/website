import React, { Component } from 'react'
import Contact from './contact'; 
import NavigationBar from './Navbar';
import './bus.css';

export default class Bus extends Component {
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
          <button className="scroll-button1" onClick={() => this.scrollToSection('busb1')}>
            Mumbai Transport System <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('busb2')}>
            Problem Statement <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('busb3')}>
            Design Brief <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('busb4')}>
            Inspiration <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('busb5')}>
            Conceptualiation <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('busb6')}>
            Proposed Solution <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <section id='busb1'>
        </section>
          <section id='busb2'>
        </section>
          <section id='busb3'>
        </section>
          <section id='busb4'>
        </section>
          <section id='busb5'>
        </section>
          <section id='busb6'>
        </section>
        </div>
        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>Bus Station</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'>Urbanization</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Design for Future</span>
        <img id='bbus' src={require("./bbus.png")}/>
        <span id='p90'>Mumbai Transport System</span>
        <p id='p91'>Mumbai is said to have the largest bus transport system among the other major cities in India. The vast network links every nook and corner of the city. With the traffic like there is, the local transport system in the city is the most time-saving and economic option for its citizens. 

Each bus is given a number, which is allotted its own route. People take the help of many apps available to decide which route and time is the most suitable for them.</p>
        <span id='p92'>Problem Statement</span>
        <p id='p93'>The existing local transport system in Mumbai has become extremely chaotic, and has led to uncontrolled agitation in public. It provides no convenience.

Despite the availability of travel apps like m-indicator and google maps, the public waiting for their buses at bus stations is still entirely clueless about the status of buses that are supposed to arrive at the stop. They have no idea about which bus is going to arrive next.

Besides, the restlessness among them when the bus arrives has resulted in numerous injuries.</p>

        <span id='p94'>Design Brief</span>
        <p id='p95'>The project aimed to ease the bus transport system in Mumbai for its citizens to incorporate discipline and provide efficiency and convenience in bus stations. The challenge was to use Indian culture and traditional elements while modernizing the space.</p>
        <span id='p96'>Inspiration</span>
        <img id='bus1' src={require("./bus1.png")}/>
        <p id='p97'>Inspiration was taken from traditional patterns. The most common element that linked the Indian culture with the modern times was a hexagonal pattern. </p>
        <span id='p98'>Conceptualization</span>
        <img id='bus2' src={require("./bus2.png")}/>
        <span id='p99'>Proposed Solution</span>
        <span id='p100'>Space design:</span>
        <p id='p101'>The space at each bus station is divided into the number of coloured light-pillars equal to the number of buses that stop at the station. Each bus that arrives at respective stops, has been indicated by a colour, that matches the colour of the pillars. This way, buses will only arrive at their respec- tive pillars, so that even if there are 2-3 buses arriving at the same time, the space is still decent and disci- plined enough. This also helps users to identify which buses are going to arrive at each stop.</p>
        <img id='bus3' src={require("./bus3.png")}/>
        <span id='p102'>Pillar design:</span>
        <p id='p103'>Each pillar also has a route of the bus (in a linear pattern) that it is indicated for, repre- sented by a set of markings. These mark- ings have a motion incorporated in them, indicating where the respective bus is right now, and how long will it take to reach the bus stop. This way, users don’t remain clueless about when their bus is going to arrive.</p>
        <img id='bus4' src={require("./bus4.png")}/>

      <div id='buscontact'>
        <Contact />
      </div>
      </div>
    )
  }
}

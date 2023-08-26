import React, { Component } from 'react'
import Contact from './contact';
import NavigationBar from './Navbar';
import './kaatni.css';
import Pkcarousel from './pkcarousel';
import ContactForm from './ContactForm';


export default class Kaatni extends Component {
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
          <NavigationBar/>
          <div className="button-container1">
          {/* Scrolling buttons */}
          <button className="scroll-button1" onClick={() => this.scrollToSection('kaatnib1')}>
            Sickle <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('kaatnib2')}>
            Primary Research <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('kaatnib3')}>
            Insights <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('kaatnib4')}>
            Conceptualization <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('kaatnib5')}>
            Proposed Solution <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          
        </div>
        <section id='kaatnib1'>
        </section>
        <section id='kaatnib2'>
        </section>
        <section id='kaatnib3'>
        </section>
        <section id='kaatnib4'>
        </section>
        <section id='kaatnib5'>
        </section>


        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>Kaatni</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'>Agriculture</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Research & Development</span>
        <img id='kkatni' src={require("./kkatni.png")}/>
        <span id='p53'>Sickle</span>
        <p id='p54'>There are a hundreds of tools and machinery that farmers in India commonly use for multiple purposes like soil preparation, sowing, manuring, harvesting, irrigation, weeding and many more. However, the most common tool that every farmer prefers to use is a sickle. It is the most economic option for farmers in the market so far. 

Sickle is one of the most ancient hand tools used for harvesting crops or cutting of grass. It has a circular metallic blade to help gather maximum quantity of grass in one-go. The blade is attached to a small wooden handle.</p>
        

<img id='kaatni1' src={require("./kaatni1.png")}/>
            <span id='p55'>Primary Research</span>
            <p id='p56'>To thoroughly understand the usage and functionality of each tool used by farmers and the health hazards associated with them.</p>
            <img id='kaatni2' src={require("./kaatni2.png")}/>
            <img id='kaatni3' src={require("./kaatni3.png")}/>
            <span id='p57'>The sickle problem</span>
            <img id='kaatni4' src={require("./kaatni4.png")}/>
            <span id='p58'>Duck-walk:</span>
            <p id='p59'>The short handle of sickle forces the farmer to use the tool in a stooped or squatting position.</p>
            <img id='kaatni5' src={require("./kaatni5.png")}/>
            <span id='p60'>Lower back pain:</span>
            <p id='p61'>Duck-walking in squat position causes long-term lower back pain among farmers.</p>
            <img id='kaatni6' src={require("./kaatni6.png")}/>
            <span id='p62'>Wrist & elbow pain:</span>
            <p id='p63'>The continuous hand movement required to cut the grass causes while applying enough force causes extreme wrist and elbow pain.</p>
            <img id='kaatni7' src={require("./kaatni7.png")}/>
            <span id='p64'>Body injuries:</span>
            <p id='p65'>The squat position and the hand movement also causes injuries to the body.</p>
            <span id='p66'>Insights</span>
            {/* carousel */}
            <p id='p67'>The project aimed to re-design a sickle that reduces farmers’ workload and increases their productivity, while keeping it economically affordable.</p>
            <span id='p68'>Conceptualisation</span>
            <img id='kaatni8' src={require("./kaatni8.png")}/>
            <span id='p69'>Proposed Solution</span>
            <img id='kaatni9' src={require("./kaatni9.png")}/>
            <span id='p70'>What does the solution do?</span>
            <p id='p71'>The big handle in Kaatni helps farmers to avoid duck-walk or other uncomfortable positions during harvesting, hence solves the problem of severe back pain among farmers. 

The mechanism allows farmers to harvest while standing/walking through the switch provided in the handle. This also eliminates the swing and pull action that the current sickles force. </p>

            <span id='p72'>Prototype</span>
            <img id='kaatni10' src={require("./kaatni10.png")}/>
            <img id='kaatni11' src={require("./kaatni11.png")}/>
            <img id='kaatni12' src={require("./kaatni12.png")}/>
            <span id='p73'>Work study</span>
            <p id='p74'>It was found that farmers prioritize their time more than the efficiency that the tools or machinery allow. A work study was conducted to compare the time taken to cut a bunch of grass by the current sickle and the proposed solution.</p>
            <span id='p75'>1. Existing sickle</span>
            <p id='p76'>The current sickle was able to make 6 swings in 30 seconds.</p>
            <div id='kbox1'></div>
            <span id='ktext1'>30 seconds = 6 swings</span>
            <div id='kbox2'></div>
            <span id='ktext2'>30 seconds = 18 swings</span>
            <span id='p77'>2. Kaatni</span>
            <p id='p78'>Kaatni was able to make 18 swings in 30 seconds.  </p>
            <div id='kbox'></div>
            <div id='kaatnicar'>
              <Pkcarousel />
            </div>

        <div id='kcontact'>
          <ContactForm />
        </div>
        </div>
    )
  }
}

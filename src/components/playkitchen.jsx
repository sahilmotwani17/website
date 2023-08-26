import React, { Component } from 'react';
import NavigationBar from './Navbar';
import Contact from './contact';
import './playkitchen.css';
import ContactForm from './ContactForm';


export default class Playkitchen extends Component {
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
          <button className="scroll-button1" onClick={() => this.scrollToSection('playkb1')}>
            Significance of Kitchens in India <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('playkb2')}>
            Research Gaps <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('playkb3')}>
            Project Brief <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('playkb4')}>
            View Full Book <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
        </div>
        <section id='playkb1'>
        </section>
        <section id='playkb2'>
        </section>
        <section id='playkb3'>
        </section>
        <section id='playkb4'>
        </section>
        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>Play Kitchen</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'>Kitchen</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Research & Development | Space Design</span>
        <img id='pplay' src={require("./pplay.png")}/>
        <span id='p142'>Significance of Kitchens in India</span>
        <p id='p143'>Kitchens in India hold an immense cultural and religious significance and have always been treated as the second temple by the women of the house. This is why history makes it evident that women of those days never entered kitchen before taking baths. They were considered the auspicious spaces as women spent most of their time in kitchens. Kitchens have evolved from being the spaces of production to the spaces of consumption. They were earlier the spaces for behind-the-scenes processes as homemakers were shy to show off their messy kitchens. Today, they are preferred to be open as homemakers wish to become a part of the family activities while they are cooking. As homemakers are becoming more independent and industrious in today’s date, they are demanding for more easier and quicker way of cooking. Modular kitchens answer this requirement with their increased storage utility, convenience and efficiency.</p>
        <img id='play1' src={require("./play1.png")}/>
        <span id='p144'> Research Gaps</span>

        <p id='p145'>40.5% of homemakers spend about 6 hours of their day in kitchens, which makes it almost half of their time of the day serving their families and thriving to achieve a healthier lifestyle for them. The rest of their time goes in doing other household chores like washing and iron- ing clothes, cleaning house, etc. The extreme exertion that goes into their daily lifestyle has also caused several health issues among homemakers. Yet, there is near to no literature that explores the emotional experience of homemakers or the amount of exertion they have to go through while cooking.</p>
        <img id='play2' src={require("./play2.png")}/>
        <p id='p146'>All the literature existing online speaks about the current market and technological trends that has been or can be integrated in kitchens to simplify the process of cooking or other activities performed in kitchen. It solely focuses on providing technologically trending and efficient kitchen spaces and appliances. Although innovations like modular kitchens or smart appliances are catering to the specific needs of homemakers, there is no contribution towards making them feel comfortable around the space, both emotionally as well as physically. Additionally, the space design and the arrangement of cabinets in existing kitchens has caused extreme health issues among homemakers.There is a lack of convenience in these spaces, which eventually leads to exhaustion and frustration among homemakers.</p>
        <img id='play3' src={require("./play3.png")}/>
        <span id='p147'>Project Brief</span>

        <p id='p148'>This project aims to provide convenience and emotional comfort among homemakers by reducing their workload that would eliminate the feelings of frustration and exhaustion, while also keeping in mind the technology and market trends. The intent behind the project is to keep the target users motivated to cook by personalising the kitchen experience for each homemaker.
        </p>
        <div id='playcontact'>
          <ContactForm/>
        </div>

      </div>
    )
  }
}

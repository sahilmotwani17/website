import React, { Component } from 'react'
import Contact from './contact';
import NavigationBar from './Navbar';
import './cooler.css';
import ContactForm from './ContactForm';


export default class Cooler extends Component {
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
          <button className="scroll-button1" onClick={() => this.scrollToSection('coolerb1')}>
            Symphony <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('coolerb2')}>
            Benefits of Air Coolers over Air Conditioners <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('coolerb3')}>
            Existing Technology used in Air Coolers <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('coolerb4')}>
            Problem Statement <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('coolerb5')}>
            Re-designed Technology <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('coolerb6')}>
            Conceptualization <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('coolerb7')}>
            Proposed Solution <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
        </div>
        <section id='coolerb1'>
        </section>
        <section id='coolerb2'>
        </section>
        <section id='coolerb3'>
        </section>
        <section id='coolerb4'>
        </section>
        <section id='coolerb5'>
        </section>
        <section id='coolerb6'>
        </section>
        <section id='coolerb7'>
        </section>
        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>Cooler</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'>Consumer Electronics</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Research & Development | Industrial Design</span>
        <img id='ccooler' src={require("./ccooler.png")} />
        {/* <img id='ccooler' src={require("./ccooler.png")}/> */}
        <span id='p33'>Symphony</span>
        <p id='p34'>Symphony is a Multi-National Company and is the world’s largest manufacturer of air coolers. It has constantly been on the forefront of innovation since its inception and targets homes, workplaces, industrial plants and factories across the globe.</p>
    
        <span id='p35'>Benefits of Air Coolers over Air Conditioners</span>
        <span id='p21'>1. Air quality</span>
        <p id='p36'> 
        Air coolers pull fresh air from outside to cool down the temperature. While Air conditioners constantly 
circulates the air of room 
        </p>
        <span id='p37'>2. Eco-friendly route</span>
        <p id='p38'>Air coolers are natural. They use water as refrigerant to cool the room, while Air conditioners use Chlorofluorocarbons (CFs) and Hydrofluorocarbons (HFCs) as refrigerants, which eventually harm the environment. </p>
        <span id='p39'>3. Portability</span>
        <p id='p40'>Air coolers require no installation. They can be moved anywhere based on space availability and convenience. Air conditioners once installed, cannot be moved. Moreover, they need additional arrangements to be installed. </p>
        <span id='p41'>4. Consumption</span>
        <p id='p42'>Air coolers use very little electricity to function. Air conditioners use consume relatively more electricity. </p>

        <span id='p43'>Existing Technology in Air Coolers</span>
        <img id='cooler1' src={require("./cooler1.png")}/>
        <p id='p44'>The process of Evaporation of water is the key to how air coolers work. 

As the cooler turns on, the water pump passes water towards cooling pads (Honeycomb pads), thereby soaking the pads. The warm air that is absorbed by the cooler is passed through the soaked pads, which turn the air cold. As a result, the mixture of cooled down air and soaked water is blown out of the cooler with the help of fan. 

This mixture of air in water molecules causes humidity in the room, eventually leading to health issues. </p>

        <span id='p45'>Why are honeycomb pads used as cooling media?</span>
        <p id='p46'>The cooling efficiency of honeycomb cooling media is much higher than any other cooling media due to the greater surface area for transfer of humidity to the passing air.</p>
        <span id='p47'>Problem Statement</span>
        <p id='p48'>The humid air pumped out of the cooler results in the damage of health of the users as well as the surrounding materials, with the advancement of molds, mildews and dust mites in the space.

Thus, this project aimed to replace the humidity pumped out of coolers with healthy and
higher range of cooling.</p>
        <span id='p49'>Re-designed Technology</span>
        <img id='cooler2' src={require("./cooler2.png")}/>
        <img id='cooler3' src={require("./cooler3.png")}/>
        <p id='p50'>With the redefined technology, the humid air in the room is pulled back to the cooler. It first passes through the thermoelectric module, a chip which is used to convert hot air into cold air. This cold air then passes through the dehumidifier, which separates water molecules from air molecules. Water molecules are thereby transported to the water tank, thus, reducing the amount of water intake, and the air molecules are blown out in the room.</p>
        <span id='p51'>Conceptualisation</span>
        <img id='cooler4' src={require("./cooler4.png")}/>
        <span id='p52'>Proposed Solution</span>
        <img id='cooler5' src={require("./cooler5.png")}/>
        <img id='cooler6' src={require("./cooler6.png")}/>
        <img id='cooler7' src={require("./cooler7.png")}/>
        <img id='cooler8' src={require("./cooler8.png")}/>
        <div id='ccontact'>
          <ContactForm />
        </div>

      </div> 
      


    )
  }
}

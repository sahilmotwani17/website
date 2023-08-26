import React, { Component } from 'react'
import Contact from './contact';
import NavigationBar from './Navbar';
import './Dnba.css';
import ContactForm from './ContactForm';


  export default class Dnba extends Component {
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
        <div className="button-container">
          {/* Scrolling buttons */}
          <button className="scroll-button" onClick={() => this.scrollToSection('design-brief')}>
            Design Brief <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button" onClick={() => this.scrollToSection('arts-crafts')}>
            Arts & Crafts Movement <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button" onClick={() => this.scrollToSection('bauhaus')}>
            Bauhaus Movement <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button" onClick={() => this.scrollToSection('dont-be-afraid-arts-crafts')}>
            “Do Not Be Afraid” from Arts & Crafts <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button" onClick={() => this.scrollToSection('conceptualization')}>
            Conceptualization <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button" onClick={() => this.scrollToSection('dont-be-afraid-bauhaus')}>
            “Do Not Be Afraid” in Bauhaus <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
        </div>

        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>"Do Not Be Afraid"</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'> Art & Design</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Design Thinking</span>
        <img id='ddnba' src={require("./ddnba.png")}/>

        <section id='design-brief'>
        </section>
        <span id='p79'>Design Brief</span>
        <p id='p80'>The design challenge was to look back in history and understand the different art and design movements that have evolved throughout the years. A piece of stained glass that incorporated the style of Arts & Crafts movement was chosen to convert it into the style of Bauhaus movement.</p>
        

        <section id='arts-crafts'>
        </section>
        <span id='p81'>Arts & Crafts Movement</span>
        <p id='p82'>Arts & Crafts movement was established during the 1860s when an English reformer, poet and designer, William Morris noticed that the growing industrial revolution and mass-production has brought down the style, craftsmanship and decorative arts. It was seen that the manufactured goods had poor design and quality. And the lower class workers were brutalised in the mills and factories, and were forced to work. 

The primary goal was to create design that was for people, by people, and a source of pleasure to the worker as well.

Their style usually varied depending on the changing media and location, but most commonly was inspired from Medieval European, Islamic and Japanese sources, and nature, particularly the gothic style. Their forms were typically rectilinear and angular with stylised medieval and islamic design.</p>
<img id='dnba1' src={require("./dnba1.png")}/>
<img id='dnba2' src={require("./dnba2.png")}/>
<img id='dnba3' src={require("./dnba3.png")}/>

        <section id='bauhaus'>
        </section>
<span id='p83'>Bauhaus Movement</span>
<p id='p84'>Bauhaus was originated as a school of arts by Walter Gropius in 1919 when he realized the occurring of art’s loss of social relevance. The motif behind the school was to unite all the art branches under one roof, and re-unite fine art and functional design. 

The movement had a strong emphasis on the functionality of its designs. The style of Bauhaus is commonly characterized as a combination of the Arts and Crafts movement with modernism, that features very little ornamentation and created more balanced forms nd abstract geometric shapes. It used primary colours. The movement fused various aspects of art and design techniques.</p>
<img id='dnba4' src={require("./dnba4.png")}/>
<img id='dnba5' src={require("./dnba5.png")}/>
        <section id='dont-be-afraid-arts-crafts'> 
        </section>
<span id='p85'>"Do Not Be Afraid" from Arts & Crafts </span>
<p id='p86'>Do Not Be Afraid was a piece of stained glass designed by the Arts & Crafts movement as a religious window that was fit in a church. 

It depicted the story of how an angel lifts a person from a stormy sea and the Christ walking on the sea to calm the water and the fishermen.</p>
<img id='dnbalong1' src={require("./dnbalong1.png")}/>
<section id='conceptualization'>
</section>

<span id='p87'>Conceptualization</span>
<p id='p88'>All the emotions associated with this piece of glass were observed to convert this design by Arts & Crafts movement to the style of Bauhaus movement. Each of these emotions were then thoroughly visualised to make their best-suitable forms. </p>
<img id='dnba7' src={require("./dnba7.png")}/>
<section id='dont-be-afraid-bauhaus'>
</section>

<span id='p89'>"Do Not Be Afraid" in Bauhaus</span>
<img id='dnbalong2' src={require("./dnbalong2.png")}/>
<div id='dnbacontact'>

<ContactForm />
</div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Contact from './contact';
import NavigationBar from './Navbar';
import './walker.css';
import Pwcarousel from './pwcarousel';
import ContactForm from './ContactForm';

export default class Walker extends Component {
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
          <button className="scroll-button1" onClick={() => this.scrollToSection('walkerb1')}>
            Statistical Data <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('walkerb2')}>
            Psychological Impact of Walkers <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('walkerb3')}>
            What do practitioners have to say? <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('walkerb4')}>
            Insights <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('walkerb5')}>
            Future Scope of the Project <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
        </div>
        <section id='walkerb1'>
        </section>
        <section id='walkerb2'>
        </section>
        <section id='walkerb3'>
        </section>
        <section id='walkerb4'>
        </section>
        <section id='walkerb5'>
        </section>

    
        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>Walker</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'>Medical Product</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Research & Development</span>
        <img id='wwalker' src={require("./wwalker.png")}/>
        <span id='p7'>Statistical Data</span>
        <p id='p8'>Walking Disabilities, also referred to as the Gait Abnormalities are the abnormal, uncontrollable walking patterns caused by genetic inheritance, diseases, or injuries to lower body or brain.</p>
        <img id='walker1' src={require("./walker1.png")}/>
        <img id='walker2' src={require("./walker2.png")}/>
            <span id='p9'>By disability type:</span>
            <p id='p10'>Total Disabled Population in India was 2.21% (26.8 million) in 2011, out of which 7.9% had movement disability.</p>
            <div>
            <span id='p11'>By age & disability:</span>
            <p id='p12'>Movement disability was seen the most among people aged between 60 and 90 years.</p>

        </div>
        <span id='p13'>Psycological Impact of Walkers</span>
        <p id='p14'>Use of mobility aids is associated with feelings of sadness and depression, and state that they would rather be dead than to use a device. Many fear that they would be seen as ‘crippled’, ‘very sick’, ‘dying’, ‘an old lady’.</p>
        <div>
            <div id='p15-1'>
            </div>
                <p id='p15'>
                “On Sunday the children were going to the park, but just knowing that I had to use a walker, I said: ‘No, I will stay home. I will rather abstain from going places than use a walker.”
                </p>
                <div id='p17-1'></div>
        <span id='p16'>- Woman, User</span>
        </div>
        <div>
            <p id='p17'>“I'm sure the walker is good for you, and if I needed it tomorrow for my mobility, I would use it because I’m really in pain. But it’s like you are in the last stage. This is it. There’s no place else to go from here but 6-feet under.”</p>
            <span id='p18'>- Woman, Non-user</span>
        </div>
        <img id='walker3' src={require("./walker3.png")}/>
        <p id='p19'>The structure of the walker creates an image of it being bulky</p>
        <img id='walker4' src={require("./walker4.png")}/>
        <p id='p20'>The stigma is more in the minds of the user than in society. The society’s desire to help portrays the acceptance of disabled people.</p>

        <div>
            <span id='p22'>What do Practitioners have to say?</span>
            <div>
            <img id='walker5' src={require("./walker5.png")}/>
            <img id='walker6' src={require("./walker6.png")}/>
            <img id='walker7' src={require("./walker7.png")}/>
                <p id='p23'>The following observations are based on Shadowing (using a walker with only one leg on the ground for 1 and half day), 3 user interviews, 3 expert interviews including physiotherapists and general physician, 2 non-user interviews, and 1 focus group involving 3 non-users</p>
                <div>
                    <div>
                    <img id='walker8' src={require("./walker8.png")}/>
                        <p id='p24'>Users' lifestyle is completely changed. They cannot perform
daily activities since both the hands are busy holding the walker.</p>
                    </div>
                    <div>
                    <img id='walker9' src={require("./walker9.png")}/>
                        <p id='p25'>Though walker provides stability, users always prefer to use a cane over walker as it is heavy to carry around. They don't have energy to lift it after every step. This also causes wrist pain among the users.</p>
                    </div>
                    <div>
                    <img id='walker10' src={require("./walker10.png")}/>
                        <p id='p26'>The ineffectiveness of foldability feature in walker allows it to consume a lot of user's personal space</p>
                    </div>
                    <div>
                    <img id='walker11' src={require("./walker11.png")}/>
                        <p id='p27'>The rustiness of Aluminium material hinders the adjustability factor of walker, which limits its functionality of being adjusted to the environment, as and when required.</p>
                    </div>
                    <div>
                    <img id='walker12' src={require("./walker12.png")}/>
                        <p id='p28'>The user has to bend constantly with the walker which causes back pain, posture distortion and other ailments.</p>
                    </div>
                    <div>
                    <img id='walker13' src={require("./walker13.png")}/>
                        <p id='p29'>The walker also causes the user to be dependent on another personal assistance to perform their daily chores. This causes family members to be constantly worried for the user. Someone from the family has to compromise their work to be with them.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <span id='p30'>Insights</span>
            <div id='walkerbox'>
              
            </div>
            <div id='pwcar'>
              <Pwcarousel />
            </div>
            {/* carousel */}
        </div>
        <span id='p31'>Future Space</span>
        <p id='p32'>
        Walker is a good aid to provide stability to the users. However, 84% of mobility aid users choose to use any aid but walker because it acts as a constriction to their independence, and the social stigma associated with it.

Taking forward the insights, and transforming the current walker into an interactive
companion that ensures safety and security of the users, while adhering to the standard medical laws would contribute towards the betterment of mental as well as physical well-being of the users.
        </p>
        <div id='wcontact'>
          <ContactForm  />
        </div>
        </div>
    )
  }
}

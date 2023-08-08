import React, { Component } from 'react'
import NavigationBar from './Navbar';
import Contact from './contact';
import './expo.css';
import Pecarousel from './pecarousel';

export default class Expo extends Component {
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
          <button className="scroll-button1" onClick={() => this.scrollToSection('expoo1')}>
            Exhibitions <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('expoo2')}>
            Impact of Exhibitions <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('expoo3')}>
            Hypotheses <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('expoo4')}>
            Primary Research <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('expoo5')}>
            User Journey Map <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('expoo6')}>
            Insights <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
          <button className="scroll-button1" onClick={() => this.scrollToSection('expoo7')}>
            Proposed Solution <img className='arrowbutton' src={require("./buttonarrow.png")}/>
          </button>
        </div>
        <section id='expoo1'>
        </section>
        <section id='expoo2'>
        </section>
        <section id='expoo3'>
        </section>
        <section id='expoo4'>
        </section>
        <section id='expoo5'>
        </section>
        <section id='expoo6'>
        </section>
        <section id='expoo7'>
        </section>
        <span className='pfolio'>Portfolio</span>
        <span className='ptitle'>ExpoEezy</span>
        <span className='pindustry'>Industry</span>
        <span className='pind1'>Exhibition</span>
        <span className='pservices'>Services</span>
        <span className='pser1'>Service Design | User Experience Design</span>
        <img id='eee' src={require("./eee.png")}/>
        <span id='p149'>Exhibitions</span>
        <p id='p150'>Exhibitions are large-scale events where goods and services are displayed and demonstrated to the public. They are known to be a powerful marketing tool that offer an opportunity for businesses to meet existing and potential customers.</p>
        <span id='p151'>Why do people prefer going to Exhibitions?</span>
        <span id='p152'>1. Gather useful information</span>
        <p id='p153'>Exhibitions are a platform where one can gather enough information from their peers about their respective fields. They are a great event that offer best opportunities for both exhibitors as well as visitors to learn the present trends going on in the market, as well as what the future has to bring in the industry.</p>
        <span id='p154'>2. Networking</span>
        <p id='p155'>Exhibitions offer a platform to connect and make contact with all the people that work in the similar fields where the like-minded people and businesses can contribute to each others’ ideas and also learn from them. One-to-one interaction is highly promoted in such places to ensure that a strong bond is created between the brand and consumer. </p>
        <span id='p156'>3. Competiton</span>
        <p id='p157'>Knowing the strategies of your competitor is beneficial to your business’ growth. Attending exhibitions is the best way one could know exactly what the other brands are up to and how you can use their strategies in a smart and effective way. </p>

        <span id='p158'>Impact of Exhibitions</span>
        <span id='p159'>Social Impact</span>
        <p id='p160'>Exhibitions bring thousands of influential individuals and companies into the city. However, there are limitations imposed to people across regions due to the huge language diversity.

The exhibition venue can also promote the development of related service industries, and promote the communication between regional culture and external world.</p>

        <span id='p161'>Economic Impact</span>
        <p id='p162'>The exhibition sector generates more than $81 billion in direct GDP, ranking as the 56th largest economy in the world.

They also make a valuable contribution to the economy by providing employment in events organising companies, venues, hotels, stand/booth design and build and so on.</p>
        <span id='p163'>technological Impact</span>
        <p id='p164'>Visitors want to be engaged and amazed, and new technology products mean that visitors are indeed engaged even when staff are busy. Touchscreen digital displays are another popular product on stands today. Not only do they draw visitors in, but they also enable them the ultimate freedom of discovering your products and services themselves using on-screen navigation.</p>
        <span id='p165'>Hypotheses</span>
        <p id='p166'>If the communication barriers among different cultures and regions in exhibitions are removed then it would lead to better and improved exchange of information.</p>
        <p id='p167'>Interactive group activities in exhibitions would allow the participants to explore the creative talents around them and avail the opportunities to apply their ideas in more unique ways.</p>
        <p id='p168'>Technology will play an important role in the exhibition industry as it will help transform the whole experience of the traditional exhibition setup by making it more globally accessible with an immersive experience.</p>

        <span id='p169'>Primary Research</span>
        <p id='p170'>The aim of this phase of the project was to understand the perspective of different stakeholders of exhibitions, and assess their motivations and pain-points during each of their journey in the events.

5 exhibitors, 2 attendees, 2 event managers and 1 exhibition designer were interviewed during this phase. Additionally, ethnography was performed in total of 3 exhibitions to observe each of these stakeholders and how they perform their tasks. </p>
        <span id='p171'>Who did we  design for?</span>
        <p id='p172'>As exhibitions are a platform for marketing and selling of their goods, every business, be it long-established or a small one, tends to attend local and non-local exhibitions. However, it was realized that their entire journey, right from packing their products, planning and setting them on the booth and packing them back from exhibition comes out to be very tiring and troublesome for exhibitors. A lot of times, the hustle behind every step of registration and arrangements for booth does not leave them enough energy and time to achieve the goal they were here for. 

While there are multiple efforts being put by the exhibition designers to ease the visitor’s journey while they are in an exhibition, the experience of exhibitors has always been hectic. Thus, the project aimed to design a service for exhibitors that would guide them throughout their journey of attending an exhibition and ensure that their motive behind attending any event throughout the world. </p>
        <span id='p173'>User Journey Map</span>
        <img id='eetable' src={require("./eetable.png")}/>
        <span id='p174'>Insights</span>
        <div></div>
        <span id='p175'>Proposed Solution</span>
        <img id='ee1' src={require("./ee1.png")}/>
        <p id='p176'>The proposed solution favours the exhibitors by making their journey starting right from coming across an exhibition in a nearby location, registering for it till the products are packed and returned back to the destination.

ExpoEezy app is especially curated to help make their experience in exhibitions hustle-free. It acts as the mediator between the exhibition host and the exhibitor.</p>
        <span id='p177'>Sign up/Sign in</span>
        <p id='p178'>While signing up or signing in the application, it asks the user’s details to ensure a personalized experience while recommending the events or offering other services.</p>
        <img id='ee2' src={require("./ee2.png")}/>
        <span id='p179'>Registration</span>
        <p id='p180'>ExpoEezy lets the user know about all the exhibitions, pop ups or other similar events that are being organized near their location or based on their preferred industry.

For any selected event, the application then provides a form to understand the user’s preferences of stall type and personal details that would be updated for registration.

On completion of registration process, ExpoEezy provides a personal helper to the exhibitor to ensure the user gets all the guidance throughout the journey of logistics or renting products.  </p>
<img id='ee3' src={require("./ee3.png")}/>
<img id='ee4' src={require("./ee4.png")}/>
<img id='ee5' src={require("./ee5.png")}/>
<img id='ee6' src={require("./ee6.png")}/>
<img id='ee7' src={require("./ee7.png")}/>
<img id='ee8' src={require("./ee8.png")}/>

        <span id='p181'>Rental services</span>
        <img id='ee9' src={require("./ee9.png")}/>
        <img id='ee10' src={require("./ee10.png")}/>
        <img id='ee11' src={require("./ee11.png")}/>
        <p id='p182'>Exhibitors’ main purpose of exhibiting is to advertise their brand and thus, they wish to make their stall more interactive to attract greater audience. 

ExpoEezy fulfils this by offering rental services of products that exhibitors may want to use to showcase wide variety of products or to stand out from other brands in the event. TV, Furniture, Racks, are some products that are rented. Once rented, ExpoEezy is responsible to transport these items to the entered location safely.</p>
        <span id='p183'>Logistics</span>
        <img id='ee12' src={require("./ee12.png")}/>
        <img id='ee13' src={require("./ee13.png")}/>
        <p id='p184'>Businesses face the most difficulty while transporting their products to the event destination, especially the small businesses as it’s hard for them to afford the ones that are publicly available. ExpoEezy solves this issue with multiple options and the most affordable rates.  </p>
        <span id='p185'>Activity</span>
        <img id='ee15' src={require("./ee15.png")}/>
        <img id='ee16' src={require("./ee16.png")}/>
        <p id='p186'>It was found during the research that conducting activities in the stalls attract more customers and help businesses increase their brand visibility. ExpoEezy recommends some creative activities or games that could be organized at the stall to achieve this. </p>
        <div id='expobox'>

        </div>
        <div id='expocar'>
          <Pecarousel/>
        </div>
        <div id='expocontact'>
                <Contact/>
        </div>


         </div>
    )
  }
}

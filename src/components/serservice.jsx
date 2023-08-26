import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import NavigationBar from './Navbar';

export default class Serservice extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <span className='serheading'>Services</span>
        <span className='sersub'>User Experience Design</span>

        <Link to='/expo'>
        <span className='serc1' id='serusere1'>Exhibitions</span>
        <span className='serc2' id='serusere2'>Service Design | User Experience Design | User Interface Design</span>
        <span className='serc3' id='serusere3'>ExpoEezy</span>
        <img id='serusere4' src={require("./port5.png")}/>
        </Link>

        <Link to='/bus'>

        <span className='serc1' id='serusere5'>Urbanization</span>
        <span className='serc2' id='serusere6'>Design For Future</span>
        <span className='serc3' id='serusere7'>Bus Station</span>
        <img  id='serusere8' src={require("./port8.png")}/>
        </Link>
        <div style={{position:"absolute", top:"51.45vw"}}>
          <ContactForm/>
        </div>

      </div>
    )
  }
}

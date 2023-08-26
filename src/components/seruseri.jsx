import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import NavigationBar from './Navbar';
export default class Seruseri extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
         <span className='serheading'>Services</span>
        <span className='sersub'>User Interface Design</span>
        <Link to='/expo'>
        <span className='serc1' id='seruseri1'>Exhibitions</span>
        <span className='serc2' id='seruseri2'>Service Design | User Experience Design | User Interface Design</span>
        <span className='serc3' id='seruseri3'>ExpoEezy</span>
        <img id='seruseri4' src={require("./port5.png")}/>
        </Link>

        <Link to='/dnba'>
        <span className='serc1' id='seruseri5'>Art & Design</span>
        <span className='serc2' id='seruseri6'>Design Thinking</span>
        <span className='serc3' id='seruseri7'>"Do Not Be Afraid"</span>
        <img id='seruseri8' src={require("./port7.png")}/>
        </Link>
        <div style={{position:"absolute", top:"51.45vw"}}>
          <ContactForm/>
        </div>

      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import NavigationBar from './Navbar';
export default class Serspace extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <span className='serheading'>Services</span>
        <span className='sersub'>Space Design</span>
        <Link to ='/playkitchen'>

<span className='serc1' id='serspace1'>Kitchen</span>
<span className='serc2' id='serspace2'>Research & Development | Space Design</span>
<span className='serc3' id='serspace3'>Play Kitchen</span>
<img className='serc4' id='serspace4' src={require("./port4.png")}/>
</Link>
<div style={{position:"absolute", top:"51.45vw"}}>
          <ContactForm/>
        </div>

      </div>
    )
  }
}

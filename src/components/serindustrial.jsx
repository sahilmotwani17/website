import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Serindustrial extends Component {
  render() {
    return (
      <div>
         <span className='serheading'>Services</span>
        <span className='sersub'>Industrial Design</span>

        <Link to ='/orgo'>

        <span className='serc1' id='seri1'>Travel Gadget</span>
        <span className='serc2' id='seri2'>Industrial Design</span>
        <span className='serc3' id='seri3'>ORGO</span>
<img id='seri4' src={require("./port1.png")}/>
        </Link>
        <Link to='/cooler'></Link>
        <Link to='/kaatni'>

<span className='serc1' id='seri5'>Agriculture</span>
<span className='serc2' id='seri6'>Research & Development | Industrial Design</span>
<span className='serc3' id='seri7'>Kaatni</span>
<img id='seri8' src={require("./port6.png")}/>
</Link>

        <Link to='/cooler'>

<span className='serc1' id='serr9'>Consumer Electronics</span>
<span className='serc2' id='serr10'>Research & Development | Industrial Design</span>
<span className='serc3' id='serr11'>Cooler</span>
<img id='serr12' src={require("./port3.png")}/>
</Link>
        
      </div>
    )
  }
}

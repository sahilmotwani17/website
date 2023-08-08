import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Serresearch
 extends Component {
  render() {
    return (
      <div>
        <span className='serheading'>Services</span>
        <span className='sersub'>Research & Development</span>
        <Link to='/walker'>
        <span className='serc1' id='serr1'>Medical Product</span>
        <span className='serc2' id='serr2'>Research & Development</span>
        <span className='serc3' id='serr3'>Walker</span>
          <img id='serr4' src={require("./port2.png")}/>
        </Link>
        <Link to ='/playkitchen'>

<span className='serc1' id='serr5'>Kitchen</span>
<span className='serc2' id='serr6'>Research & Development | Space Design</span>
<span className='serc3' id='serr7'>Play Kitchen</span>
<img id='serr8' src={require("./port4.png")}/>
</Link>
<Link to='/cooler'>

<span className='serc1' id='serr9'>Consumer Electronics</span>
<span className='serc2' id='serr10'>Research & Development | Industrial Design</span>
<span className='serc3' id='serr11'>Cooler</span>
<img id='serr12' src={require("./port3.png")}/>
</Link>
<Link to='/kaatni'>

<span className='serc1' id='serr13'>Agriculture</span>
<span className='serc2' id='serr14'>Research & Development | Industrial Design</span>
<span className='serc3' id='serr15'>Kaatni</span>
<img id='serr16' src={require("./port6.png")}/>
</Link>

      </div>
    )
  }
}

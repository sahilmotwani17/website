import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1>Contact</h1>
         <div id='cont' style={{display: 'flex', justifyContent: 'space-between', marginTop:'2px'}}>
        <span className='cinfo' style={{marginLeft: '2.8vw'}}> 
            <img  src={require('./mail.png')} style={{width: '6.3%'}} />
            <a href='#'style={{marginLeft:'0.8vw', color:'black',fontFamily: 'Proxima Nova', fontSize: '1vw', fontWeight: 400, letterSpacing: '0em', textAlign: 'left'}}>dimplemotwani811@gmail.com</a>
        </span>
        <span  className='cinfo' style={{marginLeft: '2.8vw'}}> 
            <img  src={require('./linkdin.png')} style={{width: '10%'}} />
            <a href='#'style={{marginLeft:'0.8vw', color:'black',fontFamily: 'Proxima Nova', fontSize: '1vw', fontWeight: 400, letterSpacing: '0em', textAlign: 'left'}}>dimplemotwanii</a>
        </span>
        <span  className='cinfo' style={{marginLeft: '2.8vw'}}> 
            <img  src={require('./be.png')} style={{width: '10%'}} />
            <a href='#' style={{marginLeft:'0.8vw', color:'black',fontFamily: 'Proxima Nova', fontSize: '1vw', fontWeight: 400, letterSpacing: '0em', textAlign: 'left'}}>Dimple Motwani</a>
        </span>
        <span className='cinfo'  style={{marginLeft: '2.8vw'}}> 
        <img src={require('./insta.png')} style={{width: '10%'}} />
            <a href='#' style={{marginLeft:'0.8vw', color:'black',fontFamily: 'Proxima Nova', fontSize: '1vw', fontWeight: 400, letterSpacing: '0em', textAlign: 'left'}}>prolificmindss </a>
        </span> 
      </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import NavigationBar from './Navbar';
import Contact from './contact';
import Sercarousel from './sercarousel';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

export default class Spage extends Component {
  render() {
    return (
      <div className='servicesdiv'>
        <NavigationBar/>
        <span id='stext1'>Services</span>
        <div className="smaindiv">
          <div className='servicesdiv'>
            <span id="t1">Research & Development</span>
            <img id='srimg1' src={require('./seril1.png')}/>
            <div id='scar1'>
   
    
      <img src={require('./ssimg1.png')} id='ss1' className='servicesimages' alt="..."/>
 
      </div>
          </div>
          <div className='servicesdiv'>
            <span id="t2">Industrial Design</span>
            <img id='srimg2' src={require('./seril2.png')}/>
            <div id='scar2'>
    
      
    <img src={require('./ssimg2.png')} className='servicesimages' alt="..."/>

      </div>

          </div>
          <div className='servicesdiv'>
            <span id="t3">User Interface Design</span>
            <img id='srimg3' src={require('./seril3.png')}/>
            <div id='scar3'>
        
    <img src={require('./ssimg3.png')} className='servicesimages' alt="..."/>
   
      </div>

          </div>
          <div className='servicesdiv'>
            <span id="t4">User Experience Design</span>
            <img id='srimg4' src={require('./seril4.png')}/>
            <div id='scar4'>
        
    <img src={require('./ssimg4.png')} className='servicesimages' alt="..."/>

      </div>

          </div>
          <div className='servicesdiv'>
            <span id="t5">Service Design</span>
            <img id='srimg5' src={require('./seril5.png')}/>
            <div id='scar5'>
       
    <img src={require('./ssimg5.png')} className='servicesimages' alt="..."/>

      </div>

          </div>
          <div className='servicesdiv'>
            <span id="t6">Space Design</span>
            <img id='srimg6' src={require('./seril6.png')}/>
            <div id='scar6'>
     
    <img className='servicesimages' src={require('./ssimg6.png')}  alt="..."/>
  
      </div>

          </div>
          <div className='servicesdiv'>
            <span id="t7">Packaging Design</span>
            <img id='srimg7' src={require('./seril7.png')}/>
            <div id='scar7'>
      
    {/* <img src={require('./services1.png')} className='servicesimages' alt="..."/> */}

      </div>
          </div>
          <div className='servicesdiv'>
            <span id="t8">Branding</span>
            <img id='srimg8' src={require('./seril8.png')}/>
            <div id='scar8'>
    
    {/* <img src={require('./services1.png')} className='servicesimages' alt="..."/> */}
      

      </div>
      <p id='pacakgingt'>Work coming soon</p>
    <p id='brandingt'>Work coming soon</p>
          </div>
          
        </div>
        <div style={{position:'absolute',top:"226.81vw"}}>
        <ContactForm/>
        </div>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"0.6vw", 
       paddingBottom:"0.5vw",whiteSpace: 'nowrap'}} id='viewrelated1' className="btn btn-outline-warning" to="/serresearch">View Related Work</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"0.6vw", 
       paddingBottom:"0.5vw",whiteSpace: 'nowrap'}} id='viewrelated2' className="btn btn-outline-warning" to="/serindustrial">View Related Work</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"0.6vw", 
       paddingBottom:"0.5vw",whiteSpace: 'nowrap'}} id='viewrelated3' className="btn btn-outline-warning" to="/seruseri">View Related Work</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"0.6vw", 
       paddingBottom:"0.5vw",whiteSpace: 'nowrap'}} id='viewrelated4' className="btn btn-outline-warning" to="/serusere">View Related Work</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"0.6vw", 
       paddingBottom:"0.5vw",whiteSpace: 'nowrap'}} id='viewrelated5' className="btn btn-outline-warning" to="/serservice">View Related Work</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"0.6vw", 
       paddingBottom:"0.5vw",whiteSpace: 'nowrap'}} id='viewrelated6' className="btn btn-outline-warning" to="/serspace">View Related Work</Link>
      </div>
    )
  }
}

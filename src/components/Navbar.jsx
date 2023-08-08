import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-white fixed-top">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="container-fluid" id='nav'>
          <Link id='name1' className="navbar-brand" to="/"><p id="name">Dimple Motwani</p></Link>
          <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
  onClick={() => {
    document.querySelector('.custom-navbar').classList.toggle('show-custom');
  }}
>
  <span className="navbar-toggler-icon"></span>
</button>

          
<div className="collapse navbar-collapse custom-navbar" id="navbarSupportedContent">

            <ul className="navbar-nav mb-2" id="sk">
              <li class ="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" >Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
              <a
                  className="nav-link"
                  href="#contact"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul id='sk1' className="navbar-nav mb-2 ms-auto">
              <li className="nav-item" style={{marginTop:'3px'}}>
                <a  id="mail-link" className="nav-link"  href="mailto:smotwani17@gmail.com" ><i class="fa-solid fa-envelope"></i></a>
              </li>
              <li className="nav-item">
                
                <a id="sk2" className="nav-link"  href="#">Resume</a>
              </li>
              {/* <li class="nav-item">
                
              </li> */}
              </ul>
          </div>
        </div>
      </nav>
    )
  }
}

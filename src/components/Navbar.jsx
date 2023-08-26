import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const activeStyle = {
    color: '#E1A564',
    fontWeight: 'bold'
  };

    return (
        <nav className="navbar navbar-expand-lg bg-body-white fixed-top">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="container-fluid" id='nav'>
          <Link id='name1' className="navbar-brand" to="/"><p id="name">thru designs</p></Link>
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
              <li className='nav-item'>
                <Link id='navtextt1' className="nav-link" to="/about" style={isActive('/about') ? activeStyle : {}}>About</Link>
              </li>
              <li className="nav-item">
                <Link id='navtextt2' className="nav-link" to="/services" style={isActive('/services') ? activeStyle : {}}>Services</Link>
              </li>
              <li  className="nav-item">
                <Link id='navtextt3' className="nav-link" to="/portfolio" style={isActive('/portfolio') ? activeStyle : {}}>Work</Link>
              </li>
              <li className="nav-item">
              <a id='navtextt4'
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
              <li className="nav-item">
                
              <Link id='navstartproject' className="btn btn-outline-warning" to="/startProject">Start a project with us</Link>
              </li>
              {/* <li class="nav-item">
                
              </li> */}
              </ul>
          </div>
        </div>
      </nav>
    )
  }

export default NavigationBar;

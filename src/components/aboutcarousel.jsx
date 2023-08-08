import React, { Component } from 'react';

export default class Aboutcarousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className='aboutcimg' src={require("./play1.png")}/>
              <span className='aboutctext1'>thru as preposition • expressing movement from one side of a channel to another</span>
              <span className='aboutctext2'>
                The features of the walker are too hidden for the user to fully understand them
              </span>
            </div>
            <div className="carousel-item">
              <img className='aboutcimg' src={require("./play1.png")}/>
              <span className='aboutctext1'>thru as preposition • expressing movement from one side of a channel to another</span>
              <span className='aboutctext2'>
                The features of the walker are too hidden for the user to fully understand them
              </span>
            </div>
            <div className="carousel-item">
            <img className='aboutcimg' src={require("./play1.png")}/>
            <span className='aboutctext1'>thru as preposition • expressing movement from one side of a channel to another</span>
              <span className='aboutctext2'>
                The features of the walker are too hidden for the user to fully understand them
              </span>
            </div>
          </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <img id='aboutcnext' src={require("./nextb.png")} alt="Next" />
        </button>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <img id='aboutcprev' src={require("./prevb.png")} alt="Previous" />
        </button>
      </div>
    );
  }
}

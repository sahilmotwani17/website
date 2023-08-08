import React, { Component } from 'react';

export default class Pwcarousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <span>
                The features of the walker are too hidden for the user to fully understand them
              </span>
            </div>
            <div className="carousel-item">
              <span>
                The features of the walker are too hidden for the user to fully understand them
              </span>
            </div>
            <div className="carousel-item">
              <span>
                The features of the walker are too hidden for the user to fully understand them
              </span>
            </div>
          </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <img id='pwcnext' src={require("./nextb.png")} alt="Next" />
        </button>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <img id='pwcprev' src={require("./prevb.png")} alt="Previous" />
        </button>
      </div>
    );
  }
}

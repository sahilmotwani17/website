import React, { Component } from 'react';

export default class Pecarousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <span>
                Exhibitors are not able to provide customers with wide variety of products as carrying all their products to the venue is not possible
              </span>
            </div>
            <div className="carousel-item">
              <span>
                Exhibitors are not able to provide customers with wide variety of products as carrying all their products to the venue is not possible
              </span>
            </div>
            <div className="carousel-item">
              <span>
                Exhibitors are not able to provide customers with wide variety of products as carrying all their products to the venue is not possible
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

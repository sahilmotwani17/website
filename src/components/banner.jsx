import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                id="img1"
                src={require("./Untitled.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                id="img2"
                src={require("./Untitled2.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                id="img3"
                src={require("./Untitled3.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
            
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    );
  }
}

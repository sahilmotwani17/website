import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div id="inam" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-lg-4">
                        <div className="card" style={{ width: '300px', margin: 'auto' }}>
                          <img src="images/a.jpg" className="card-img-top" alt="Card 1" />
                          <div className="card-body">
                            <h4 className="card-title">Why you should use skin masks?</h4>
                            <p className="card-text">Skin masks help us to make our skin fresh and also protect our skin from the harmful rays of the sun.</p>
                            <button type="button" className="btn btn-warning">Read More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add other carousel items here */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#inam" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#inam" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;

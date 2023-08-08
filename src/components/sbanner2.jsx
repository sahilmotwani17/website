import React, { useState, useEffect } from 'react';
import './sb2.scss';
import s1 from './s1.png';
import dpi2 from './dpi2.png';
import dpi3 from './dpi3.png';
import research from './research.png';
import industrial from './industrial.png';
import space from './space.png';
import service from './service.png';
import user from './user.png';
import packaging from './packaging.png';
import userinter from './userinter.png';
import branding from './branding.png';
import { Link } from 'react-router-dom';



const images = [
  research,
  branding,
  industrial,
  space,
  service,
  user,
  packaging,
  userinter
];

const texts = [
  <span className='servicbtext' style={{ fontFamily: "Proxima Nova" }}>Research & Development</span>,
  <span className='servicbtext'style={{ fontFamily: "Proxima Nova" }}>Branding</span>,
  <span className='servicbtext'style={{ fontFamily: "Proxima Nova" }}>Industrial Design</span>,
  <span className='servicbtext'style={{ fontFamily: "Proxima Nova" }}>Space Design</span>,
  <span className='servicbtext'style={{ fontFamily: "Proxima Nova" }}>Service Design</span>,
  <span className='servicbtext'style={{ fontFamily: "Proxima Nova" }}>User Experience Design</span>,
  <span className='servicbtext'style={{ fontFamily: "Proxima Nova" }}>Packaging Design</span>,
  <span className='servicbtext'style={{ fontFamily: "Proxima Nova" }}>User Interface Design</span>
 
];

function Carousel() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIdx(selectedIdx === images.length - 1 ? 0 : selectedIdx + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [selectedIdx]);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx === 0 ? images.length - 1 : selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx === images.length - 1 ? 0 : selectedIdx + 1);
  };

  const handleSelect = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <main>
      <div id="myCarousel">
        {images.map((img, idx) => {
          let className;
          if (idx === selectedIdx) {
            className = 'selected';
          } else if (idx === selectedIdx - 1 || (selectedIdx === 0 && idx === images.length - 1)) {
            className = 'prev';
          } else if (idx === selectedIdx + 1 || (selectedIdx === images.length - 1 && idx === 0)) {
            className = 'next';
          } else if (idx < selectedIdx || (selectedIdx === images.length - 1 && idx === 0)) {
            className = 'hideLeft';
          } else {
            className = 'hideRight';
          }
          return (
            <div key={idx} className={className} onClick={() => handleSelect(idx)}>
              <img src={img} alt={`Slide ${idx + 1}`} />
              {(className === 'selected' || className === 'prev' || className === 'next') && <p id='stext'>{texts[idx]}</p>}
            </div>
          );
        })}
      </div>
      <Link id='viewrelatedhome' className="btn btn-outline-warning" to="/spage">View related work</Link>

      <div className="buttons22">
        <img id="prevww" src={require("./prevw.png")} alt="Prev" onClick={handlePrev} />
        <img id="nextww" src={require("./nextw.png")} alt="Next" onClick={handleNext} />
      </div>
    </main>
  );
}

export default Carousel;

import React, { useState, useEffect } from 'react';
import './sb.scss';
import dpi1 from './ddpp1.png';
import dpi2 from './ddpp2.png';
import dpi3 from './ddpp3.png';
import dpi4 from './ddpp4.png';
import dpi5 from './ddpp5.png';
import dpi6 from './ddpp6.png';

const images = [
  dpi1,
  dpi2,
  dpi3,
  dpi4,
  dpi5,
  dpi6
];

const texts = [
  "Design is a remembrance of certain events that are changed for better.",
  "Design centres the experiences of its users to innovate new, personalized experiences.",
  "Design creates a story for individual users to connect with them emotionally.",
  "Design integrates distinct components to empower its users with playful functionality.",
  "Design opens new possibilities in the world to transform its reality.",
  "Design incorporates endless efforts to make it seam effortless."
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
      <div id="carousel">
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
              {className === 'selected' && <p>{texts[idx]}</p>}
            </div>
          );
        })}
      </div>

      <div className="buttons">
        <img id="prev" src={require("./pr.png")} alt="Prev" onClick={handlePrev} />
        <img id="next" src={require("./ar.png")} alt="Next" onClick={handleNext} />
      </div>
    </main>
  );
}

export default Carousel;

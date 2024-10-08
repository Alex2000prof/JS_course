import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // стили для карусели
import { Carousel } from "react-responsive-carousel"; // импорт карусели

function App() {
  return (
    <div className="App">
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
            alt="Hong Kong"
          />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
            alt="Macau"
          />
          <p className="legend">Macau</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
            alt="Japan"
          />
          <p className="legend">Japan</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;

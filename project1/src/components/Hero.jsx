import React from "react";
import "./Hero.css";

// ✅ Import images at the top, outside the function
import aa1 from '../assets/images/antonio-araujo-is4w330PLKY-unsplash.jpg';
import aa2 from '../assets/images/antonio-araujo-nlL2DGIW0XI-unsplash.jpg';
import ml1 from '../assets/images/mitchell-luo-GYNNykpWOU4-unsplash.jpg';
import jd1 from '../assets/images/jacob-dub-tyTLYp3Rykk-unsplash.jpg';
import ml2 from '../assets/images/mitchell-luo-7knEDYhtmwI-unsplash.jpg';
import ultraboost from '../assets/images/ultaboost.jpg';

function Hero() {
  const featuredShoes = [aa1, aa2, ml1, jd1, ml2];
  const ultraboostImage = ultraboost;

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Impossible is Nothing</h1>
        <p>Discover the latest Adidas collection made for sport and style.</p>

        <div className="hero__images">
          {featuredShoes.map((img, index) => (
            <img key={index} src={img} alt={`Shoe ${index + 1}`} />
          ))}
        </div>

        <div className="hero__ultraboost">
          <img
            src={ultraboostImage}
            alt="Ultraboost Featured"
            className="hero__ultraboost-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
 const featuredShoes = [
  "/images/antonio-araujo-is4w330PLKY-unsplash.jpg",
  "/images/antonio-araujo-nlL2DGIW0XI-unsplash.jpg",
  "/images/mitchell-luo-GYNNykpWOU4-unsplash.jpg",
  "/images/jacob-dub-tyTLYp3Rykk-unsplash.jpg",
  "/images/mitchell-luo-7knEDYhtmwI-unsplash.jpg",

];
  const ultraboostImage = "/images/ultaboost.jpg";

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Impossible is Nothing</h1>
        <p>Discover the latest Adidas collection made for sport and style.</p>

        {/* Grid of smaller shoes */}
        <div className="hero__images">
          {featuredShoes.map((img, index) => (
            <img key={index} src={img} alt={`Shoe ${index + 1}`} />
          ))}
        </div>

        {/* Large Ultraboost image */}
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

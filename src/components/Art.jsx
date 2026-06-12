import React from "react";
import "../styles/Art.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

const Art = () => {
  const topArt = [
    { src: "/assets/art/kseem1.jpg", title: "11th grade" },
    { src: "/assets/art/kseem2.jpg", title: "anatomy" },
    { src: "/assets/art/up2.jpeg", title: "animal" },
    { src: "/assets/art/rnsit1.jpg", title: "cordyceps" },
    { src: "/assets/art/rnsit2.jpg", title: "dali" },
    { src: "/assets/art/kseem4.jpeg", title: "dna" }
  ];

  return (
    <div id="art">
      <div className="section-header">
        <span className="section-title">/ gallery</span>
        <Link to="/art" className="explore-link">
          Explore collection
        </Link>
      </div>
      <FadeInSection delay="200ms">
        <div className="art-description">
          Few stills from the rather interesting events i was able to capture.
        </div>
      </FadeInSection>
      <div className="art-container">
        <div className="art-grid">
          {topArt.map((art, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="art-card">
                <img src={art.src} alt={art.title} className="art-image" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art;

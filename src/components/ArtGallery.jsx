import React from "react";
import "../styles/ArtGallery.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const ArtGallery = () => {
  const allArt = [
    { src: "/assets/art/up1.jpeg", title: "dna" },
    { src: "/assets/art/up2.jpeg", title: "dna" },
    { src: "/assets/art/up3.jpeg", title: "dna" },
    { src: "/assets/art/up4.jpeg", title: "dna" },
    { src: "/assets/art/up5.jpeg", title: "dna" },
    { src: "/assets/art/kseem1.jpg", title: "11th grade" },
    { src: "/assets/art/kseem2.jpg", title: "anatomy" },
    { src: "/assets/art/kseem3.jpg", title: "animal" },
    { src: "/assets/art/rnsit1.jpg", title: "cordyceps" },
    { src: "/assets/art/rnsit2.jpg", title: "dali" },
    { src: "/assets/art/rnsit3.jpg", title: "dna" },
    { src: "/assets/art/kseem4.jpeg", title: "dna" },
    { src: "/assets/art/neuro1.jpeg", title: "dna" }

  ];

  return (
    <div className="art-gallery-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/gallery</span>
      </div>
      <FadeInSection delay="200ms">
        <div className="gallery-description">
          More stills..
        </div>
      </FadeInSection>
      <div className="gallery-grid">
        {allArt.map((art, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="gallery-card">
              <img src={art.src} alt={art.title} className="gallery-image" />
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;

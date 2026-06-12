import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";


const base = import.meta.env.BASE_URL;
const About = () => {
  const one = (
    <p>
      I'm Thanmay an AI Systems Engineer who loves building things that actually work in production. My focus is on the full stack of modern AI: retrieval-augmented generation, fine-tuned language models, agentic orchestration, and the MLOps glue that holds it all together.
    </p>
  );
  const two = (
    <p>
      Outside of building AI systems, I love competing in hackathons the rush to build and fix breaks and be at my fingertips is something I love.
      I am pretty nerdy about tech gadgets and AI agents out there , love literary fiction and also play a lot of battle royale and FPS games.
    </p>
  );

  const techStack = [
    "Python (FastAPI, PyTorch)",
    "LangChain / LlamaIndex",
    "Hugging Face Transformers",
    "Docker · GitHub Actions · CI/CD",
    "React · Tailwind CSS",
    "PostgreSQL · MongoDB · Redis",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are a few technologies I've been working with recently:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Thanmay M Shetty" src={`${base}assets/thanmay.jpg`} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;

import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";
import { handleScrollToSection } from "../utils/navigation";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <AsciiPortrait />
      </div>
      <div className="intro-block">
        <div className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["thanmay here."]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">
            I'm a final-year B.E. student in Artificial Intelligence & Machine Learning at BMS Institute of Technology and Management, Bengaluru batch of 27'. I specialise in designing and shipping production-grade LLM applications, RAG pipelines, and agentic AI systems from scratch. Currently seeking an AI/ML internship where I can work on systems that matter.
          </div>
          <div className="intro-cta-row">
            <a href="#/#projects" className="intro-contact" onClick={(e) => handleScrollToSection(e, "projects")}>
              {"Check out my work!"}
            </a>
            <div className="intro-social-icons">
              <a href="https://github.com/FrostyZ07" target="_blank" rel="noopener noreferrer" title="GitHub">
                <GitHubIcon style={{ fontSize: 24 }} />
              </a>
              <a href="https://www.linkedin.com/in/thanmay-m-shetty" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LinkedInIcon style={{ fontSize: 26 }} />
              </a>
              <a href="/Thanmay_M_Shetty_Resume_v8.pdf" target="_blank" rel="noopener noreferrer" title="Download Resume">
                <DescriptionIcon style={{ fontSize: 24 }} />
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;

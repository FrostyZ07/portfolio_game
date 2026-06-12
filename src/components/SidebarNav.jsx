import React from "react";

import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";

import { useMediaQuery } from "@mui/material";
import { handleScrollToSection } from "../utils/navigation";

const SidebarNav = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const links = [
    <a key="1" href="#/#intro" onClick={(e) => handleScrollToSection(e, "intro")}><span className="nav-slash">/</span>home</a>,
    <a key="2" href="#/#about" onClick={(e) => handleScrollToSection(e, "about")}><span className="nav-slash">/</span>about</a>,
    <a key="3" href="#/#experience" onClick={(e) => handleScrollToSection(e, "experience")}><span className="nav-slash">/</span>experience</a>,
    <a key="4" href="#/#projects" onClick={(e) => handleScrollToSection(e, "projects")}><span className="nav-slash">/</span>software</a>,
    <a key="5" href="#/#opensource" onClick={(e) => handleScrollToSection(e, "opensource")}><span className="nav-slash">/</span>open-source</a>,
    <a key="6" href="#/#art" onClick={(e) => handleScrollToSection(e, "art")}><span className="nav-slash">/</span>art</a>
  ];

  return (
    <div className="sidebar-nav">
      {!isMobile && (
        <div className="sidebar-links">
          {links.map((link, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div>{link}</div>
            </FadeInSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarNav;

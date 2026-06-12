import React from "react";
import "../styles/Projects.css";
import "../styles/OpenSource.css";
import FadeInSection from "./FadeInSection";
import githubChartSvg from "../assets/github_chart.svg?raw";

const OpenSource = () => {
  return (
    <div id="opensource">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ open-source contributions</span>
        </div>

        {/* GitHub Contributions Heatmap */}
        <div className="github-chart-container">
          <div className="github-chart-card">
            <div className="github-chart-header">
              <span className="github-chart-title">FrostyZ07's Contribution Heatmap</span>
              <a
                href="https://github.com/FrostyZ07"
                target="_blank"
                rel="noopener noreferrer"
                className="explore-link"
                style={{ margin: 0 }}
              >
                View GitHub Profile
              </a>
            </div>
            <div className="github-chart-wrapper" dangerouslySetInnerHTML={{ __html: githubChartSvg }} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default OpenSource;

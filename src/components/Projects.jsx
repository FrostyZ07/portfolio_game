import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";
import { useNavigate } from "react-router-dom";

const projects = {
  "BioBloom / AgriGain": {
    desc: "Conversational AI platform providing crop disease detection, fertiliser recommendations, and plant health diagnostics in three languages. Built a RAG pipeline over 300+ domain-specific chunks with a 90% JSON parse success rate. Awarded 1st place at RNSIT Hackathon 2025.",
    techStack: "Python, LangChain, FastAPI, RAG, Multilingual NLP, React",
    link: "https://github.com/FrostyZ07/BioBloom-AgriGain",
    open: "https://agri-gain.vercel.app/log-waste",
    logLink: "/software/agrigain"
  },
  "ARGO NETCDF RAG Pipeline": {
    desc: "End-to-end RAG system ingesting 5 GB of ARGO float NETCDF oceanographic data, chunked into ~20K semantic units. Improved query accuracy from 70% → 90% using hybrid retrieval (BM25 + dense embeddings). Designed for research-grade Q&A over large scientific datasets.",
    techStack: "Python, LangChain, FAISS, NETCDF, Sentence Transformers, FastAPI",
    link: "https://github.com/FrostyZ07/FloatChat",
    logLink: "/software/argo"
  },
  "Sentiment Analysis API (MLOps)": {
    desc: "Fine-tuned DistilBERT on 3.6M Amazon Reviews, improving accuracy from 76% → 94% at 500 ms latency. Full MLOps stack: FastAPI serving, W&B experiment tracking, Evidently AI drift detection, Docker, Railway deployment, and GitHub Actions CI/CD.",
    techStack: "DistilBERT, FastAPI, Docker, W&B, GitHub Actions",
    link: "https://github.com/FrostyZ07/Sentiment-Analysis-API",
    logLink: "/software/sentiment"
  },
  "Quantum-AI Cognitive Health System": {
    desc: "Hybrid quantum-classical system analysing 157K+ EEG data points for cognitive health classification. Implemented QUBO optimiser and PennyLane Variational Quantum Circuit (VQC). Full-stack deployment with FastAPI backend, React frontend, and Docker Compose orchestration.",
    techStack: "PennyLane, PyTorch, FastAPI, React, Docker Compose, QUBO",
    link: "https://github.com/FrostyZ07/quantumAI"
  },
  "Smart Attendance System": {
    desc: "Computer vision attendance system using real-time face detection and recognition at 60 FPS with 1–2 s end-to-end latency. Designed for classroom deployment with a minimal hardware footprint.",
    techStack: "OpenCV, Python, Face Recognition, FastAPI, SQLite",
    link: "https://github.com/FrostyZ07/SmartAttendance"
  }
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ software</span>
        <a
          href="https://github.com/FrostyZ07"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => {
            const project = projects[key];
            const hasLog = !!project.logLink;
            return (
              <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                <li
                  className={`projects-card ${hasLog ? "transparent-card" : ""}`}
                  onClick={() => {
                    if (hasLog) navigate(project.logLink);
                  }}
                  style={hasLog ? { cursor: "pointer" } : {}}
                >
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                    </div>
                    <span onClick={(e) => e.stopPropagation()}>
                      <ExternalLinks
                        githubLink={project.link}
                        openLink={project.open}
                      />
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{project.desc}</div>
                  {hasLog && <div className="full-log-link">Full project log</div>}
                  <div className="card-tech">{project.techStack}</div>
                </li>
              </FadeInSection>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;

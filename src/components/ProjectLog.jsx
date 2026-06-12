import React from "react";
import "../styles/ArtGallery.css";
import "../styles/Projects.css";
import "../styles/ProjectLog.css";
import FadeInSection from "./FadeInSection";
import { Link, useParams } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const projectLogs = {

  "agrigain": {
    title: "AgriGain / BioBloom: Multilingual AI Advisory",
    date: "October 2025",
    description: "Conversational AI platform providing crop disease detection, fertiliser recommendations, and plant health diagnostics in three languages. Built for RNSIT Hackathon 2025.",
    badge: { text: "🥇 1st Place — RNSIT Hackathon 2025", href: "https://github.com/FrostyZ07/BioBloom-AgriGain" },
    liveLink: "https://agri-gain.vercel.app/log-waste",
    logs: [
      {
        title: "0. where it started",
        content: [
          { type: "text", value: "Farmers in rural India often can't access timely, accurate advice on crop diseases or fertiliser use — and when information does exist, it's locked behind English-language interfaces most of them can't navigate. BioBloom / AgriGain was built to fix that: a conversational AI advisory system that speaks to farmers in their own language, diagnoses plant health issues, and recommends actionable solutions — all through a simple chat interface." },
          { type: "text", value: "The goal wasn't just a demo. It was something a farmer could actually pick up and use." }
        ]
      },
      {
        title: "1. system architecture",
        content: [
          {
            type: "list", title: "Architecture Highlights:", items: [
              "RAG pipeline over 300+ curated domain-specific chunks (crop diseases, fertilisers, botanical data)",
              "Multilingual support across 3 languages via translation layer before and after LLM inference",
              "FastAPI backend serving retrieval + generation endpoints",
              "React frontend with a clean chat UI designed for low-friction mobile use",
              "Single-container Docker deployment for portability"
            ]
          },
          { type: "diagram", value: "User Message (any language)\n        ↓\nLanguage Detection + Translation → English\n        ↓\nQuery Embedding (Sentence Transformers)\n        ↓\nVector Store Retrieval (Top-K chunks)\n        ↓\nLLM Generation with Retrieved Context\n        ↓\nResponse Translation → User's Language\n        ↓\nRendered in React Chat UI" },
          {
            type: "list", title: "Component Breakdown:", items: [
              "FastAPI: REST API — handles query routing, retrieval, generation",
              "LangChain: RAG orchestration — retriever + LLM chain",
              "Sentence Transformers: Embedding model for semantic chunk retrieval",
              "FAISS: Vector store for fast similarity search",
              "Translation Layer: Pre/post processing for multilingual I/O",
              "React: Frontend chat interface",
              "Docker: Single-container packaging for deployment"
            ]
          }
        ]
      },
      {
        title: "2. key design decisions",
        content: [
          { type: "text", value: "1. RAG over fine-tuning\nGiven the hackathon timeline, RAG over a curated domain corpus gave us faster iteration and more controllable, explainable outputs than fine-tuning would have. We could swap or extend the knowledge base without retraining." },
          { type: "text", value: "2. Translation as a wrapper, not a core\nRather than training a multilingual model, we wrapped the English-language RAG pipeline with lightweight translation steps. This kept the retrieval quality high (English embeddings are stronger) while still delivering native-language responses." },
          { type: "text", value: "3. Strict JSON output formatting\nAll LLM responses were constrained to a JSON schema (disease name, severity, recommendation, confidence). This made the frontend rendering deterministic and hit a 90% parse success rate — critical for a live demo judged on reliability." }
        ]
      },
      {
        title: "3. designing for resilience",
        content: [
          {
            type: "list", items: [
              "JSON Parse Fallback: If the LLM response failed to parse as valid JSON, the system fell back to a plain-text extraction heuristic rather than throwing an error — keeping the UI functional under the judges' eyes.",
              "Retrieval Confidence Threshold: Chunks with cosine similarity below a set threshold were excluded from the context window, preventing hallucination from irrelevant retrievals. The system explicitly told users when it lacked confident information.",
              "Stateless API Design: Every request carried full context — no server-side session state — making the system trivially scalable and resilient to restarts mid-demo."
            ]
          }
        ]
      },
      {
        title: "4. communication & tech stack",
        content: [
          {
            type: "list", title: "Authentication & Communication:", items: [
              "No auth required for hackathon demo (open access)",
              "Frontend ↔ Backend: REST over HTTP (/query, /health endpoints)",
              "All inter-service communication synchronous and in-process (no message queue needed at this scale)"
            ]
          },
          {
            type: "list", title: "Tech Stack - Backend:", items: [
              "Python 3.11",
              "FastAPI",
              "LangChain",
              "Sentence Transformers (all-MiniLM-L6-v2)",
              "FAISS"
            ]
          },
          {
            type: "list", title: "Tech Stack - Frontend:", items: [
              "React 18",
              "Axios (API calls)",
              "TailwindCSS"
            ]
          },
          {
            type: "list", title: "Data & AI:", items: [
              "Custom curated corpus (300+ chunks — crop diseases, fertilisers, botanical health)",
              "Google Translate API (multilingual wrapper)",
              "OpenAI / Groq LLM (inference)"
            ]
          }
        ]
      },
      {
        title: "5. challenges & what i learned",
        content: [
          {
            type: "list", title: "Challenges Faced:", items: [
              "Multilingual retrieval quality — embeddings in non-English languages degraded recall. Solved by translating queries to English before embedding.",
              "JSON consistency from LLM — getting reliable structured output under 24 hours required tight prompt engineering and a fallback parser.",
              "Corpus curation under time pressure — manually validating 300+ chunks for domain accuracy in a hackathon environment was the most time-consuming part."
            ]
          },
          {
            type: "list", title: "What I Learned:", items: [
              "RAG pipeline design for constrained, domain-specific corpora is a different beast from general-purpose retrieval — chunk size and overlap matter enormously.",
              "Prompt engineering for structured JSON output is underrated; the difference between 'usually works' and '90% reliable' is in the schema definition and few-shot examples.",
              "Building for a non-technical end user (farmers, not developers) forces you to make better UX decisions than building for yourself.",
              "Winning 1st place taught me that live demo reliability matters as much as technical depth — the system that doesn't crash in front of judges wins."
            ]
          }
        ]
      }
    ]
  },
  "argo": {
    title: "ARGO Float NETCDF RAG Pipeline",
    date: "December 2025",
    description: "End-to-end RAG system ingesting 5 GB of ARGO float NETCDF oceanographic data, chunked into ~20K semantic units. Awarded 3rd Place at KSEEM Hackathon 2025.",
    badge: { text: "🥉 3rd Place — KSEEM Hackathon 2025", href: "https://github.com/FrostyZ07/FloatChat" },
    youtubeLink: "https://youtu.be/43S11ARH1RI",
    logs: [
      {
        title: "0. where it started",
        content: [
          { type: "text", value: "The ARGO float program is one of the most valuable oceanographic datasets in the world — 5 GB of real-time ocean temperature, salinity, and pressure readings from thousands of autonomous floats deployed globally. The problem? It lives in NETCDF files, a format that's essentially hostile to anyone without a geoscience background and a Python script handy." },
          { type: "text", value: "The idea was simple but ambitious: make this data conversationally queryable. Ask it a natural language question, get a grounded, data-backed answer. No Pandas, no xarray, no domain expertise required." },
          { type: "text", value: "The KSEEM judges were impressed enough by the solution that they personally sponsored our 3rd place prize — which meant more than a trophy." }
        ]
      },
      {
        title: "1. system architecture",
        content: [
          {
            type: "list", title: "Architecture Highlights:", items: [
              "5 GB NETCDF Ingestion Pipeline — parse, flatten, chunk, embed, index",
              "~20,000 semantic chunks stored in a FAISS vector index",
              "Hybrid retrieval — BM25 sparse + dense embeddings for 70% → 90% query accuracy improvement",
              "FastAPI serving the retrieval + generation pipeline",
              "Designed for research-grade Q&A: precision over speed"
            ]
          },
          { type: "diagram", value: "Raw NETCDF Files (5 GB)\n        ↓\nParsing & Flattening (xarray → tabular records)\n        ↓\nChunking (sliding window, ~20K chunks)\n        ↓\nDual Embedding (dense: Sentence Transformers) + BM25 Index (sparse)\n        ↓\nFAISS Vector Store\n        ─────────────────────────────\nUser Query (natural language)\n        ↓\nQuery Embedding + BM25 Tokenisation\n        ↓\nHybrid Retrieval (RRF fusion of sparse + dense scores)\n        ↓\nTop-K Chunks → LLM Context Window\n        ↓\nLLM Generation (grounded answer)\n        ↓\nResponse to User" },
          {
            type: "list", title: "Component Breakdown:", items: [
              "xarray + netCDF4: NETCDF file parsing and flattening",
              "LangChain: RAG orchestration — retriever chain + LLM",
              "Sentence Transformers: Dense embedding model",
              "BM25 (rank_bm25): Sparse retrieval for keyword precision",
              "FAISS: Vector index for dense similarity search",
              "RRF Fusion: Reciprocal Rank Fusion to merge sparse + dense scores",
              "FastAPI: Query API endpoint"
            ]
          }
        ]
      },
      {
        title: "2. key design decisions",
        content: [
          { type: "text", value: "1. Hybrid Retrieval (BM25 + Dense)\nPure dense retrieval struggled with oceanographic terminology — specific float IDs, coordinate ranges, and measurement units are exact-match queries that dense embeddings handle poorly. Adding BM25 brought sparse precision to complement semantic recall. This single change drove the accuracy jump from 70% → 90%." },
          { type: "text", value: "2. Flattening NETCDF before chunking\nNETCDF's multidimensional array structure isn't directly chunkable for RAG. The pipeline flattens each float's profile into a structured text record (date, location, depth, temperature, salinity) before sliding-window chunking — preserving context while making embeddings meaningful." },
          { type: "text", value: "3. Chunk size tuned for float profiles\nAfter testing, 512-token chunks with 64-token overlap on flattened float records gave the best retrieval precision. Larger chunks caused context dilution; smaller chunks lost the multi-depth profile structure that makes ARGO data useful." }
        ]
      },
      {
        title: "3. designing for resilience",
        content: [
          {
            type: "list", items: [
              "Graceful Handling of Missing Measurements: ARGO floats frequently have missing or flagged values. The ingestion pipeline explicitly marks missing measurements rather than dropping records, so the LLM context always knows when a gap is a data gap — not a retrieval failure.",
              "Score Threshold on Hybrid Retrieval: Retrieved chunks below a combined RRF score threshold are excluded from the LLM context window. This prevents the model from hallucinating answers from loosely-matched ocean regions when the query has no confident match.",
              "Indexed Chunk Metadata: Every chunk carries metadata (float ID, date, lat/lon, depth range) stored alongside the vector index. This lets the LLM cite specific float profiles in its answers — adding verifiability that impressed the KSEEM judges."
            ]
          }
        ]
      },
      {
        title: "4. communication & tech stack",
        content: [
          {
            type: "list", title: "Authentication & Communication:", items: [
              "Open API for research/demo use",
              "Frontend ↔ Backend: REST (/query, /ingest, /health)",
              "Ingestion pipeline runs as a one-time offline job; query API is always-on"
            ]
          },
          {
            type: "list", title: "Tech Stack - Backend:", items: [
              "Python 3.11",
              "FastAPI",
              "LangChain",
              "xarray + netCDF4 (NETCDF parsing)",
              "rank_bm25 (sparse retrieval)",
              "Sentence Transformers (all-MiniLM-L6-v2)",
              "FAISS"
            ]
          },
          {
            type: "list", title: "Data & AI:", items: [
              "ARGO Float Program NETCDF dataset (5 GB)",
              "~20,000 semantic chunks post-processing",
              "OpenAI / Groq (LLM inference)"
            ]
          }
        ]
      },
      {
        title: "5. challenges & what i learned",
        content: [
          {
            type: "list", title: "Challenges Faced:", items: [
              "NETCDF is not RAG-friendly by default — the multidimensional array format required significant preprocessing before any meaningful chunking was possible.",
              "Embedding oceanographic jargon — general-purpose embedding models struggle with domain-specific terms and coordinate-based queries. BM25 was the pragmatic fix.",
              "5 GB indexing time — building the FAISS index for ~20K chunks was a multi-hour offline process. Designing the pipeline to run once and serve many was important.",
              "Evaluation without a ground truth dataset — accuracy was measured by manually validating LLM answers against raw NETCDF values, which was tedious but necessary."
            ]
          },
          {
            type: "list", title: "What I Learned:", items: [
              "Hybrid retrieval (sparse + dense) isn't just a nice-to-have for scientific data — it's often the difference between a working system and a broken one.",
              "Data preprocessing is 60% of a RAG project. The quality of your chunks determines the ceiling of your system.",
              "Domain data has domain quirks — you can't just throw any dataset at a generic RAG pipeline and expect it to work. You have to understand the data's structure first.",
              "Building something that impressed domain experts (the KSEEM judges) felt different from building something that impressed a general hackathon panel — and it pushed the technical bar higher."
            ]
          }
        ]
      }
    ]
  },
  "sentiment": {
    title: "Sentiment Analysis API & MLOps Pipeline",
    date: "November 2025",
    description: "Fine-tuned DistilBERT on 3.6M Amazon Reviews, served via FastAPI, monitored with W&B, packaged in Docker, and deployed via GitHub Actions.",
    badge: { text: "Production API", href: "https://github.com/FrostyZ07/Sentiment-Analysis-API" },
    logs: [
      {
        title: "0. where it started",
        content: [
          { type: "text", value: "Most 'sentiment analysis' projects stop at a Jupyter notebook. Train model, print accuracy, close laptop. This one was built to answer a different question: what does it actually take to take an NLP model all the way to production — with monitoring, CI/CD, drift detection, and a real API?" },
          { type: "text", value: "The answer turned out to be: a lot more than the model. The DistilBERT fine-tuning was the easy part. The MLOps stack around it — experiment tracking, containerisation, drift detection, automated deployment — was where the real engineering happened." }
        ]
      },
      {
        title: "1. system architecture",
        content: [
          {
            type: "list", title: "Architecture Highlights:", items: [
              "DistilBERT fine-tuned on 3.6M Amazon Reviews — accuracy improved from 76% → 94%",
              "FastAPI serving real-time inference at ~500 ms latency",
              "W&B (Weights & Biases) for full experiment tracking across training runs",
              "Evidently AI for live data drift and prediction drift monitoring",
              "Docker containerised for consistent environments across dev and prod",
              "GitHub Actions CI/CD pipeline — test → build → deploy on every push",
              "Railway for cloud deployment"
            ]
          },
          { type: "diagram", value: "HTTP POST /predict  { \"text\": \"This product is amazing!\" }\n        ↓\nFastAPI Request Validation (Pydantic)\n        ↓\nTokenisation (DistilBERT Tokenizer, max_length=512)\n        ↓\nModel Inference (Fine-tuned DistilBERT, GPU/CPU)\n        ↓\nSoftmax → Label + Confidence Score\n        ↓\nEvidently AI Logging (input + prediction logged for drift monitoring)\n        ↓\nJSON Response  { \"label\": \"POSITIVE\", \"confidence\": 0.97 }" },
          {
            type: "list", title: "Component Breakdown:", items: [
              "DistilBERT (HuggingFace): Core sentiment classification model",
              "FastAPI: REST API — predict, health, batch endpoints",
              "Pydantic: Request/response schema validation",
              "W&B: Experiment tracking — loss curves, metrics, model versioning",
              "Evidently AI: Drift detection — monitors input distribution + prediction drift",
              "Docker: Containerisation — consistent dev/prod environment",
              "GitHub Actions: CI/CD — lint → test → build image → deploy",
              "Railway: Cloud hosting with Git-connected auto-deploy"
            ]
          }
        ]
      },
      {
        title: "2. key design decisions",
        content: [
          { type: "text", value: "1. DistilBERT over BERT\nDistilBERT is 40% smaller and 60% faster than BERT with only ~3% accuracy loss. For a real-time inference API where latency matters, this was the right trade-off. Hitting 500 ms at serving time validated the choice." },
          { type: "text", value: "2. Evidently AI for drift, not just accuracy\nAccuracy on a static test set tells you how good your model was at training time. Evidently AI tells you if the inputs your model is seeing in production are starting to look different from what it was trained on. This is what real production ML monitoring looks like." },
          { type: "text", value: "3. W&B for every run, not just the final one\nEvery training run — including the failed ones — was logged to W&B. This made it possible to compare hyperparameter configurations, catch overfitting early, and reproduce any run from a clean state." },
          { type: "text", value: "4. GitHub Actions as the single deployment gate\nNothing goes to Railway without passing lint checks and unit tests in CI. This enforced discipline even on a solo project — a habit worth building early." }
        ]
      },
      {
        title: "3. designing for resilience",
        content: [
          {
            type: "list", items: [
              "Input Validation with Pydantic: Every request is validated before touching the model — empty strings, oversized inputs, and malformed JSON are rejected at the API layer with clear error messages.",
              "Drift Detection Alerts (Evidently AI): Evidently monitors incoming text distributions against the training data baseline. If input drift crosses a configurable threshold, it flags for retraining.",
              "Health Endpoint: GET /health returns model load status, average latency, and last prediction timestamp. Allows Railway to detect failures and restart the container automatically.",
              "Batch Inference Endpoint: POST /predict/batch accepts up to 32 texts per request, batched through the model in a single forward pass. Reduces overhead for bulk use cases."
            ]
          }
        ]
      },
      {
        title: "4. tech stack & metrics",
        content: [
          {
            type: "list", title: "Tech Stack:", items: [
              "Python 3.11",
              "FastAPI",
              "HuggingFace Transformers (distilbert-base-uncased)",
              "PyTorch",
              "Pydantic v2",
              "Weights & Biases (W&B)",
              "Evidently AI",
              "GitHub Actions",
              "Docker",
              "Railway"
            ]
          },
          {
            type: "list", title: "Training Metrics:", items: [
              "Accuracy: 76% (Baseline) → 94% (Fine-tuned)",
              "Inference Latency: ~500 ms",
              "Training Samples: 3.6M",
              "Model Size: 66M parameters"
            ]
          }
        ]
      },
      {
        title: "5. challenges & what i learned",
        content: [
          {
            type: "list", title: "Challenges Faced:", items: [
              "3.6M samples is a lot of RAM — dataset streaming (HuggingFace datasets with streaming=True) was necessary to avoid OOM errors during tokenisation.",
              "Evidently AI integration — logging predictions in a non-blocking way without adding latency to the inference path required async logging with a background task queue.",
              "Railway cold starts — free-tier Railway instances sleep after inactivity. Added a /health ping from GitHub Actions post-deploy to warm the container.",
              "CI pipeline flakiness — early GitHub Actions runs were inconsistent due to Docker layer caching issues. Pinning base image versions and using cache-from fixed it."
            ]
          },
          {
            type: "list", title: "What I Learned:", items: [
              "The model is maybe 20% of a production ML system. The other 80% is serving, monitoring, versioning, and deployment infrastructure.",
              "Drift detection is not optional if you care about your model working six months from now.",
              "W&B makes you a better researcher by forcing you to be intentional about what you're measuring.",
              "Writing a CI/CD pipeline for an ML project for the first time is humbling and then immediately addictive."
            ]
          }
        ]
      }
    ]
  }
};

const ProjectLog = () => {
  const { projectId } = useParams();

  const renderContent = (content) => {
    return content.map((item, i) => {
      switch (item.type) {
        case "text":
          return <p key={i} className="article-text">{item.value}</p>;
        case "image":
          return (
            <div key={i} className="article-image-container">
              <img src={item.value} alt="Project detail" className="article-image" />
            </div>
          );
        case "list":
          return (
            <div key={i} className="article-list-container">
              {item.title && <div className="article-list-title">{item.title}</div>}
              <ul className="article-list">
                {item.items.map((li, j) => <li key={j}>{li}</li>)}
              </ul>
            </div>
          );
        case "tip":
          return <div key={i} className="article-tip">{item.value}</div>;
        case "code":
          return (
            <div key={i} className="article-code-container">
              <pre className="article-code">
                <code>{item.value}</code>
              </pre>
            </div>
          );
        case "diagram":
          return (
            <div key={i} className="article-diagram-container">
              <pre className="article-diagram">{item.value}</pre>
            </div>
          );
        default:
          return null;
      }
    });
  };

  if (!projectId || !projectLogs[projectId]) {
    return (
      <div className="project-log-page">
        <div className="section-header">
          <Link to="/" className="back-button">
            <ArrowBackRoundedIcon />
          </Link>
          <span className="section-title">/ project not found</span>
        </div>
      </div>
    );
  }

  const project = projectLogs[projectId];

  return (
    <div className="project-log-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/ project log</span>
      </div>

      <FadeInSection delay="200ms">
        <div className="project-log-header">
          <h1 className="project-log-title">{project.title}</h1>

          {project.image && (
            <div className="project-log-hero-wrapper" style={project.heroStyle || {}}>
              <div className="project-log-hero-container">
                <img src={project.image} alt={project.title} className="project-log-hero" />
              </div>
              {project.imageCaption && (
                <p className="project-log-hero-caption">{project.imageCaption}</p>
              )}
            </div>
          )}

          <p className="project-log-description">{project.description}</p>
          {project.badge && (
            <a
              href={project.badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-badge"
            >
              {project.badge.text}
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-badge"
              style={{ marginLeft: project.badge ? "10px" : "0px" }}
            >
              🚀 Live Demo
            </a>
          )}
          {project.date && <div className="project-log-date">{project.date}</div>}
        </div>
      </FadeInSection>

      {project.reelsLink && (
        <FadeInSection delay="300ms">
          <div className="reels-container">
            <a
              href={project.reelsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-reels-link"
            >
              <InstagramIcon className="reels-icon" />
              <span className="reels-text">Watch the build process on Instagram</span>
            </a>
          </div>
        </FadeInSection>
      )}

      {project.youtubeLink && (
        <FadeInSection delay="300ms">
          <div className="reels-container">
            <a
              href={project.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-reels-link"
            >
              <YouTubeIcon className="reels-icon" style={{ color: "#ff0000" }} />
              <span className="reels-text">Watch the project demo on YouTube</span>
            </a>
          </div>
        </FadeInSection>
      )}

      {project.liveLink && (
        <FadeInSection delay="300ms">
          <div className="reels-container">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-reels-link"
            >
              <OpenInBrowserIcon className="reels-icon" style={{ color: "var(--green-bright)" }} />
              <span className="reels-text">Visit the Live Web App</span>
            </a>
          </div>
        </FadeInSection>
      )}

      <div className="project-log-container">
        {project.logs.map((log, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <section className="article-section">
              <div className="article-header">
                <h2 className="article-title">{log.title}</h2>
              </div>
              <div className="article-content">
                {renderContent(log.content)}
              </div>
            </section>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ProjectLog;
